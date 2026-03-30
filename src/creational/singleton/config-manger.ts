//singleton pattern is a software design pattern that guarantees a class has only one instance and provides a global point of access to it.

export class ConfigManager {
  private config: Map<string, string>;
  private static instance: ConfigManager;

  //ensure that other class cannot be accessed to the constructor and create a new instance -> so that we only can ensure only one instance for the singleton 
  private constructor() {
    this.config = new Map();
  }

  //--rule: ALWAYS RETURN A INSTANCE 
  //--this method is use for get the instance of the singleton's class
  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }

    return this.instance;
  }

  public setConfig(key: string, value: string): void {
    if (this.isValidKey(key) || this.isValidKey(value)) {
      this.config.set(key, value);
    }
  }

  public getConfig(key: string) {
    return this.config.get(key) ?? null;
  }

  private isValidKey(key: string): boolean {
    if (key.length >= 100) return false;
    const regex = /^[a-z0-9]+$/;
    return regex.test(key);
  }
}
