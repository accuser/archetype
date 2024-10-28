import type { BooleanField } from './schema-field.js';
import type { ValidationError } from './validation-error.js';

const validateBooleanField = (
	value: unknown,
	field: BooleanField,
	path: string[] = []
): ValidationError[] => {
	const errors: ValidationError[] = [];

	if (typeof value !== 'boolean') {
		return [
			{
				path,
				message: `Expected boolean, got ${typeof value}`
			}
		];
	}

	void field;

	return errors;
};

export default validateBooleanField;
