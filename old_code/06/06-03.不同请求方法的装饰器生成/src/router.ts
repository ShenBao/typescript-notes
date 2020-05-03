// import fs from 'fs';
// import path from 'path';
// import { Router, Request, Response, NextFunction } from 'express';
// import Crowller from './utils/crowller';
// import Analyzer from './utils/analyzer';
// import { getResponseData } from './utils/util';

// interface BodyRequest extends Request {
//   body: { [key: string]: string | undefined };
// }

// const checkLogin = (req: Request, res: Response, next: NextFunction) => {
//   const isLogin = req.session ? req.session.login : false;
//   if (isLogin) {
//     next();
//   } else {
//     res.json(getResponseData(null, '请先登录'));
//   }
// };

// const router = Router();

// router.get('/getData', checkLogin, (req: BodyRequest, res: Response) => {
//   const secret = 'secretKey';
//   const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
//   const analyzer = Analyzer.getInstance();
//   new Crowller(url, analyzer);
//   res.json(getResponseData(true));
// });

// router.get('/showData', checkLogin, (req: BodyRequest, res: Response) => {
//   try {
//     const position = path.resolve(__dirname, '../data/course.json');
//     const result = fs.readFileSync(position, 'utf8');
//     res.json(getResponseData(JSON.parse(result)));
//   } catch (e) {
//     res.json(getResponseData(false, '数据不存在'));
//   }
// });

// export default router;
