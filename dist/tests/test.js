"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const express = require("express");
const app = express();
const routes_1 = __importDefault(require("../src/routes"));
app.use(express.urlencoded({ extended: false }));
app.use("/", routes_1.default);
test("index route index", done => {
    request(app)
        .get("/")
        .expect("Content-Type", /json/)
        .expect({ message: "Hello" })
        .expect(200, done);
});
test("testing route create", done => {
    request(app)
        .post("/create")
        .type("form")
        .send({ item: "hey" })
        .then(() => {
        request(app)
            .get("/")
            .expect({ message: "Hello" }, done);
    });
});
