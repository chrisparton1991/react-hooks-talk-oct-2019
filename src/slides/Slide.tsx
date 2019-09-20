import * as PIXI from "pixi.js";
import { titleFontFamily, titleXOffset, titleYOffset, xMargin, yMargin } from "../theme";

abstract class Slide {
  protected app: PIXI.Application;
  protected container: PIXI.Container = new PIXI.Container();
  protected canvas: PIXI.Container;

  public constructor(app: PIXI.Application, canvas: PIXI.Container) {
    this.app = app;
    this.canvas = canvas;
  }

  public show() {
    this.container = new PIXI.Container();
    this.canvas.addChild(this.container);
    this.onEnter();
  }

  public hide() {
    this.onExit();
    this.container.destroy({children: true, baseTexture: true, texture: true});
    this.canvas.removeChild(this.container);
  }

  protected abstract onEnter(): void;
  protected abstract onExit(): void;

  protected title(text: string) {
    const title = new PIXI.Text(text);
    title.x = xMargin + titleXOffset;
    title.y = yMargin + titleYOffset;
    title.style.fill = 0xFFFFFF;
    title.style.fontFamily = titleFontFamily;
    title.style.fontVariant = "bold";
    title.style.fontSize = 128;
    title.style.letterSpacing = 1.2;
    title.style.padding = 10;
    return title;
  }

  protected add(...objects: PIXI.DisplayObject[]) {
    objects.forEach(object => this.container.addChild(object));
  }
}

export default Slide;
