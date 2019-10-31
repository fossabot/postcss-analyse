import postcss, { Declaration, Root, Rule } from "postcss";
import PluginOptions, { defaultPluginOptions } from "./PluginOptions";
import PackageConfig from "./PackageConfig";
import Parser from "./Parser";
import Reporting from "./Reporting";

interface IPluginConstructor {
  packageConfig: PackageConfig;
  parser: Parser;
  reporting: Reporting;
}

export default class Plugin {
  private readonly _packageConfig: PackageConfig;
  private _options: PluginOptions;
  private _parser: Parser;
  private _reporting: Reporting;

  constructor({ packageConfig, parser, reporting }: IPluginConstructor) {
    this._packageConfig = packageConfig;
    this._parser = parser;
    this._options = defaultPluginOptions;
    this._reporting = reporting;
  }

  get packageConfig(): PackageConfig {
    return this._packageConfig;
  }

  set options(value: PluginOptions) {
    // Overwrite default option properties with our user provided ones.
    // TODO: Validate config first?
    this._options = { ...value };
  }

  get parser(): Parser {
    return this._parser;
  }

  run(root: Root, options?: PluginOptions) {
    if (options !== undefined) {
      this.options = options;
    }

    root.walkRules((rule: Rule) => {
      if (rule.nodes !== undefined) {
        for (const node of rule.nodes) {
          this.parser.selectorDeclaration(rule.selector, <Declaration>node);
        }
      }
    });

    this._reporting.console(this.parser);
  }

  prepare(): postcss.Plugin<PluginOptions> {
    return postcss.plugin<PluginOptions>(
      this.packageConfig.name,
      options => (root: Root) => this.run(root, options)
    );
  }
}
