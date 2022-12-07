import { video } from "./video";

test("play video true", () => {
  const spy = jest.spyOn(video, "play");
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);

  spy.mockRestore();
});

test("play video false", () => {
  const spy = jest.spyOn(video, "play").mockImplementation(() => false);
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(false);

  spy.mockRestore();
});
