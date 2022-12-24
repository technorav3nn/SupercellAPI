/**
 * Convert a date string from the API to a Date object
 *
 * **Credit to clashofclans.js for this**
 * @see {@link https://github.com/clashperk/clashofclans.js/blob/main/src/util/Util.ts#L84}
 * @param {string} date date string from the API
 * @returns {string}
 */
export function convertApiDate(date: string) {
	const yearMonthDay = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;
	const hoursMinutesSeconds = `${date.slice(9, 11)}:${date.slice(11, 13)}:${date.slice(13)}`;
	return new Date(`${yearMonthDay}T${hoursMinutesSeconds}`);
}

/**
 * Fixes tags to be in the correct format
 *
 * **Credit to clashofclans.js for this**
 * @see {@link https://github.com/clashperk/clashofclans.js/blob/main/src/util/Util.ts#L33}
 * @param {string} tag The tag to format
 * @returns string
 */
export function formatTag(tag: string) {
	return `#${tag.toUpperCase().replace(/O/g, "0").replace(/^#/g, "").replace(/\s/g, "")}`;
}

/**
 * Verifies a tag is valid
 *
 * **Credit to clashofclans.js for this**
 * @see {@link https://github.com/clashperk/clashofclans.js/blob/main/src/util/Util.ts#L46}
 * @param {string} tag The tag to verify
 * @returns boolean
 */
export function verifyTag(tag: string) {
	return /^#?[0289PYLQGRJCUV]{3,}$/.test(tag);
}
