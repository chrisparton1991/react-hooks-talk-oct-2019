import 'normalize.css'
import WebFont from "webfontloader";
import SlideDeck from "./slideDesk/SlideDeck";
import AboutMeSlide from "./slides/intro/AboutMeSlide";
import HobbiesSlide from "./slides/intro/HobbiesSlide";
import TitleSlide from "./slides/intro/TitleSlide";
import ABriefHistorySlide from "./slides/part1/ABriefHistorySlide";
import './style.css'
import defaultTheme from "./theme/defaultTheme";

const theme = defaultTheme;

WebFont.load({
  custom: {
    families: [theme.titleFontFamily],
    urls: ['fonts/fonts.css']
  },
  active: start
});

function start() {
  new SlideDeck(theme).loadSlides(deck => [
    new TitleSlide(deck),
    new AboutMeSlide(deck),
    new HobbiesSlide(deck),
    new ABriefHistorySlide(deck)
  ]).show();
}
