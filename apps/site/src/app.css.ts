import { style, globalFontFace } from "@vanilla-extract/css";
import { globalStyle } from "@vanilla-extract/css";
import { recipe } from '@vanilla-extract/recipes';

const comicSans = "GlobalComicSans";
globalFontFace(comicSans, {
  src: 'local("Comic Sans MS")',
});

// https://stackoverflow.com/questions/73617263/how-to-set-font-face-in-vanilla-extract-css
const contentFont = "Outfit";
globalFontFace(contentFont, {
  src: "url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format('woff2')",
  fontWeight: 100,
  fontStyle: "normal",
  fontDisplay: "swap",
});

const muliFonnt = "Muli";
globalFontFace(muliFonnt, {
  src: "url(https://fonts.gstatic.com/s/muli/v28/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk40eifwniDtzNAAw.woff2) format('woff2');",
  fontWeight: 400,
  fontStyle: 'normal',
  fontDisplay: "swap",
  unicodeRange:
    "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB",
});


globalStyle("html, body", {
  margin: 0,
  fontFamily: "'Roboto', sans-serif",
});

export const nav = recipe({
  base: `text-xl font-semibold`,
});
