import { Table } from "console-table-printer";
import Parser from "./Parser";

const MAX_OK_SIZE = 50;
const MAX_WARNING_SIZE = 100;
const MAX_OK_COLOUR = 50;
const MAX_WARNING_COLOUR = 100;

export default class Reporting {
  console(parser: Parser) {
    const p = new Table();

    let sizesStatusColour;

    if (parser.sizes.size < MAX_OK_SIZE) {
      sizesStatusColour = "green";
    } else if (parser.sizes.size < MAX_WARNING_SIZE) {
      sizesStatusColour = "yellow";
    } else {
      sizesStatusColour = "red";
    }

    p.addRow(
      {
        category: "Sizes",
        count: parser.sizes.size
      },
      { color: sizesStatusColour }
    );

    let coloursStatusColour;

    if (parser.colours.size < MAX_OK_COLOUR) {
      coloursStatusColour = "green";
    } else if (parser.colours.size < MAX_WARNING_COLOUR) {
      coloursStatusColour = "yellow";
    } else {
      coloursStatusColour = "red";
    }

    p.addRow(
      {
        category: "Colours",
        count: parser.colours.size
      },
      { color: coloursStatusColour }
    );

    p.printTable();
  }
}
