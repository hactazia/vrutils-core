export interface IPlugin {
    init(worker: IWorker): Promise<any> | any;
    onStart?(): Promise<any> | any;
    onDestroy?(): Promise<any> | any;
    onUpdate?(): Promise<any> | any;
    onEnable?(): Promise<any> | any;
    onDisable?(): Promise<any> | any;
}
export interface IConfig {
    getKeys(): string[];
    get<T>(path: string): T | undefined;
    getOrDefault<T>(path: string, defaultValue: T): T;
    set<T>(path: string, value: T): void;
    has(path: string): boolean;
    remove(path: string): void;
    clear(): void;
}
export interface IPluginInfo {
    name: string;
    namespace: string;
    version: string;
    description?: string;
    author?: string | string[];
    license?: string;
    updateUrl?: string;
    require: string[];
    [key: string]: string[] | string | undefined;
}
export type EventCallback = (...args: any[]) => any;
export interface IWorker {
    get infos(): IPluginInfo;
    get config(): IConfig;
    get isActive(): boolean;
    getInstance<T extends IPlugin>(): T;
    info(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    debug(...args: any[]): void;
    getWorker<T extends IWorker>(plugin: string): T | null;
    getWorkers(): IWorker[];
    addListener(event: string, listener: EventCallback): number;
    removeListener(id: number): void;
    removeAllListeners(event: string): void;
    emit(event: string, ...args: any[]): void;
}
