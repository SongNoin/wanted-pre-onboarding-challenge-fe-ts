/**
 * 투두타입선언
 * @typedef {object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isDone - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 적용할 tag 배열
 */

/**
 * 할 일을 추가한다.
 * 내용없이 추가 할 수 없다.
 * @param {object} newTodo
 * @param {string} newTodo.text - 할 일의 내용
 * @param {string} newTodo.category - 할 일의 카테고리
 * @param {string[]} [newTodo.tags] - 할 일의 tag 배열
 */
function createTodo(newTodo) {}

/**
 * 모든 할 일을 조회할 수 있다.
 * @return {Todo[]}
 */
function getTodos() {}

/**
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {string} id - 조회할 할 일의 ID
 * @return {Todo} 주어진 ID를 가진 할 일
 */
function getTodoById(id) {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * @param {object} todo
 * @param {string} [todo.content] - 변경할 내용
 * @param {boolean} [todo.isDone] - 완료여부 변경
 * @param {string} [todo.category] - 변경할 카테고리
 */
function updateTodo(todo) {}

/**
 * 특정 할 일의 특정 tag를 수정할 수 있다.
 * id 기반으로 특정 할 일의 tag에 해당하는 값을 newTag로 대체한다.
 * @param {number} id - 특정 할 일의 ID
 * @param {string} tag - 기존 tag
 * @param {string} newTag - 변경할 tag
 */
function updateTag(id, tag, newTag) {}

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {number} id - 삭제할 할 일의 ID
 */
function deleteTodoById(id) {}

/**
 * 모든 할 일을 제거할 수 있다.
 */
function deleteAllTodo() {}

/**
 * 특정 할 일의 특정 tag를 삭제할 수 있다.
 * id 기반으로 특정 할 일의 tag에 해당하는 값을 삭제한다.
 * @param {number} id - 특정 할 일의 ID
 * @param {string} tag- 삭제할 tag
 */
function deleteTag(id, tag) {}

/**
 * 특정 할 일의 모든 tag를 삭제할 수 있다.
 * id 기반으로 특정 할 일의 모든 tag 를 삭제한다.
 * @param {number} id - 특정 할 일의 ID
 */
function deleteAllTag(id) {}
