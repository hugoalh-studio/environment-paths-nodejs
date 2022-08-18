import { basename as pathBasename, join as pathJoin } from "path";
import { homedir, tmpdir } from "os";
import { isString as adIsString } from "@hugoalh/advanced-determine";
const homeRoot = homedir();
const temporaryRoot = tmpdir();
/**
 * @function environmentPathsLinux
 * @param {string} name
 * @returns {{cache:string,config:string,data:string,download:string,log:string,temp:string}}
 */
function environmentPathsLinux(name) {
	return {
		cache: pathJoin(process.env.XDG_CACHE_HOME || pathJoin(homeRoot, ".cache"), name),
		config: pathJoin(process.env.XDG_CONFIG_HOME || pathJoin(homeRoot, ".config"), name),
		data: pathJoin(process.env.XDG_DATA_HOME || pathJoin(homeRoot, ".local", "share"), name),
		download: pathJoin(homeRoot, "Downloads"),
		log: pathJoin(process.env.XDG_STATE_HOME || pathJoin(homeRoot, ".local", "state"), name),
		temp: pathJoin(temporaryRoot, pathBasename(homeRoot), name)
	};
};
/**
 * @function environmentPathsMac
 * @param {string} name
 * @returns {{cache:string,config:string,data:string,download:string,log:string,temp:string}}
 */
function environmentPathsMac(name) {
	let library = pathJoin(homeRoot, "Library");
	return {
		cache: pathJoin(library, "Caches", name),
		config: pathJoin(library, "Preferences", name),
		data: pathJoin(library, "Application Support", name),
		download: pathJoin(homeRoot, "Downloads"),
		log: pathJoin(library, "Logs", name),
		temp: pathJoin(temporaryRoot, name)
	};
};
/**
 * @function environmentPathsWindows
 * @param {string} name
 * @returns {{cache:string,config:string,data:string,download:string,log:string,temp:string}}
 */
function environmentPathsWindows(name) {
	let appDataLocal = process.env.LOCALAPPDATA || pathJoin(homeRoot, "AppData", "Local");
	let appDataRoaming = process.env.APPDATA || pathJoin(homeRoot, "AppData", "Roaming");
	return {
		cache: pathJoin(appDataLocal, name, "cache"),
		config: pathJoin(appDataRoaming, name, "config"),
		data: pathJoin(appDataLocal, name, "data"),
		download: pathJoin(homeRoot, "Downloads"),
		log: pathJoin(appDataLocal, name, "log"),
		temp: pathJoin(temporaryRoot, name)
	};
};
/**
 * @function environmentPaths
 * @description Get the correct OS-specific absolute environment paths for the current user.
 * @param {string} name Application name.
 * @returns {{cache:string,config:string,data:string,download:string,log:string,temp:string}} OS-specific absolute environment paths for the current user.
 */
function environmentPaths(name) {
	if (!adIsString(name, {
		empty: false,
		singleLine: true
	})) {
		throw new TypeError(`Argument \`name\` must be type of string (non-empty and single line)!`);
	};
	switch (process.platform) {
		case "darwin":
			return environmentPathsMac(name);
		case "win32":
			return environmentPathsWindows(name);
		default:
			if (process.platform.search(/^win/giu) === 0) {
				return environmentPathsWindows(name);
			};
			return environmentPathsLinux(name);
	};
};
export default environmentPaths;
