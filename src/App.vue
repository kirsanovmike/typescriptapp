<template>
  <main>
    <h1>
      People invited to my party
    </h1>
    <input type="text" placeholder="Name" v-model="name" @keypress.enter="addInvitee">
    <select v-model="gender" @keypress.enter="addInvitee">
      <option :value="GENDER.MALE">Male</option>
      <option :value="GENDER.FEMALE">Female</option>
    </select>
    <card v-for="(inv, index) in invitees" :key="index" :invitee="inv" />
    <card />
    <p>
      maleCount: {{count.male}}
    </p>
    <p>
      femaleCount: {{count.female}}
    </p>
  </main>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import Card from "@/components/Card.vue";
import {GENDER, type Invitee} from "@/types/user";

const name = ref<string>("");
const gender = ref<GENDER>(GENDER.MALE)
const invitees = ref<Invitee[]>([])

const addInvitee = (): void => {
  if (name.value) {
    invitees.value.push({
      id: Math.floor(Math.random() * 1_000_000),
      name: name.value,
      gender: gender.value
    })
    name.value = "";
    gender.value = GENDER.MALE;
  }
}

interface Count {
  male: number,
  female: number
}

const count = computed<Count>(() => {
  return invitees.value.reduce((acc, cur) => {
    if (cur.gender === GENDER.MALE) {
      return {
        ...acc,
        male: acc.male + 1
      }
    } else {
      return {
        ...acc,
        female: acc.female + 1
      }
    }
  }, {male: 0, female: 0})
})
</script>
