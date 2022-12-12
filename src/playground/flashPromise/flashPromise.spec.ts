import { mount, flushPromises } from "@vue/test-utils";
import TestComponent from "./TestComponent.vue";

test("TestComponentのテスト", async () => {
  // TestComponentをマウント
  const wrapper = mount(TestComponent);
  // ボタンをクリック
  wrapper.find("#send-btn").trigger("click");
  await flushPromises();

  // 非同期が完了したら、結果を確認
  expect(wrapper.text()).toContain("非同期処理が完了しました。");
});
