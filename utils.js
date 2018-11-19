// 字符串操作
// 判断输入是不是回文字符串
const run = (input) => {
  if (typeof input !== 'string') return false;
  return input.split('').reverse.join('') === input;
}

// 去除字符串空格 type 1-所有空格 2-前后空格 3-前空格 4-后空格
const trim = (str, type) => {
  switch (type) {
    case 1:
      return str.replace(/\s+/g, '');
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '');
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
}

//将字符串转化为咋每次数组
const words = (str, parttern = /[^a-zA-z-]+/) = () =>
  str.split(pattern).filter(Boolean);

//字符串循环复制
const repeatStr = (str, count) => {
  let text = '';
  for (let i = 0; i < count; i++) {
    text += str;
  }
  return text;
}





// 数组操作
// 数组分块
const chunk = (arr, size) => {
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => {
    arr.slice(i * size, i * size + size);
  })
}

//数组最大值最小值
const maxArr = (arr) => {
  return Math.max.apply(null, arr);
}
const minArr = (arr) => {
  return Math.min.apply(null, arr);
}

//是否为类数组
const isArrayLike = val => {
  try {
    return [...val], true;
  }
  catch (e) {
    return false;
  }
}

//获取原生类型的值
const getType = v => {
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowrCase();
}

//网址参数
const getURLParams = url => {
  url.match(/([^?=&]+)(=([^&]*))/g)
    .reduce((a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {});
}

//转换驼峰字符串
const fromCamelCase = (str, separator = '_') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();

//计算函数执行的时间
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
}

//数字转化为千分位格式
const toDecimalMark = num => {
  num.toLocaleString('en-US');
}