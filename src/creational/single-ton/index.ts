import { ConfigManager } from "./config-manger";

const operations = ["getInstance", "setConfig", "setConfig", "getInstance", "getConfig", "getConfig", "getConfig"];
const params = [[], ["db", "mysql"], ["port", "3306"], [], ["db"], ["port"], ["user"]];

const output: (string | null)[] = [];

let instance: ConfigManager | null = null;

for (let i = 0; i < operations.length; i++) {
  const op = operations[i];
  const args = params[i];

  switch (op) {
    case "getInstance":args
      instance = ConfigManager.getInstance();
      output.push("ConfigManager");
      break;
    case "setConfig":
      instance?.setConfig(args[0], args[1]);
      output.push(null);
      break;
    case "getConfig":
      output.push(instance?.getConfig(args[0]) ?? null);
      break;
  }
}

console.log(output);
// Output: ["ConfigManager", null, null, "ConfigManager", "mysql", "3306", null