export declare type Env = {
    [key: string]: string;
};
export declare function loadEnvConfig(dir: string, dev?: boolean): Env | false;
