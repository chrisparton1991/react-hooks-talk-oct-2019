import { move } from "../../interactions/Interactions";
import SlideDeck from "../../slideDesk/SlideDeck";
import Slide from "../Slide";

class TitleSlide extends Slide {
  private readonly title: PIXI.Text;

  constructor(deck: SlideDeck) {
    super(deck);
    this.title = this.build.title("React Hooks");
    this.add(this.title);

    this.steps = [
      move(this.title, {x: 100, y: 100}),
      move(this.title, {x: 0, y: 200}),
    ];
  }

  onEnter() {
  }

  onExit() {
  }
}

export default TitleSlide;
