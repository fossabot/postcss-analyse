import postcss, { Root } from "postcss";

import PluginOptions from "./PluginOptions";
import PackageConfig from "./PackageConfig";

export default class Plugin {
  prepare(): postcss.Plugin<PluginOptions> {
    const packageConfig = new PackageConfig();

    return postcss.plugin<PluginOptions>(packageConfig.name, options => {
      return (root: Root) => {
        console.log(root.type);
      };
    });
  }
}
