import { isPalindrome } from "../utils"

describe("isPalindrome", () => {
    it("returns true for a palindrome", () => {
        expect(isPalindrome("racecar")).toBe(true);
    });
    it("returns false for a non-palindrome", () => {
        expect(isPalindrome("car")).toBe(false);
    })
    it("returns true for a palindrome with mixed case", () => {
        expect(isPalindrome("RaCeCaR")).toBe(true);
    });
    it("throws an error if input is not a string", () => {
        expect(() => isPalindrome(123)).toThrow("Input must be a string")
    });
})
