<template>
  <div>
    {{ invitee.name }}
  </div>
</template>

<script lang="ts" setup>
import {GENDER, type Invitee} from "@/types/user";

interface Props {
  invitee: Invitee,
  str?: string
}

withDefaults(defineProps<Props>(), {
  invitee: () => ({
    id: 1,
    name: "---",
    gender: GENDER.MALE
  }),
  str: "123313"
})
</script>
