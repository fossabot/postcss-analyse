import { Table } from "console-table-printer";

import Parser from "./Parser";
import PluginOptions from "Analyse/PluginOptions";

export default class Reporting {
  console(parser: Parser, options: PluginOptions) {
    const {
      maxOkColour,
      maxOkSize,
      maxWarningColour,
      maxWarningSize,
    } = options;

    const p = new Table();

    let sizesStatusColour;

    if (parser.sizes.size < maxOkSize) {
      sizesStatusColour = "green";
    } else if (parser.sizes.size < maxWarningSize) {
      sizesStatusColour = "yellow";
    } else {
      sizesStatusColour = "red";
    }

    p.addRow(
      {
        category: "Sizes",
        count: parser.sizes.size,
        warningMax: maxOkSize,
        errorMax: maxWarningSize,
      },
      { color: sizesStatusColour }
    );

    let coloursStatusColour;

    if (parser.colours.size < maxOkColour) {
      coloursStatusColour = "green";
    } else if (parser.colours.size < maxWarningColour) {
      coloursStatusColour = "yellow";
    } else {
      coloursStatusColour = "red";
    }

    p.addRow(
      {
        category: "Colours",
        count: parser.colours.size,
        warningMax: maxOkColour,
        errorMax: maxWarningColour,
      },
      { color: coloursStatusColour }
    );

    p.printTable();
  }
}
