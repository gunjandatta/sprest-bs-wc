import { Config } from "@stencil/core";

export const config: Config = {
    globalScript: "node_modules/gd-sprest-bs/dist/gd-sprest-bs-icons.js",
    namespace: "gd-sprest-bs",
    outputTargets: [
        {
            type: "dist"
        }
    ]
}