export = environmentPaths;
/**
 * @function environmentPaths
 * @description Get the correct OS-specific absolute environment paths for the current user.
 * @param {string} name Application name.
 * @returns {{cache:string,cacheRoot:string,config:string,configRoot:string,data:string,dataRoot:string,download:string,downloadRoot:string,log:string,logRoot:string,temp:string,tempRoot:string}} OS-specific absolute environment paths for the current user.
 */
declare function environmentPaths(name: string): {
    cache: string;
    cacheRoot: string;
    config: string;
    configRoot: string;
    data: string;
    dataRoot: string;
    download: string;
    downloadRoot: string;
    log: string;
    logRoot: string;
    temp: string;
    tempRoot: string;
};
declare const downloadRoot: string;
//# sourceMappingURL=main.d.ts.map