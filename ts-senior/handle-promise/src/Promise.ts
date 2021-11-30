import { ResolveType, RejectType, Executor } from "./actionType";

export default class Promise<T = any> {
    public resolve!: ResolveType;
    public reject!: RejectType;
    public status!: string;

    public resolveExecutorValue!: any;
    public rejectExecutorValue!: any;

    public resolveThenCallbacks: (() => void)[] = [];
    public rejectThenCallbacks: (() => void)[] = [];

    constructor(executor: Executor) {
        this.status = "pending";
        this.resolve = (value: any): any => {
            this.status = "sucess";
            this.resolveExecutorValue = value;
            this.resolveThenCallbacks.forEach((cb) => cb());
        };

        this.reject = (value: any): any => {
            this.status = "fail";
            this.rejectExecutorValue = value;
            this.rejectThenCallbacks.forEach((cb) => cb());
        };

        try {
            // 执行函数
            executor(this.resolve, this.reject);
        } catch (error: any) {
            this.status = "pending";
            this.reject(error?.toString());
            throw new Error("程序停止 ...");
        }
    }

    then(resolveFn: ResolveType, rejectFn: RejectType) {
        return new Promise((resolve, reject) => {
            let result: any;
            if (this.status === "sucess") {
                result = resolveFn(this.resolveExecutorValue);
                resolve(result);
            }
            if (this.status === "fail") {
                result = rejectFn(this.rejectExecutorValue);
                reject(result);
            }
            if (this.status === "pending") {
                this.resolveThenCallbacks.push(() => {
                    result = resolveFn(this.resolveExecutorValue);
                    if (isPromise(result)) {
                        result.then(
                            (resolveSuccess) => {
                                resolve(resolveSuccess);
                            },
                            (rejectSuccess) => {
                                reject(rejectSuccess);
                            }
                        );
                    } else {
                        // 非异步
                        resolve(result);
                    }
                });
                this.rejectThenCallbacks.push(() => {
                    result = rejectFn(this.rejectExecutorValue);
                    reject(result);
                });
            }
        });
    }

    static all(promises: Promise[]): Promise {
        return new Promise((resolve, reject) => {
            let results: Array<any> = [];
            promises.forEach((promise, index) => {
                promise.then(
                    (resolveSuccess) => {
                        ProcessData(resolveSuccess, index);
                    },
                    (rejectFail) => {
                        // 只要有一个执行失败就执行 reject
                        reject(rejectFail);
                    }
                );
            });
            function ProcessData(resolveSuccess: any, index: number) {
                results[index] = resolveSuccess;
                if (index === promises.length - 1) {
                    resolve(results);
                }
            }
        });
    }
}

function isPromise(value: any): value is Promise {
    // return typeof value === "object" && typeof value.then === "function";
    return isObject(value) && isFunction(value.then);
}

function isObject(value: any): value is Record<any, any> {
    return value !== null && typeof value === "object";
}

function isFunction(value: any): value is Function {
    return typeof value === "function";
}
