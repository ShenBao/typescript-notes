export type ResolveType = (value: any) => any;
export type RejectType = (value: any) => any;
export type Executor = (resolve: ResolveType, reject: ResolveType) => any;
