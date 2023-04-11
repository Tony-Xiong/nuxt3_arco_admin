<template>
  <a-dropdown trigger="hover">
      <a-avatar class="avatar"><IconUser /></a-avatar>
  <template #content>
      <a-doption>个人中心</a-doption>
      <a-doption>修改密码</a-doption>
      <a-divider style="margin: 0"/>
      <a-doption @click="console.log('logout')">登出</a-doption>
  </template>
  </a-dropdown>
</template>
<style lang="css">
.avatar {
    width: 36px;
    height: 36px;
    font-size: 16px;
    margin-left: 10px;
}
</style>