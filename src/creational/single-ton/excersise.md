# ConfigManager - Singleton Pattern

Design and implement a configuration manager class `ConfigManager` using the Singleton Pattern to ensure there is only one global instance.

## Operations

The class should support the following operations:

- `ConfigManager getInstance()` - Get the unique instance of the configuration manager (static method)
- `void setConfig(String key, String value)` - Set a configuration key-value pair
- `String getConfig(String key)` - Get the value for the specified key, return `null` if the key does not exist

## Singleton Pattern Requirements

- No matter how many times `getInstance()` is called, it should always return the same instance
- Configurations set on one instance should be accessible through any other reference obtained via `getInstance()`

## Constraints

- `1 ≤ operations.length ≤ 1000`
- `key` and `value` contain only lowercase letters and digits, with length not exceeding 100
- At most 1000 calls will be made to `getInstance`, `setConfig`, and `getConfig` methods

## Example 1

**Input:**
```
operations = ["getInstance", "setConfig", "getInstance", "getConfig", "getConfig"]
params = [[], ["host", "localhost"], [], ["host"], ["port"]]
```

**Output:**
```
["ConfigManager", null, "ConfigManager", "localhost", null]
```

**Explanation:**

- `getInstance()` returns the singleton instance of ConfigManager
- `setConfig("host", "localhost")` sets the configuration, no return value (returns null)
- `getInstance()` returns the same instance again
- `getConfig("host")` returns the previously set value "localhost"
- `getConfig("port")` key does not exist, returns null

## Example 2

**Input:**
```
operations = ["getInstance", "setConfig", "setConfig", "getInstance", "getConfig", "getConfig", "getConfig"]
params = [[], ["db", "mysql"], ["port", "3306"], [], ["db"], ["port"], ["user"]]
```

**Output:**
```
["ConfigManager", null, null, "ConfigManager", "mysql", "3306", null]
```

**Explanation:**

- `getInstance()` gets the singleton instance
- `setConfig("db", "mysql")` sets the database configuration
- `setConfig("port", "3306")` sets the port configuration
- `getInstance()` gets the same instance (not a new one)
- `getConfig("db")` returns "mysql"
- `getConfig("port")` returns "3306"
- `getConfig("user")` key does not exist, returns null
