export interface IPlugin {
    init(worker: IWorker): Promise<any> | any;
    onStart?(): Promise<any> | any;
    onDestroy?(): Promise<any> | any;
    onUpdate?(): Promise<any> | any;
    onEnable?(): Promise<any> | any;
    onDisable?(): Promise<any> | any;
}
export interface IConfig {
    enable: boolean;
    [key: string]: any;
}
export interface IWorker {
    get name(): string;
    get namespace(): string;
    get version(): string;
    get description(): string;
    get author(): string | undefined;
    get license(): string | undefined;
    get updateUrl(): string | undefined;
    get isActive(): boolean;
    getInstance<T extends IPlugin>(): T;
    getValue<T>(key: string, defaultValue?: T): T;
    setValue<T>(key: string, value: T): void;
    getValues(): {
        [key: string]: any;
    };
    log(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    debug(...args: any[]): void;
    getWorker<T extends IWorker>(plugin: string): T;
    getWorkers(): IWorker[];
    addListener(event: string, listener: Function): void;
    removeListener(event: string, listener: Function): void;
}
