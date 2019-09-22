import 'normalize.css'
import WebFont from "webfontloader";
import ReactLogo from "./globalObjects/ReactLogo";
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
    families: [theme.titleFontFamily, theme.bodyFontFamily],
    urls: ['fonts/fonts.css']
  },
  active: start
});

async function start() {
  await new SlideDeck(theme)
    .loadSlides(deck => [
      new TitleSlide(deck),
      new AboutMeSlide(deck),
      new HobbiesSlide(deck),
      new ABriefHistorySlide(deck)
    ])
    .loadGlobalObjects(deck => [
      ReactLogo.getInstance(deck)
    ])
    .show();
}
