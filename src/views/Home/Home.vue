<template>
  <div v-if="isLoading">Loading...</div>
  <ul v-else>
    <!-- 易受到后端接口变化而出错的地方：1 -->
    <li v-for="user in users" :key="user.name">
      <!-- 易受到后端接口变化而出错的地方：2 -->
      {{ user.name }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { getUsers } from '../../apis/User';

const isLoading = ref(false);
const users = ref([]);

async function initUsers() {
  isLoading.value = true;

  try {
    // 直接调用 getUsers 方法，如果后端返回结果的字段 “name”
    // 发生变化，那么就需要修改组件模版内的取值
    const res = await getUsers();
    users.value = res.data;
  } catch (error) {
    console.error(error);
  }

  isLoading.value = false;
}

initUsers();
</script>
