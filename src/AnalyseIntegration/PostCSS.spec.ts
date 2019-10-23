import Plugin from "../index";
import postcss, { Result } from "postcss";
import PluginOptions from "../Analyse/PluginOptions";

describe("PostCSS", () => {
  const options: PluginOptions = {};
  const exampleCSS = "a {color: green;}";

  it("can run our plugin", done => {
    postcss([Plugin(options)])
      .process(exampleCSS, { from: "example.css" })
      .then((processed: Result) => {
        expect(processed).toBeDefined();
        expect(processed.css).toEqual(exampleCSS);
        done();
      });
  });
});
