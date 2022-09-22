<script setup lang="ts">
import {useAuth} from "@/composables/auth";
import PermissionItem from "@/components/PermissionItem.vue";
import router from "@/router";
import UserCard from "@/components/UserCard.vue";
import AppBtn from "@/components/AppBtn.vue";
import AppHeader from "@/components/AppHeader.vue";

const {user} = useAuth()
if (!user.value) {
  router.push('/login')
}

const create = () => {
  router.push('/signup?new=true')
}
</script>

<template>
  <main v-if="user" class="home">
    <AppHeader />
    <UserCard
        :user="user"
        class="mb-32"
    />
    <div>
      <div class="flex justify-between items-center mb-16">
        <h3>
          Разрешение на въезд
        </h3>
        <AppBtn @click="create">
          <span class="mr-4">
            Новое разрешение
          </span>
          <SvgSprite
              symbol="svg-new"
              size="24"
          />
        </AppBtn>
      </div>
      <PermissionItem
          v-for="(permission, index) in user.permissions"
          :key="index"
          :permission="permission"
          :user="user"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.home {
  padding-top: 88px;
}
</style>