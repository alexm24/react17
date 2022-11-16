export { };
declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            REACT_APP_BACKEND_API?: string;
            PORT?: number;
        }
    }
};