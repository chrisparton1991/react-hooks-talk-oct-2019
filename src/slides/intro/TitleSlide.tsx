import SlideDeck from "../../slideDesk/SlideDeck";
import Slide from "../Slide";

class TitleSlide extends Slide {
  private readonly title: PIXI.Text;

  constructor(deck: SlideDeck) {
    super(deck);
    this.title = this.build.title("React Hooks");
    this.add(this.title);

    const body = this.build.body(["‣😀 Some body text", "Line 2"], this.title.height);
    this.add(body);

    this.steps = [];
  }

  onEnter() {
  }

  onExit() {
  }
}

export default TitleSlide;
