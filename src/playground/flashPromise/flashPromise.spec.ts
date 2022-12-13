import { mount } from "@vue/test-utils";
import TestComponent from "./TestComponent.vue";

test("TestComponentのテスト", (done) => {
  // TestComponentをマウント
  const wrapper = mount(TestComponent);
  // ボタンをクリック
  wrapper.find("button").trigger("click");

  // 非同期が完了したら、結果を確認
  wrapper.vm.$nextTick(() => {
    expect(wrapper.vm.$data.message).toContain("非同期処理が完了しました。");
    done();
  });
});
