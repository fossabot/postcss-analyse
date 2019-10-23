import Plugin from "../index";
import postcss, { Result } from "postcss";

describe("PostCSS", () => {
  const exampleCSS = "a {color: green;}";
  it("can run our plugin", done => {
    postcss([Plugin()])
      .process(exampleCSS, { from: "example.css" })
      .then((processed: Result) => {
        expect(processed).toBeDefined();
        expect(processed.css).toEqual(exampleCSS);
        done();
      });
  });
});
