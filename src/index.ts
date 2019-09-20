import Mousetrap from "mousetrap";
import * as PIXI from "pixi.js";
import TitleSlide from "./slides/TitleSlide";
import TitleSlide2 from "./slides/TitleSlide2";
import { backgroundColor, canvasHeight, canvasWidth, xMargin, yMargin } from "./theme";

init();

function init() {
  const app = new PIXI.Application({resolution: Math.max(window.devicePixelRatio, 2), antialias: true});

  const canvas = new PIXI.Container();
  const background = new PIXI.Graphics();
  canvas.addChild(background);
  app.stage.addChild(canvas);

  app.view.style.width = '100%';
  app.view.style.height = '100%';
  const bounds = drawCanvasBounds(canvas);
  Mousetrap.bind("b b", () => bounds.renderable = !bounds.renderable);

  resizeCanvas(app, canvas, background);
  window.addEventListener("resize", () => resizeCanvas(app, canvas, background));
  document.body.appendChild(app.view);

  const slides = [new TitleSlide(app, canvas), new TitleSlide2(app, canvas)];
  slides[0].show();
}

function resizeCanvas(app: PIXI.Application, canvas: PIXI.Container, background: PIXI.Graphics) {
  const {innerWidth: windowWidth, innerHeight: windowHeight} = window;
  app.renderer.resize(windowWidth, windowHeight);

  const scale = Math.min(windowWidth / canvasWidth, windowHeight / canvasHeight);
  canvas.scale.x = canvas.scale.y = scale;
  canvas.position.x = (windowWidth / 2) - (canvasWidth * scale / 2);
  canvas.position.y = (windowHeight / 2) - (canvasHeight * scale / 2);

  drawCanvasBackground(background);
}

function drawCanvasBackground(background: PIXI.Graphics) {
  background.clear();
  background.beginFill(backgroundColor);
  background.drawRect(0, 0, canvasWidth, canvasHeight);
  background.endFill();
}

function drawCanvasBounds(canvas: PIXI.Container) {
  const bounds = new PIXI.Graphics();
  bounds.beginFill(0xFFFFFF, .1);

  bounds.drawRect(0, 0, xMargin, canvasHeight); // Left column
  bounds.drawRect(canvasWidth - xMargin, 0, xMargin, canvasHeight); // Right column

  bounds.drawRect(xMargin, 0, canvasWidth - (xMargin * 2), yMargin); // Top row
  bounds.drawRect(xMargin, canvasHeight - yMargin, canvasWidth - (xMargin * 2), yMargin); // Bottom row

  bounds.endFill();

  bounds.renderable = false;
  canvas.addChild(bounds);
  return bounds;
}
