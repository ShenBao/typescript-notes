var fileName = 'README.md';
var repName = 'typescript-notes';
var basePath = `https://github.com/ShenBao/${repName}/blob/master`;
basePath = '';

var desc = `
任何可以使用 Javascript 来编写的应用，最终会由 JavaScript 编写。
--- Jeff Atwood, 2007

TypeScript 使重构变得轻松愉快.
--- Anders Hejlsberg（TypeScript的创造者），2012

任何可以使用 Javascript 来编写的优秀的大型应用，最终会由 TypeScript 编写。
--- 韩骏，2019

文档：
- [typescriptlang.org](https://www.typescriptlang.org)
- [tslang.cn](https://www.tslang.cn)
- [typescript doc](https://wangdoc.com/typescript/)
- [TypeScript Blog](https://devblogs.microsoft.com/typescript/)
- [microsoft/TypeScript](https://github.com/microsoft/TypeScript)

typescript-book：
- [TypeScript Deep Dive](https://github.com/basarat/typescript-book)
- [typescript-cheatsheets/react](https://github.com/typescript-cheatsheets/react)
- [awesome-typescript](https://github.com/dzharii/awesome-typescript)

type:
- [type-challenges](https://github.com/type-challenges/type-challenges)
- [utility-types](https://github.com/piotrwitek/utility-types)
- [type-fest](https://github.com/sindresorhus/type-fest)

TypeScript 学习笔记
- [TypeScript Nodes: https://github.com/ShenBao/typescript-notes](https://github.com/ShenBao/typescript-notes)
- [对应示例代码: https://github.com/ShenBao/typescript-notes/tree/master/code](https://github.com/ShenBao/typescript-notes/tree/master/code)
`;

var endDesc = `
## More links

- [GitHub Home](https://github.com/ShenBao)
- [Blog Home](https://shenbao.github.io)
- [About Me](https://shenbao.github.io/about/)
`;

const fs = require ('fs');
const path = require ('path');
const cwd = process.cwd();

function readFileList (dir, filesList = []) {
  const files = fs.readdirSync (dir);
  files.forEach ((item, index) => {
    var fullPath = path.join (dir, item);
    const stat = fs.statSync (fullPath);
    if (stat.isDirectory ()) {
      var nextPath = path.join (dir, item);
      if (
        nextPath.includes ('code') ||
        nextPath.includes ('img') ||
        nextPath.includes ('.git') ||
        nextPath.includes ('oldDocs') || 
        nextPath.includes ('scripts')
      ) {
      } else {
        filesList.push (
          {},
          {
            name: item,
            path: fullPath.replace (cwd, '').replace (/\\/g, '/') +
              '/README.md',
          }
        );
        readFileList (path.join (dir, item), filesList);
      }
    } else {
      var extname = path.extname (item);
      if (
        !(item.includes ('React-Links') ||
          item.includes ('Features') ||
          item.includes ('code-demo') ||
          item.includes ('React-Books')) &&
        (extname == '.md' && item != 'README.md')
      ) {
        var name = item.replace ('.md', '');
        var arr = name.split ('.');
        if (/^[0-9]+[\s\S]*$/.test (item)) {
          arr.shift ();
        }
        name = arr.join ().replace (/(^\s*)|(\s*$)/g, '');
        var itemPath = fullPath.replace (cwd, '').replace (/\\/g, '/');
        var obj = {
          name: name,
          path: itemPath,
        };
        filesList.push (obj);
      }
    }
  });
  return filesList;
}

var filesList = [];
readFileList (cwd, filesList);

console.log (JSON.stringify (filesList, null, 4));

var str = '';
filesList.forEach ((item, index) => {
  var {name, path} = item;
  if (!name) {
    str += `\n`;
    return;
  }
  var enPath = encodeURIComponent (path);
  if (item.path.includes ('README.md')) {
    console.log (``);
    var sl = item.path.split ('/').length - 1;
    if (sl === 2) {
      str += `## ${name}\n\n`;
    } else if (sl === 3) {
      str += `### ${name}\n\n`;
    } else if (sl === 4) {
      str += `#### ${name}\n\n`;
    }
  } else {
    str += `1. [${name}](${basePath}${enPath})\n`;
  }
  console.log (`[${name}](${basePath}${path})`);
});

if (!basePath.startsWith ('http')) {
  str += endDesc;
}

var content = `# ${repName}\n`;
if (!basePath.startsWith ('http')) {
  content += desc;
}
fs.writeFileSync (`./${fileName}`, content);
fs.writeFile (
  `./${fileName}`,
  str,
  {flag: 'a', encoding: 'utf-8', mode: '0666'},
  function (err) {
    if (err) {
      console.log ('\n======== error ========');
      throw err;
    }
    console.log ('\n======== success ========');
  }
);
