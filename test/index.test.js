const request = require("supertest");
const app = require("../index");

describe(`GET /`, () => {
  it(`response with a hello world text`, (done) => {
    request(app).get("/").expect("Hello world!!!", done);
  });
});
