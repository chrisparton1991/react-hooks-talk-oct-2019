import * as PIXI from "pixi.js";
import ReactLogo from "../../globalObjects/ReactLogo";
import { fade, group, move } from "../../interactions/Interactions";
import SlideDeck from "../../slideDesk/SlideDeck";
import Slide from "../Slide";

class AboutMeSlide extends Slide {
  private readonly title: PIXI.Text;

  constructor(deck: SlideDeck) {
    super(deck);
    this.title = this.build.title("About me");
    this.add(this.title);

    const reactLogo = ReactLogo.getInstance(this.deck);
    this.steps = [
      group(
        move(reactLogo, {x: 300, y: -200}, 1000),
        fade(reactLogo, -.9, 1000)
      )
    ];
  }

  onEnter() {
  }

  onExit() {
  }
}

export default AboutMeSlide;
