import request from "supertest";
import { app } from "../src/app";
test("GET /coffee should return correct object", async () => {
  const res = await request(app).get("/coffee").query({ coffeeName: "Latte" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});

describe("a Coffee lover", () => {
  test("GET should return correct message", async () => {
    const res = await request(app).get("/coffeelover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('"I like coffee!"');
  });
});
