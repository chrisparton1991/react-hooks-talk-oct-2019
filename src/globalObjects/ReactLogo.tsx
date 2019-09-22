import * as PIXI from "pixi.js";
import reactLogoSprite from "../assets/react-logo.png";
import SlideDeck from "../slideDesk/SlideDeck";

class ReactLogo {
  private instance: PIXI.Sprite | null = null;

  public getInstance(deck: SlideDeck) {
    if (this.instance === null) {
      this.instance = deck.elementBuilder.image(reactLogoSprite, 500, 300, 512, 512);
      this.instance.zIndex = 100;
    }

    return this.instance;
  }
}

export default new ReactLogo();
