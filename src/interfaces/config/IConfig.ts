interface IEnvUrl {
    [key: string]: string;
}

interface IEvnConfig {
    readonly envUrl: IEnvUrl;
}

export type IConfig = IEvnConfig & Window & typeof globalThis;