import { describe, expect, it } from 'vitest';
import isObjectField from './is-object-field.js';

describe('isObjectField', () => {
	it('should return true for a field with type "Object"', () => {
		const field = { type: 'Object' };

		expect(isObjectField(field)).toBe(true);
	});

	for (const type of ['Array', 'Boolean', 'Date', 'Number', 'String']) {
		it('should return false for a field with a different type', () => {
			const field = { type };

			expect(isObjectField(field)).toBe(false);
		});
	}

	for (const value of [undefined, null, 'Hello, World!', 42, 3.14, true, false, [], {}]) {
		it('should return false for a non-field value', () => {
			expect(isObjectField(value)).toBe(false);
		});
	}
});
