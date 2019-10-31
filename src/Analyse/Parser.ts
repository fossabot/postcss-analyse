import { Declaration } from "postcss";
import chroma from "chroma-js";

const isSize = /^-?(\d+|\d+\.\d+|\.\d+)(cm|mm|Q|in|pc|pt|px|em|ex|ch|rem|lh|vw|vh|vmin|vmax|%)?$/;

const isColour = /^#[0-9a-fA-Z]{3,6}$/;

const isDisplay = /^(inline-)?block$/;

const isPosition = /^(top|right|bottom|left)$/;

export default class Parser {
  private readonly _sizes: Set<string>;
  private readonly _colours: Set<string>;
  private readonly _displays: Set<string>;
  private readonly _positions: Set<string>;
  private readonly _unknown: Set<string>;

  constructor() {
    this._sizes = new Set();
    this._colours = new Set();
    this._displays = new Set();
    this._positions = new Set();
    this._unknown = new Set();
  }

  get sizes(): Set<string> {
    return this._sizes;
  }

  get colours(): Set<string> {
    return this._colours;
  }

  get displays(): Set<string> {
    return this._displays;
  }

  get positions(): Set<string> {
    return this._positions;
  }

  get unknown(): Set<string> {
    return this._unknown;
  }

  selectorDeclaration(selector: string, value: Declaration) {
    this.categoriseValue(value.value);
  }

  categoriseValue(value: string) {
    if (isSize.test(value)) {
      this.sizes.add(value);
      return;
    }

    if (isDisplay.test(value)) {
      this.displays.add(value);
      return;
    }

    if (isPosition.test(value)) {
      this.positions.add(value);
      return;
    }

    if (isColour.test(value)) {
      this.colours.add(value);
      return;
    }

    try {
      chroma(value);
      this.colours.add(value);
      return;
    } catch (e) {}

    this.unknown.add(value);
  }
}
