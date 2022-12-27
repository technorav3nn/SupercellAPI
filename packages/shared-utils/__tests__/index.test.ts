import { describe, test, expect, it } from "vitest";
import { convertApiDate, formatTag, verifyTag } from "../src";

describe("shared-utils", () => {
	describe("API Date converter", () => {
		it("SHOULD convert the api date to a Date Object", () => {
			const date = convertApiDate("20190604T172621.000Z");
			expect(date).toBeInstanceOf(Date);
			expect(date).toEqual(new Date("2019-06-04T17:26:21.000Z"));
		});
	});

	describe("Verifying tags", () => {
		test("GIVEN a valid tag THEN returns true", () => {
			expect(verifyTag("#L9P8JY")).toBe(true);
		});

		test("GIVEN an invalid tag THEN returns false", () => {
			expect(verifyTag("not a valid tag")).toBe(false);
		});
	});

	describe("Formatting tags", () => {
		test("GIVEN a valid tag THEN returns the tag in the correct format", () => {
			expect(formatTag("#L9P8JY")).toBe("#L9P8JY");
			expect(formatTag("L9P8JY")).toBe("#L9P8JY");
			expect(formatTag("l9p8jy")).toBe("#L9P8JY");
			expect(formatTag("L9P8JY ")).toBe("#L9P8JY");
			expect(formatTag("L9P8JY")).toBe("#L9P8JY");
		});
	});
});
