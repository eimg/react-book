/// <reference types="node" />
import { ServerResponse } from 'http';
export declare function sendPayload(res: ServerResponse, payload: any, type: 'html' | 'json', options?: {
    private: true;
} | {
    private: boolean;
    stateful: true;
} | {
    private: boolean;
    stateful: false;
    revalidate: number | false;
}): void;
