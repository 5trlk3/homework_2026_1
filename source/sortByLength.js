'use strict';

/**
 * Функция, сортирующая массив строк по их длине, при одинаковой длине также по алфавиту
 * @param {Array<String>} strings - массив строк
 * 
 * @example
 * // returns ["a", "bb", "ccc"]
 * sortByLength(["bb", "a", "ccc"]);
 * 
 * @returns {Array<String>}
 */
const sortByLength = (strings = []) => {
    if (!Array.isArray(strings))
        throw new TypeError('Аргумент должен быть массивом.');
    const copyArr = strings.map((item, index) => {
        if (item == null) {
            return item === null ? 'null' : 'undefined';
        }
        return String(item);
    });

    return copyArr.sort((a, b) => a.length - b.length || a.localeCompare(b))
};