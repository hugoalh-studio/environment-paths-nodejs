export default environmentPaths;
/**
 * @function environmentPaths
 * @description Get the correct OS-specific absolute environment paths for the current user.
 * @param {string} name Application name.
 * @returns {{cache:string,config:string,data:string,download:string,log:string,temp:string}} OS-specific absolute environment paths for the current user.
 */
declare function environmentPaths(name: string): {
    cache: string;
    config: string;
    data: string;
    download: string;
    log: string;
    temp: string;
};
//# sourceMappingURL=main.d.mts.map