const advancedDetermine = require("@hugoalh/advanced-determine");
const os = require("os");
const path = require("path");
const homeRoot = os.homedir();
const downloadRoot = path.join(homeRoot, "Downloads");
const temporaryRoot = os.tmpdir();
/**
 * @function environmentPathsLinux
 * @param {string} name
 * @returns {{cache:string,cacheRoot:string,config:string,configRoot:string,data:string,dataRoot:string,download:string,downloadRoot:string,log:string,logRoot:string,temp:string,tempRoot:string}}
 */
function environmentPathsLinux(name) {
	let cacheRoot = process.env.XDG_CACHE_HOME || path.join(homeRoot, ".cache");
	let configRoot = process.env.XDG_CONFIG_HOME || path.join(homeRoot, ".config");
	let dataRoot = process.env.XDG_DATA_HOME || path.join(homeRoot, ".local", "share");
	let logRoot = process.env.XDG_STATE_HOME || path.join(homeRoot, ".local", "state");
	let tempRoot = path.join(temporaryRoot, path.basename(homeRoot));
	return {
		cache: path.join(cacheRoot, name),
		cacheRoot,
		config: path.join(configRoot, name),
		configRoot,
		data: path.join(dataRoot, name),
		dataRoot,
		download: path.join(downloadRoot, name),
		downloadRoot,
		log: path.join(logRoot, name),
		logRoot,
		temp: path.join(tempRoot, name),
		tempRoot
	};
}
/**
 * @function environmentPathsMac
 * @param {string} name
 * @returns {{cache:string,cacheRoot:string,config:string,configRoot:string,data:string,dataRoot:string,download:string,downloadRoot:string,log:string,logRoot:string,temp:string,tempRoot:string}}
 */
function environmentPathsMac(name) {
	let library = path.join(homeRoot, "Library");
	let cacheRoot = path.join(library, "Caches");
	let configRoot = path.join(library, "Preferences");
	let dataRoot = path.join(library, "Application Support");
	let logRoot = path.join(library, "Logs");
	return {
		cache: path.join(cacheRoot, name),
		cacheRoot,
		config: path.join(configRoot, name),
		configRoot,
		data: path.join(dataRoot, name),
		dataRoot,
		download: path.join(downloadRoot, name),
		downloadRoot,
		log: path.join(logRoot, name),
		logRoot,
		temp: path.join(temporaryRoot, name),
		tempRoot: temporaryRoot
	};
}
/**
 * @function environmentPathsWindows
 * @param {string} name
 * @returns {{cache:string,cacheRoot:string,config:string,configRoot:string,data:string,dataRoot:string,download:string,downloadRoot:string,log:string,logRoot:string,temp:string,tempRoot:string}}
 */
function environmentPathsWindows(name) {
	let appDataLocal = process.env.LOCALAPPDATA || path.join(homeRoot, "AppData", "Local");
	let appDataRoaming = process.env.APPDATA || path.join(homeRoot, "AppData", "Roaming");
	return {
		cache: path.join(appDataLocal, name, "Cache"),
		cacheRoot: appDataLocal,
		config: path.join(appDataRoaming, name, "Config"),
		configRoot: appDataRoaming,
		data: path.join(appDataLocal, name, "Data"),
		dataRoot: appDataLocal,
		download: path.join(homeRoot, "Downloads", name),
		downloadRoot,
		log: path.join(appDataLocal, name, "Log"),
		logRoot: appDataLocal,
		temp: path.join(temporaryRoot, name),
		tempRoot: temporaryRoot
	};
}
/**
 * @function environmentPaths
 * @description Get the correct OS-specific absolute environment paths for the current user.
 * @param {string} name Application name.
 * @returns {{cache:string,cacheRoot:string,config:string,configRoot:string,data:string,dataRoot:string,download:string,downloadRoot:string,log:string,logRoot:string,temp:string,tempRoot:string}} OS-specific absolute environment paths for the current user.
 */
function environmentPaths(name) {
	if (!advancedDetermine.isString(name, {
		empty: false,
		singleLine: true
	})) {
		throw new TypeError(`Argument \`name\` must be type of string (non-empty and single line)!`);
	}
	switch (process.platform) {
		case "darwin":
			return environmentPathsMac(name);
		case "win32":
			return environmentPathsWindows(name);
		default:
			if (process.platform.search(/^win/giu) === 0) {
				return environmentPathsWindows(name);
			}
			return environmentPathsLinux(name);
	}
}
module.exports = environmentPaths;
