import { Router } from 'express';
export const router = Router();

export function controller(target: any) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const handler = target.prototype[key];
    if (path) {
      router.get(path, handler);
    }
  }
}

export function get(path: string) {
  return function(target: any, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}
