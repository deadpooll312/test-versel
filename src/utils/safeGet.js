// eslint-disable-next-line no-restricted-imports
import { get, isBoolean } from 'lodash';

/**
 * Safely retrieve data from an object by the path.
 * @param {*} object - Target object which used for pulling path value
 * @param {string|Array} path - Path to be pulled
 * @param {*} [defaultValue = undefined] - A default value to be returned if the path value is absent or null/undefined
 * @returns {*}
 */
const safeGet = (object, path, defaultValue = undefined) => {
  const result = get(object, path, defaultValue);

  if (isBoolean(result)
    || result === 0
  ) {
    return result;
  }

  return result || defaultValue;
};

export default safeGet;
