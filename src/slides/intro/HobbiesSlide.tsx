import * as PIXI from "pixi.js";
import SlideDeck from "../../slideDesk/SlideDeck";
import Slide from "../Slide";

class HobbiesSlide extends Slide {
  private readonly title: PIXI.Text;

  constructor(deck: SlideDeck) {
    super(deck);
    this.title = this.build.title("I like lights");
    this.add(this.title);

    this.steps = [];
  }

  onEnter() {
  }

  onExit() {
  }
}

export default HobbiesSlide;
