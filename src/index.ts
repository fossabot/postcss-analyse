import Plugin from "./Analyse/Plugin";
import PackageConfig from "./Analyse/PackageConfig";

const packageConfig = new PackageConfig();
const plugin = new Plugin({ packageConfig }).prepare();
export = plugin;
