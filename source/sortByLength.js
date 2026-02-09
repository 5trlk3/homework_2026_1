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
let sortByLength = (strings) => [...strings].sort((a, b) => a.length - b.length || a.localeCompare(b));