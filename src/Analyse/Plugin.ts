import postcss, { Root, Rule } from "postcss";

import PluginOptions, { defaultPluginOptions } from "./PluginOptions";
import PackageConfig from "./PackageConfig";

interface IPluginConstructor {
  packageConfig: PackageConfig;
}

export default class Plugin {
  private readonly _packageConfig: PackageConfig;
  private _options: PluginOptions;

  constructor({ packageConfig }: IPluginConstructor) {
    this._packageConfig = packageConfig;
    this._options = defaultPluginOptions;
  }

  get packageConfig(): PackageConfig {
    return this._packageConfig;
  }

  set options(value: PluginOptions) {
    // Overwrite default option properties with our user provided ones.
    // TODO: Validate config first?
    this._options = { ...value };
  }

  run(root: Root, options?: PluginOptions) {
    if (options !== undefined) {
      this.options = options;
    }

    root.walkRules((rule: Rule) => {
      console.log(rule.selector);
      if (rule.nodes !== undefined) {
        for (const node of rule.nodes) {
          if (node.source !== undefined && node.source.input !== undefined) {
            console.log(node);
            console.log(node.type);
            console.log(node.source.input);
          }
        }
      }
    });
  }

  prepare(): postcss.Plugin<PluginOptions> {
    return postcss.plugin<PluginOptions>(
      this.packageConfig.name,
      options => (root: Root) => this.run(root, options)
    );
  }
}
