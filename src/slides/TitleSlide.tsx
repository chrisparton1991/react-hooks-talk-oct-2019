import Slide from "./Slide";

class TitleSlide extends Slide {

  onEnter() {
    this.add(this.title("React Hooks"));
  }

  onExit() {
  }
}

export default TitleSlide;
