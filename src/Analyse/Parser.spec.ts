import Parser from "./Parser";

// @see https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
const sizeUnitsFixture = [
  "cm", // Centimeters
  "mm", // Millimeters
  "Q", // Quarter-millimeters
  "Q", // Quarter-millimeters (decimals)
  "in", // Inches
  "pc", // Picas
  "pt", // Points
  "px", // Pixels
  "em", // Font size of the parent element.
  "ex", // x-height of the element's font.
  "ch", // The advance measure (width) of the glyph "0" of the element's font.
  "rem", // Font size of the root element.
  "lh", // Line height of the element.
  "vw", // 1% of the viewport's width.
  "vh", // 1% of the viewport's height.
  "vmin", // 1% of the viewport's smaller dimension.
  "vmax", // 1% of the viewport's larger dimension.
  "%"
];

// @see https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
// @see https://htmlcolorcodes.com/color-names/
const coloursFixture = [
  "#1ae",
  "#11ff33",
  "#123",
  "#112233",
  "ALICEBLUE",
  "Azure",
  "Bisque",
  "BLACK",
  "BlanchedAlmond",
  "Blue",
  "CornflowerBlue",
  "Cornsilk",
  "DarkBlue",
  "DarkCyan",
  "darkkhaki",
  "darkmagenta",
  "DarkOliveGreen",
  "darkorchid",
  "darksalmon",
  "DarkSeaGreen",
  "DARKSLATEGRAY",
  "DeepSkyBlue",
  "DIMGRAY",
  "DodgerBlue",
  "fuchsia",
  "GHOSTWHITE",
  "GRAY",
  "HoneyDew",
  "indianred",
  "khaki",
  "lavender",
  "LightBlue",
  "lightcoral",
  "lightsalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LIGHTSLATEGRAY",
  "magenta",
  "Maroon",
  "MediumAquamarine",
  "MediumBlue",
  "MediumSlateBlue",
  "MidnightBlue",
  "MintCream",
  "NavajoWhite",
  "Navy",
  "Olive",
  "orchid",
  "palegoldenrod",
  "plum",
  "PowderBlue",
  "RoyalBlue",
  "salmon",
  "SkyBlue",
  "SLATEGRAY",
  "Snow",
  "Teal",
  "thistle",
  "violet",
  "Wheat",
  "White",
  "WHITESMOKE"
];

// prettier-ignore
const countFixture = [100, 1, -1, -100, 10.5, -10.5, .5, -.5];

const sizesFixture: Array<string> = [];

sizeUnitsFixture.forEach(unit => {
  countFixture.forEach(count => {
    sizesFixture.push(`${count}${unit}`);
  });
});

const displays = ["block", "inline-block"];

const positions = ["top", "right", "bottom", "left"];

const validate = (
  fixture: Array<string>,
  should: Array<string>,
  shouldNot?: Array<string>
) => {
  fixture.forEach(size => {
    const parser = new Parser();
    parser.categoriseValue(size);

    if (shouldNot === undefined) {
      shouldNot = all.filter(type => !should.includes(type));
    }

    should.forEach((listName: string) => {
      it(`should detect "${size}" as a ${listName}`, () => {
        // @ts-ignore
        expect(parser[listName]).toContain(size);
      });
    });

    shouldNot.forEach((listName: string) => {
      it(`should reject "${size}" as a ${listName}`, () => {
        // @ts-ignore
        expect(parser[listName]).not.toContain(size);
      });
    });
  });
};

const all = ["sizes", "colours", "displays", "positions"];

describe("Parser", () => {
  describe("categoriseValue", () => {
    validate(coloursFixture, ["colours"]);
    validate(displays, ["displays"]);
    validate(positions, ["positions"]);
    validate(sizesFixture, ["sizes"]);
  });
});
