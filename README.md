# Environment Paths (NodeJS)

[`EnvironmentPaths.NodeJS`](https://github.com/hugoalh-studio/environment-paths-nodejs)

![NodeJS](https://img.shields.io/badge/NodeJS-339933?logo=nodedotjs&logoColor=ffffff&style=flat-square "NodeJS")
![License](https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square "License")
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/environment-paths-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/environment-paths-nodejs/stargazers)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/environment-paths-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square "GitHub Contributors")](https://github.com/hugoalh-studio/environment-paths-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/environment-paths-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square "GitHub Issues")](https://github.com/hugoalh-studio/environment-paths-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/environment-paths-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square "GitHub Pull Requests")](https://github.com/hugoalh-studio/environment-paths-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/environment-paths-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square "GitHub Discussions")](https://github.com/hugoalh-studio/environment-paths-nodejs/discussions)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/environment-paths-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/environment-paths-nodejs)

| **Releases** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/environment-paths-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/environment-paths-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/environment-paths-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/environment-paths-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/environment-paths-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/environment-paths-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/environment-paths) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/environment-paths?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/environment-paths/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/environment-paths/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

## 📝 Description

A NodeJS module to get the correct OS-specific absolute environment paths for the current user.

| **Type** | **Windows** | **MacOS** | **Linux** |
|:-:|:-:|:-:|:-:|
| Cache | `%LOCALAPPDATA%\{Name}\Cache` / `C:\Users\{Username}\AppData\Local\{Name}\Cache` | `~/Library/Caches/{Name}` | `$XDG_CACHE_HOME/{Name}` / `~/.cache/{Name}` |
| Config | `%APPDATA%\{Name}\Config` / `C:\Users\{Username}\AppData\Roaming\{Name}\Config` | `~/Library/Preferences/{Name}` | `$XDG_CONFIG_HOME/{Name}` / `~/.config/{Name}` |
| Data | `%LOCALAPPDATA%\{Name}\Data` / `C:\Users\{Username}\AppData\Local\{Name}\Data` | `~/Library/Application Support/{Name}` | `$XDG_DATA_HOME/{Name}` / `~/.local/share/{Name}` |
| Download | `~\Downloads` / `C:\Users\{Username}\Downloads\{Name}` | `~/Downloads/{Name}` | `~/Downloads/{Name}` |
| Log | `%LOCALAPPDATA%\{Name}\Log` / `C:\Users\{Username}\AppData\Local\{Name}\Log` | `~/Library/Logs/{Name}` | `$XDG_STATE_HOME/{Name}` / `~/.local/state/{Name}` |
| Temp | `%LOCALAPPDATA%\Temp\{Name}` / `C:\Users\{Username}\AppData\Local\Temp\{Name}` | `/var/folders/jf/f2twvvvs5jl_m49tf034ffpw0000gn/T/{Name}`\* | `/tmp/{Username}/{Name}` |

**\*:** Path contains random EUID.

*This project is inspired from `env-paths` ([GitHub](https://github.com/sindresorhus/env-paths))([NPM](https://www.npmjs.com/package/env-paths)).*

### ⚠ Important

- This module only generates the path strings and does not create the directories.

## 📚 Documentation

### Getting Started

#### Install

- NodeJS >= v10.13.0

```sh
npm install @hugoalh/environment-paths
```

#### Use

##### CommonJS

```js
const environmentPaths = require("@hugoalh/environment-paths");
```

##### ModuleJS

```js
import environmentPaths from "@hugoalh/environment-paths";
```

### API

#### Function

```ts
environmentPaths(name: string/* Application name.*/): {
  cache: string;
  config: string;
  data: string;
  download: string;
  log: string;
  temp: string;
}
```
