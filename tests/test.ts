const request = require("supertest");
const express = require("express");
const app = express();

import routes from '../src/routes';

app.use(express.urlencoded({ extended: false }));
app.use("/",routes);

test("index route index", done => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect({ message: "Hello" })
    .expect(200, done);
});
