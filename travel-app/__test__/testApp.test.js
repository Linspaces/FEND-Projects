// Import the js file to test
import { performAction } from "../src/client/js/app"
import {describe, expect, test} from '@jest/globals'
   
describe("Testing the function definition", () => {

    test("Testing the function defintion", () => {
           expect(performAction).toBeDefined();
})}); 