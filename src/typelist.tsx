// eslint-disable @typescript-eslint/no-unused-vars
// tsの基本の型
let bool: boolean = true;

// 数値
let num: number = 0;

// 文字列
let str = (string = "A");

// array
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "A"];

// any
let any1: any = false;

// void *voidの記載がなくても暗黙的にvoidに型変換してくれる
const funcA = (): void => {
  const test = "Test";
};

// null
let null1: null = null;

// undifined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAAA" };
