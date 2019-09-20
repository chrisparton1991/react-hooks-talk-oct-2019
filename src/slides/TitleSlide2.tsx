import Slide from "./Slide";

class TitleSlide2 extends Slide {

  onEnter() {
    this.add(this.title("Slide 2"));
  }

  onExit() {
  }
}

export default TitleSlide2;
