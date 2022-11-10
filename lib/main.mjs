import { basename as pathBasename, join as pathJoin } from "path";
import { homedir, tmpdir } from "os";
import { isString as adIsString } from "@hugoalh/advanced-determine";
const homeRoot = homedir();
const downloadRoot = pathJoin(homeRoot, "Downloads");
const temporaryRoot = tmpdir();
/**
 * @typedef {{cache: string; config: string; data: string; download: string; log: string; temp: string}} EnvironmentPathsList
 */
/**
 * @access private
 * @function environmentPathsLinux
 * @param {string} name Application name.
 * @returns {EnvironmentPathsList} OS-specific absolute environment paths for the current user.
 */
function environmentPathsLinux(name) {
	return {
		cache: pathJoin(process.env.XDG_CACHE_HOME || pathJoin(homeRoot, ".cache"), name),
		config: pathJoin(process.env.XDG_CONFIG_HOME || pathJoin(homeRoot, ".config"), name),
		data: pathJoin(process.env.XDG_DATA_HOME || pathJoin(homeRoot, ".local", "share"), name),
		download: pathJoin(downloadRoot, name),
		log: pathJoin(process.env.XDG_STATE_HOME || pathJoin(homeRoot, ".local", "state"), name),
		temp: pathJoin(pathJoin(temporaryRoot, pathBasename(homeRoot)), name)
	};
}
/**
 * @access private
 * @function environmentPathsMac
 * @param {string} name Application name.
 * @returns {EnvironmentPathsList} OS-specific absolute environment paths for the current user.
 */
function environmentPathsMac(name) {
	let library = pathJoin(homeRoot, "Library");
	return {
		cache: pathJoin(pathJoin(library, "Caches"), name),
		config: pathJoin(pathJoin(library, "Preferences"), name),
		data: pathJoin(pathJoin(library, "Application Support"), name),
		download: pathJoin(downloadRoot, name),
		log: pathJoin(pathJoin(library, "Logs"), name),
		temp: pathJoin(temporaryRoot, name)
	};
}
/**
 * @access private
 * @function environmentPathsWindows
 * @param {string} name Application name.
 * @returns {EnvironmentPathsList} OS-specific absolute environment paths for the current user.
 */
function environmentPathsWindows(name) {
	let appDataLocal = process.env.LOCALAPPDATA || pathJoin(homeRoot, "AppData", "Local");
	let appDataRoaming = process.env.APPDATA || pathJoin(homeRoot, "AppData", "Roaming");
	return {
		cache: pathJoin(appDataLocal, name, "Cache"),
		config: pathJoin(appDataRoaming, name, "Config"),
		data: pathJoin(appDataLocal, name, "Data"),
		download: pathJoin(homeRoot, "Downloads", name),
		log: pathJoin(appDataLocal, name, "Log"),
		temp: pathJoin(temporaryRoot, name)
	};
}
/**
 * @function environmentPaths
 * @description Get the correct OS-specific absolute environment paths for the current user.
 * @param {string} name Application name.
 * @returns {EnvironmentPathsList} OS-specific absolute environment paths for the current user.
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
