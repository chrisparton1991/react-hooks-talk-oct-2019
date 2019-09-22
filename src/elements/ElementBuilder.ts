import * as PIXI from "pixi.js";
import Theme from "../theme/Theme";

class ElementBuilder {
  private readonly theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  public title(text: string) {
    const {safeMarginX, safeMarginY, titleOffsetX, titleOffsetY, titleFontFamily} = this.theme;
    const title = new PIXI.Text(text);
    title.x = safeMarginX + titleOffsetX;
    title.y = safeMarginY + titleOffsetY;
    title.style.fill = 0xFFFFFF;
    title.style.fontFamily = titleFontFamily;
    title.style.fontSize = 128;
    title.style.letterSpacing = 1.2;
    title.style.padding = 10;
    return title;
  }

  public body(lines: string[], offsetY: number) {
    const {safeMarginX, safeMarginY, titleOffsetX, bodyFontFamily} = this.theme;
    const body = new PIXI.Text(lines.join("\n"));
    body.x = safeMarginX + titleOffsetX;
    body.y = safeMarginY + offsetY;
    body.style.fill = 0xFFFFFF;
    body.style.fontFamily = "aa, " + bodyFontFamily;
    body.style.fontSize = 48;
    body.style.letterSpacing = 1.2;
    body.style.padding = 10;
    return body;
  }

  public image(url: string, x: number, y: number, width: number, height: number) {
    const {safeMarginX, safeMarginY} = this.theme;
    const image = PIXI.Sprite.from(url);
    image.x = safeMarginX + x;
    image.y = safeMarginY + y;
    image.width = width;
    image.height = height;
    return image;
  }
}

export default ElementBuilder;
