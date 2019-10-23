import postcss, { Root } from "postcss";

import PluginOptions from "./PluginOptions";
import PackageConfig from "./PackageConfig";

interface IPluginConstructor {
  packageConfig: PackageConfig;
}

export default class Plugin {
  private readonly _packageConfig: PackageConfig;
  private _options: PluginOptions;

  constructor({ packageConfig }: IPluginConstructor) {
    this._packageConfig = packageConfig;
    this._options = {}; // TODO: Add default options here as we are merging them.
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
    // TODO: Now process the css.
    console.log(root.type);
  }

  prepare(): postcss.Plugin<PluginOptions> {
    return postcss.plugin<PluginOptions>(
      this.packageConfig.name,
      options => (root: Root) => this.run(root, options)
    );
  }
}
