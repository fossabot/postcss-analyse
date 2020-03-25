export const defaultPluginOptions: PluginOptions = {
  maxOkColour: 50,
  maxOkSize: 50,
  maxWarningColour: 100,
  maxWarningSize: 100,
};

export default interface PluginOptions {
  maxOkColour: number;
  maxOkSize: number;
  maxWarningColour: number;
  maxWarningSize: number;
}
