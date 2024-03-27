<template>
  <div>
    {{ invitee.name }}
  </div>
</template>

<script lang="ts" setup>
import {type Invitee} from "@/types/user";

defineProps<{
  invitee: Invitee
}>()
</script>
