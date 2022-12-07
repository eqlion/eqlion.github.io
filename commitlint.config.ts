import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
    /*
     * Resolve and load @commitlint/config-conventional from node_modules.
     * Referenced packages must be installed
     */
    extends: ["@commitlint/config-conventional"],
    /*
     * Whether commitlint uses the default ignore rules.
     */
    defaultIgnores: true,
};

module.exports = Configuration;
