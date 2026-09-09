const fs = require("fs");
const path = require("path");

const presets = ["checkstyle.xml","spotbugs-exclude.xml","pmd-ruleset.xml"];
const defaultPreset = "checkstyle.xml";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/java-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};
