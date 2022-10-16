import { basename as pathBasename, join as pathJoin } from "path";
import { homedir, tmpdir } from "os";
import { isString as adIsString } from "@hugoalh/advanced-determine";
const homeRoot = homedir();
const downloadRoot = pathJoin(homeRoot, "Downloads");
const temporaryRoot = tmpdir();
/**
 * @function environmentPathsLinux
 * @param {string} name
 * @returns {{cache:string,cacheRoot:string,config:string,configRoot:string,data:string,dataRoot:string,download:string,downloadRoot:string,log:string,logRoot:string,temp:string,tempRoot:string}}
 */
function environmentPathsLinux(name) {
	let cacheRoot = process.env.XDG_CACHE_HOME || pathJoin(homeRoot, ".cache");
	let configRoot = process.env.XDG_CONFIG_HOME || pathJoin(homeRoot, ".config");
	let dataRoot = process.env.XDG_DATA_HOME || pathJoin(homeRoot, ".local", "share");
	let logRoot = process.env.XDG_STATE_HOME || pathJoin(homeRoot, ".local", "state");
	let tempRoot = pathJoin(temporaryRoot, pathBasename(homeRoot));
	return {
		cache: pathJoin(cacheRoot, name),
		cacheRoot,
		config: pathJoin(configRoot, name),
		configRoot,
		data: pathJoin(dataRoot, name),
		dataRoot,
		download: pathJoin(downloadRoot, name),
		downloadRoot,
		log: pathJoin(logRoot, name),
		logRoot,
		temp: pathJoin(tempRoot, name),
		tempRoot
	};
}
/**
 * @function environmentPathsMac
 * @param {string} name
 * @returns {{cache:string,cacheRoot:string,config:string,configRoot:string,data:string,dataRoot:string,download:string,downloadRoot:string,log:string,logRoot:string,temp:string,tempRoot:string}}
 */
function environmentPathsMac(name) {
	let library = pathJoin(homeRoot, "Library");
	let cacheRoot = pathJoin(library, "Caches");
	let configRoot = pathJoin(library, "Preferences");
	let dataRoot = pathJoin(library, "Application Support");
	let logRoot = pathJoin(library, "Logs");
	return {
		cache: pathJoin(cacheRoot, name),
		cacheRoot,
		config: pathJoin(configRoot, name),
		configRoot,
		data: pathJoin(dataRoot, name),
		dataRoot,
		download: pathJoin(downloadRoot, name),
		downloadRoot,
		log: pathJoin(logRoot, name),
		logRoot,
		temp: pathJoin(temporaryRoot, name),
		tempRoot: temporaryRoot
	};
}
/**
 * @function environmentPathsWindows
 * @param {string} name
 * @returns {{cache:string,cacheRoot:string,config:string,configRoot:string,data:string,dataRoot:string,download:string,downloadRoot:string,log:string,logRoot:string,temp:string,tempRoot:string}}
 */
function environmentPathsWindows(name) {
	let appDataLocal = process.env.LOCALAPPDATA || pathJoin(homeRoot, "AppData", "Local");
	let appDataRoaming = process.env.APPDATA || pathJoin(homeRoot, "AppData", "Roaming");
	return {
		cache: pathJoin(appDataLocal, name, "Cache"),
		cacheRoot: appDataLocal,
		config: pathJoin(appDataRoaming, name, "Config"),
		configRoot: appDataRoaming,
		data: pathJoin(appDataLocal, name, "Data"),
		dataRoot: appDataLocal,
		download: pathJoin(homeRoot, "Downloads", name),
		downloadRoot,
		log: pathJoin(appDataLocal, name, "Log"),
		logRoot: appDataLocal,
		temp: pathJoin(temporaryRoot, name),
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
	if (!adIsString(name, {
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
export default environmentPaths;
