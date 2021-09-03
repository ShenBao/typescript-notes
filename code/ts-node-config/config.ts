import { IConfig } from "./types";

const defineConfig = (config: IConfig) => {
    return config;
};

export default defineConfig({
    post: 3000,
    https: true,
    routes: [
        {
            exact: true,
            path: "/",
            component: 'index'
        },
    ],
});
