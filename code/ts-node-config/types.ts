export interface IConfig {
    /**
     * 端口号
     */
    post?: number;
    /**
     * 是否启用 https
     */
    https?: boolean;
    /**
     * 路由定义
     */
    routes?: {
        exact?: boolean;
        path: string;
        component: string;
    }[];
    /**
     * 配置 chainWebpack
     */
    // @ts-ignore
    chainWebpack?: (config) => void;
}
