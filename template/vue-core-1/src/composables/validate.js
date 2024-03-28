import { ref } from 'vue';
import ajv from './ajv';

const errors = ref({});
const validate = (schema, data) => {
    errors.value = {};
    // Compile with schema
    const validateFn = ajv.compile(schema);
    // Compile with data
    const valid = validateFn(data);
    // Check if error
    if (validateFn.errors) {
        const lst = {};
        validateFn.errors.forEach((obj) => {
            const dataPath = obj.instancePath.slice(1, obj.instancePath.length);
            if (!lst[dataPath]) {
                lst[dataPath] = obj.message;
            }
        });
        errors.value = lst;
    }

    return valid;
}

export default { errors, validate };
