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
    title.style.fontVariant = "bold";
    title.style.fontSize = 128;
    title.style.letterSpacing = 1.2;
    title.style.padding = 10;
    return title;
  }
}

export default ElementBuilder;
