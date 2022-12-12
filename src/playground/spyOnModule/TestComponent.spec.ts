import { mount } from "@vue/test-utils";
import TestComponent from "./TestComponent.vue";

test("TestComponentのテスト", async () => {
  // TestComponentをマウント
  const wrapper = mount(TestComponent);
  // vmプロパティを使って、内部インスタンスを取得
  const vm = wrapper.vm;
  // spyOnを使用して、内部メソッドをモック化
  const spy = jest.spyOn(vm, "onClick");
  // ボタンをクリック
  wrapper.find("button").trigger("click");
  // spyの内容を確認
  expect(spy).toHaveBeenCalledTimes(1);
});
