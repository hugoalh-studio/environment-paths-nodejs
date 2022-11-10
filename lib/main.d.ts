export = environmentPaths;
/**
 * @function environmentPaths
 * @description Get the correct OS-specific absolute environment paths for the current user.
 * @param {string} name Application name.
 * @returns {EnvironmentPathsList} OS-specific absolute environment paths for the current user.
 */
declare function environmentPaths(name: string): EnvironmentPathsList;
declare namespace environmentPaths {
    export { EnvironmentPathsList };
}
type EnvironmentPathsList = {
    cache: string;
    config: string;
    data: string;
    download: string;
    log: string;
    temp: string;
};
//# sourceMappingURL=main.d.ts.map