import PackageConfig from "./PackageConfig";
import * as fs from "fs";

jest.mock("fs");

describe("PackageConfig", () => {
  it("config", () => {
    const packageConfig = new PackageConfig();
    const projectName = "demo";

    // @ts-ignore
    fs.readFileSync.mockReturnValue({
      toString: () => {
        return JSON.stringify({
          name: projectName,
        });
      },
    });

    expect(packageConfig.name).toEqual(projectName);
    expect(packageConfig.name).toEqual(projectName);

    // The second time we access should not trigger another call.
    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
  });
});
