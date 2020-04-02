import { Redirect, Rewrite, Header } from '../lib/check-custom-routes';
import { GetStaticPaths } from 'next/types';
export declare function collectPages(directory: string, pageExtensions: string[]): Promise<string[]>;
export interface PageInfo {
    isAmp?: boolean;
    isHybridAmp?: boolean;
    size: number;
    totalSize: number;
    static: boolean;
    isSsg: boolean;
    ssgPageRoutes: string[] | null;
    hasSsgFallback: boolean;
    serverBundle: string;
}
export declare function printTreeView(list: readonly string[], pageInfos: Map<string, PageInfo>, serverless: boolean, { distPath, buildId, pagesDir, pageExtensions, buildManifest, isModern, useStatic404, }: {
    distPath: string;
    buildId: string;
    pagesDir: string;
    pageExtensions: string[];
    buildManifest: BuildManifestShape;
    isModern: boolean;
    useStatic404: boolean;
}): Promise<void>;
export declare function printCustomRoutes({ redirects, rewrites, headers, }: {
    redirects: Redirect[];
    rewrites: Rewrite[];
    headers: Header[];
}): void;
declare type BuildManifestShape = {
    pages: {
        [k: string]: string[];
    };
};
export declare function getJsPageSizeInKb(page: string, distPath: string, buildId: string, buildManifest: BuildManifestShape, isModern: boolean): Promise<[number, number]>;
export declare function buildStaticPaths(page: string, getStaticPaths: GetStaticPaths): Promise<{
    paths: string[];
    fallback: boolean;
}>;
export declare function isPageStatic(page: string, serverBundle: string, runtimeEnvConfig: any): Promise<{
    isStatic?: boolean;
    isAmpOnly?: boolean;
    isHybridAmp?: boolean;
    hasServerProps?: boolean;
    hasStaticProps?: boolean;
    prerenderRoutes?: string[] | undefined;
    prerenderFallback?: boolean | undefined;
}>;
export declare function hasCustomGetInitialProps(bundle: string, runtimeEnvConfig: any): boolean;
export {};
