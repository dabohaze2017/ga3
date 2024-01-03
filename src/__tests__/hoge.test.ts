import { hoge } from "@/functions/hoge";

describe("関数hogeのテスト", () => {
  test("hoge関数の引数に1を渡したら2が返ってくること", () => {
    expect(hoge(1)).toBe(2);
  });
});
