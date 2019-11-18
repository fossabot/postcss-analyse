import Plugin from "./Analyse/Plugin";
import PackageConfig from "./Analyse/PackageConfig";
import Parser from "./Analyse/Parser";
import Reporting from "./Analyse/Reporting";

const packageConfig = new PackageConfig();
const parser = new Parser();
const reporting = new Reporting();

const plugin = new Plugin({ packageConfig, parser, reporting }).prepare();

export = plugin;
