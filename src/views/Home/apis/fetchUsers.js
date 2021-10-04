import { getUsers } from '../../../apis/User';

/**
 * Fetch Users
 *
 * Glue Code
 *
 * 在这里我们可以使用 JsDoc 来帮助我们规范前端代码内部的数据结构，
 * 这样使得我们能够 “面向接口开发”，这使得代码更加的易于维护
 *
 * @returns {Promise<{ usernname: String }[]>}
 */
export async function fetchUsers() {
  const { data: users } = await getUsers();

  return users.map((user) => {
    return {
      // Home 组件内部使用 username 表示，无论服务端如何变化（
      // 字段由小写改为大写，或是因为后端修改了字段的名称为 username），
      // 我们只需要修改这里的代码就可以了
      username: user.name,
    };
  });
}
