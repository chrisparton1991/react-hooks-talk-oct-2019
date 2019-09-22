import Theme from "./Theme";

const [canvasWidth, canvasHeight] = [1920, 1080];

const theme: Theme = {
  /** The unscaled width of the canvas. */
  canvasWidth,

  /** The unscaled height of the canvas. */
  canvasHeight,

  /** Horizontal margin to prevent content from being cropped, expressed as a 0..1 percentage of the canvas width. */
  safeMarginX: canvasWidth * 0.04,

  /** Vertical margin to prevent content from being cropped, expressed as a 0..1 percentage of the canvas width. */
  safeMarginY: canvasHeight * 0.10,

  /** The colour of the slide background, expressed as a hexadecimal colour e.g. 0xFFFFFF. */
  backgroundColor: 0x282d64,

  /** The font to use for titles. **/
  titleFontFamily: "League Spartan",

  /** Horizontal title offset to account for font alignment issues. **/
  titleOffsetX: 0,

  /** Vertical title offset to account for font alignment issues. **/
  titleOffsetY: -42,

  /** The font to use for body text. **/
  bodyFontFamily: "Lato"
};

export default theme;
