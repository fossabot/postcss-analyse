import fs from "fs";
import * as path from "path";

interface IPackageConfig {
  name: string;
}

export default class PackageConfig {
  private readonly _config: IPackageConfig | undefined;

  config(): IPackageConfig {
    if (this._config !== undefined) {
      return this._config;
    }

    const stream = fs.readFileSync(
      path.join(__dirname, "/../package.json"),
      "UTF-8"
    );

    return JSON.parse(stream.toString());
  }

  get name(): string {
    return this.config.name;
  }
}
