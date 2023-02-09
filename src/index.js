/**
 * 투두타입선언
 * @typedef {object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isDone - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]?} tags - 적용할 태그 배열
 */

/**
 * 할 일을 추가한다.
 * 내용없이 추가 할 수 없다.
 * @param {object} newTodo
 * @param {string} newTodo.text - 할 일의 내용
 * @param {string} newTodo.category - 할 일의 카테고리
 * @param {string[]} [newTodo.tag] - 할 일의 태그 배열
 */
function createTodo({ text, category, tags }) {}
