const advancedDetermine = require("@hugoalh/advanced-determine");
const os = require("os");
const path = require("path");
const homeRoot = os.homedir();
const temporaryRoot = os.tmpdir();
/**
 * @function environmentPathsLinux
 * @param {string} name
 * @returns {{cache:string,config:string,data:string,download:string,log:string,temp:string}}
 */
function environmentPathsLinux(name) {
	return {
		cache: path.join(process.env.XDG_CACHE_HOME || path.join(homeRoot, ".cache"), name),
		config: path.join(process.env.XDG_CONFIG_HOME || path.join(homeRoot, ".config"), name),
		data: path.join(process.env.XDG_DATA_HOME || path.join(homeRoot, ".local", "share"), name),
		download: path.join(homeRoot, "Downloads"),
		log: path.join(process.env.XDG_STATE_HOME || path.join(homeRoot, ".local", "state"), name),
		temp: path.join(temporaryRoot, path.basename(homeRoot), name)
	};
};
/**
 * @function environmentPathsMac
 * @param {string} name
 * @returns {{cache:string,config:string,data:string,download:string,log:string,temp:string}}
 */
function environmentPathsMac(name) {
	let library = path.join(homeRoot, "Library");
	return {
		cache: path.join(library, "Caches", name),
		config: path.join(library, "Preferences", name),
		data: path.join(library, "Application Support", name),
		download: path.join(homeRoot, "Downloads"),
		log: path.join(library, "Logs", name),
		temp: path.join(temporaryRoot, name)
	};
};
/**
 * @function environmentPathsWindows
 * @param {string} name
 * @returns {{cache:string,config:string,data:string,download:string,log:string,temp:string}}
 */
function environmentPathsWindows(name) {
	let appDataLocal = process.env.LOCALAPPDATA || path.join(homeRoot, "AppData", "Local");
	let appDataRoaming = process.env.APPDATA || path.join(homeRoot, "AppData", "Roaming");
	return {
		cache: path.join(appDataLocal, name, "cache"),
		config: path.join(appDataRoaming, name, "config"),
		data: path.join(appDataLocal, name, "data"),
		download: path.join(homeRoot, "Downloads"),
		log: path.join(appDataLocal, name, "log"),
		temp: path.join(temporaryRoot, name)
	};
};
/**
 * @function environmentPaths
 * @description Get the correct OS-specific absolute environment paths for the current user.
 * @param {string} name Application name.
 * @returns {{cache:string,config:string,data:string,download:string,log:string,temp:string}} OS-specific absolute environment paths for the current user.
 */
function environmentPaths(name) {
	if (!advancedDetermine.isString(name, {
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
module.exports = environmentPaths;
