import Plugin from "../index";
import postcss, { Result } from "postcss";
import PluginOptions, { defaultPluginOptions } from "../Analyse/PluginOptions";
import fs from "fs";
import * as path from "path";

describe("PostCSS", () => {
  const options: PluginOptions = defaultPluginOptions;

  // NOTE: Just a test file, could be anything.
  const filePath = path.join(
    __dirname,
    "/../../node_modules/bulma/css/bulma.min.css"
  );
  const exampleCSS = fs
    .readFileSync(filePath, "UTF-8")
    .toString()
    .replace("sourceMappingURL", "");

  it("can run our plugin", (done) => {
    postcss([Plugin(options)])
      .process(exampleCSS, { from: filePath })
      .then((processed: Result) => {
        expect(processed).toBeDefined();
        expect(processed.css).toEqual(exampleCSS);
        done();
      });
  });
});
