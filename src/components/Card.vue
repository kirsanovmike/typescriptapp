<template>
  <div>
    {{ invitee.name }}
  </div>
</template>

<script lang="ts" setup>
enum GENDER {
  MALE,
  FEMALE
}

defineProps<{
  invitee: {
    id: number,
    name: string,
    gender: GENDER
  }
}>()
</script>
