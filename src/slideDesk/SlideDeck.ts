import Mousetrap from "mousetrap";
import * as PIXI from "pixi.js";
import ElementBuilder from "../elements/ElementBuilder";
import { noop } from "../interactions/Interactions";
import Slide from "../slides/Slide";
import Theme from "../theme/Theme";

class SlideDeck {
  public app = new PIXI.Application({resolution: Math.max(window.devicePixelRatio, 2), antialias: true});
  public canvas = new PIXI.Container();
  public theme: Theme;
  public elementBuilder: ElementBuilder;

  private background = new PIXI.Graphics();
  private slideIndex = 0;
  private stepIndex = 0;
  private slides: Slide[] = [];
  private isTransitioning = false;

  public constructor(theme: Theme) {
    this.theme = theme;
    this.elementBuilder = new ElementBuilder(theme);
    this.drawCanvasBackground();
    this.drawCanvasBounds();
    this.handleResize();
    this.handleInteraction();
  }

  public loadSlides(loadFn: (slideDeck: SlideDeck) => Slide[]) {
    this.slides = loadFn(this);
    return this;
  }

  public show() {
    this.app.stage.addChild(this.canvas);
    this.app.view.style.width = '100%';
    this.app.view.style.height = '100%';
    document.body.appendChild(this.app.view);
    this.currentSlide().show();
  }

  private drawCanvasBackground() {
    const {backgroundColor, canvasWidth, canvasHeight} = this.theme;

    this.background.clear();
    this.background.beginFill(backgroundColor);
    this.background.drawRect(0, 0, canvasWidth, canvasHeight);
    this.background.endFill();
    this.canvas.addChild(this.background);
  }

  private drawCanvasBounds() {
    const {canvasWidth, canvasHeight, safeMarginX, safeMarginY} = this.theme;

    const bounds = new PIXI.Graphics();
    bounds.beginFill(0xFFFFFF, .1);

    bounds.drawRect(0, 0, safeMarginX, canvasHeight); // Left column
    bounds.drawRect(canvasWidth - safeMarginX, 0, safeMarginX, canvasHeight); // Right column

    bounds.drawRect(safeMarginX, 0, canvasWidth - (safeMarginX * 2), safeMarginY); // Top row
    bounds.drawRect(safeMarginX, canvasHeight - safeMarginY, canvasWidth - (safeMarginX * 2), safeMarginY); // Bottom row

    bounds.endFill();

    bounds.renderable = false;
    this.canvas.addChild(bounds);
    Mousetrap.bind("b b", () => bounds.renderable = !bounds.renderable);
  }

  private handleResize() {
    const {canvas} = this;

    const resize = () => {
      const {innerWidth: windowWidth, innerHeight: windowHeight} = window;
      const {canvasWidth, canvasHeight} = this.theme;
      this.app.renderer.resize(windowWidth, windowHeight);

      const scale = Math.min(windowWidth / canvasWidth, windowHeight / canvasHeight);
      canvas.scale.x = canvas.scale.y = scale;
      canvas.position.x = (windowWidth / 2) - (canvasWidth * scale / 2);
      canvas.position.y = (windowHeight / 2) - (canvasHeight * scale / 2);
    };

    resize();
    window.addEventListener("resize", resize);
  }

  private handleInteraction() {
    Mousetrap.bind(["up", "left"], this.prev);
    Mousetrap.bind(["down", "right"], this.next);
  }

  private prev = async () => {
    if (this.isTransitioning) {
      return; // Need to wait for current transition to finish.
    } else if (this.slideIndex === 0 && this.stepIndex === 0) {
      return; // Already at start of show.
    }

    this.isTransitioning = true;
    this.stepIndex--;
    await this.currentStep().apply(true);

    if (this.stepIndex < 0) {
      this.currentSlide().hide();
      this.slideIndex--;

      this.stepIndex = this.slides[this.slideIndex].steps.length;
      this.currentSlide().show();
    }

    this.isTransitioning = false;
  };

  private next = async () => {
    if (this.isTransitioning) {
      return; // Need to wait for current transition to finish.
    } else if (this.slideIndex === this.slides.length - 1 && this.stepIndex === this.currentSlide().steps.length) {
      return; // Already at end of show.
    }

    this.isTransitioning = true;
    await this.currentStep().apply(false);
    this.stepIndex++;

    if (this.stepIndex > this.currentSlide().steps.length) {
      this.currentSlide().hide();
      this.slideIndex++;

      this.stepIndex = 0;
      this.currentSlide().show();
    }

    this.isTransitioning = false;
  };

  private currentStep = () => {
    return this.currentSlide().steps[this.stepIndex] || noop;
  };

  private currentSlide = () => {
    return this.slides[this.slideIndex];
  }
}

export default SlideDeck;
