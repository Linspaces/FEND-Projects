// Import the js file to test
//import { performAction } from "../src/client/js/app"
//import {describe, expect, test} from '@jest/globals'
const request = require("supertest");
const server = require("../src/server/server");

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(server)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});