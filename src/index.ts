import SlideDeck from "./slideDesk/SlideDeck";
import HobbiesSlide from "./slides/intro/HobbiesSlide";
import TitleSlide from "./slides/intro/TitleSlide";
import AboutMeSlide from "./slides/intro/AboutMeSlide";
import ABriefHistorySlide from "./slides/part1/ABriefHistorySlide";
import defaultTheme from "./theme/defaultTheme";

new SlideDeck(defaultTheme).loadSlides(deck => [
  new TitleSlide(deck),
  new AboutMeSlide(deck),
  new HobbiesSlide(deck),
  new ABriefHistorySlide(deck)
]).show();
