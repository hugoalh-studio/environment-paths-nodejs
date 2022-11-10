export default environmentPaths;
export type EnvironmentPathsList = {
    cache: string;
    config: string;
    data: string;
    download: string;
    log: string;
    temp: string;
};
/**
 * @function environmentPaths
 * @description Get the correct OS-specific absolute environment paths for the current user.
 * @param {string} name Application name.
 * @returns {EnvironmentPathsList} OS-specific absolute environment paths for the current user.
 * @throws {TypeError} Argument `name` is not a valid string.
 */
declare function environmentPaths(name: string): EnvironmentPathsList;
//# sourceMappingURL=main.d.mts.map