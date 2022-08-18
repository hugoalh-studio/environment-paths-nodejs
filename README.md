# Environment Paths (NodeJS)

[`EnvironmentPaths.NodeJS`](https://github.com/hugoalh-studio/environment-paths-nodejs)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/environment-paths-nodejs?label=Contributors&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/environment-paths-nodejs/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/environment-paths-nodejs?label=Issues&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/environment-paths-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/environment-paths-nodejs?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/environment-paths-nodejs/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/environment-paths-nodejs?label=Discussions&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/environment-paths-nodejs/discussions)
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/environment-paths-nodejs?label=Stars&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/environment-paths-nodejs/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/hugoalh-studio/environment-paths-nodejs?label=Forks&logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/environment-paths-nodejs/network/members)
![GitHub Languages](https://img.shields.io/github/languages/count/hugoalh-studio/environment-paths-nodejs?label=Languages&logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/environment-paths-nodejs?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/environment-paths-nodejs)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh-studio/environment-paths-nodejs?label=Alerts&logo=lgtm&logoColor=ffffff&style=flat-square)
![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/environment-paths-nodejs?label=Grade&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/environment-paths-nodejs)
[![License](https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square)](./LICENSE.md)

| **Release** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/environment-paths-nodejs?label=%20&style=flat-square)) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/environment-paths-nodejs?label=%20&style=flat-square)) |
|:-:|:-:|:-:|
| [**GitHub**](https://github.com/hugoalh-studio/environment-paths-nodejs/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/environment-paths-nodejs/total?label=%20&style=flat-square) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/environment-paths-nodejs?sort=semver&label=%20&style=flat-square) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/environment-paths-nodejs?include_prereleases&sort=semver&label=%20&style=flat-square) |
| [**NPM**](https://www.npmjs.com/package/@hugoalh/environment-paths) ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/environment-paths?label=%20&style=flat-square) | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/environment-paths/latest?label=%20&style=flat-square) | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/environment-paths/pre?label=%20&style=flat-square) |

## 📝 Description

A NodeJS module to get the correct OS-specific absolute environment paths for the current user.

| **Type** | **Windows** | **MacOS** | **Linux** |
|:-:|:-:|:-:|:-:|
| Cache | `%LOCALAPPDATA%\{Name}\cache` / `C:\Users\{Username}\AppData\Local\{Name}\cache` | `~/Library/Caches/{Name}` | `$XDG_CACHE_HOME/{Name}` / `~/.cache/{Name}` |
| Config | `%APPDATA%\{Name}\config` / `C:\Users\{Username}\AppData\Roaming\{Name}\config` | `~/Library/Preferences/{Name}` | `$XDG_CONFIG_HOME/{Name}` / `~/.config/{Name}` |
| Data | `%LOCALAPPDATA%\{Name}\data` / `C:\Users\{Username}\AppData\Local\{Name}\data` | `~/Library/Application Support/{Name}` | `$XDG_DATA_HOME/{Name}` / `~/.local/share/{Name}` |
| Download | `~\Downloads` / `C:\Users\{Username}\Downloads` | `~/Downloads` | `~/Downloads` |
| Log | `%LOCALAPPDATA%\{Name}\log` / `C:\Users\{Username}\AppData\Local\{Name}\log` | `~/Library/Logs/{Name}` | `$XDG_STATE_HOME/{Name}` / `~/.local/state/{Name}` |
| Temp | `%LOCALAPPDATA%\Temp\{Name}` / `C:\Users\{Username}\AppData\Local\Temp\{Name}` | `/var/folders/jf/f2twvvvs5jl_m49tf034ffpw0000gn/T/{Name}`\* | `/tmp/{Username}/{Name}` |

**\*:** Path contains random EUID.

*This project is inspired from `env-paths` ([GitHub](https://github.com/sindresorhus/env-paths))([NPM](https://www.npmjs.com/package/env-paths)).*

### ⚠ Important

- This module only generates the path strings and does not create the directories.

## 📚 Documentation

### Getting Started

#### Install

- NodeJS >= v10.13.0
- NPM >= v6.4.1

```sh
npm install @hugoalh/environment-paths
```

#### Use In CommonJS

```js
const environmentPaths = require("@hugoalh/environment-paths");
```

#### Use In ModuleJS

```js
import environmentPaths from "@hugoalh/environment-paths";
```

### API

#### Function

```ts
environmentPaths(
  name: string// Application name.
): {
  cache: string,
  config: string,
  data: string,
  download: string,
  log: string,
  temp: string
}
```
