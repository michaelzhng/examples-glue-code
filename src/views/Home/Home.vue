<template>
  <div v-if="isLoading">Loading...</div>
  <ul v-else>
    <li v-for="user in users">
      {{ user.username }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { fetchUsers } from './apis/fetchUsers';

const isLoading = ref(false);
const users = ref([]);

async function initUsers() {
  isLoading.value = true;

  try {
    // UI 组件并没有直接使用 src/apis/Users.js 来获取数据
    // 而是将任务委托给了胶水代码 ./apis/fetchUsers.js，由它来为组件处理好数据
    users.value = await fetchUsers();
  } catch (error) {
    console.error(error);
  }

  isLoading.value = false;
}

initUsers();
</script>
