<script setup lang="ts">
import { useGlobalQueryLoading, useQuery, useQueryLoading } from "@vue/apollo-composable";
import { watch } from "vue";
import { GET_SOMETHING, GET_LONG_SOMETHING } from "../queries";

const loading = useQueryLoading();
const globalLoading = useGlobalQueryLoading();

console.log("before something query");
const { loading: somethingLoading } =
  useQuery(GET_SOMETHING);
const { loading: longSomethingLoading } =
  useQuery(GET_LONG_SOMETHING);

watch(loading, () => console.log("global loading changed"));
watch(somethingLoading, () => console.log("something loading changed"));
watch(longSomethingLoading, () =>
  console.log("long something loading changed")
);
</script>

<template>
  <div>
    <ul>
      <li>Is loading: {{ loading }}</li>
      <li>Is global loading: {{ globalLoading }}</li>
      <li>Normal query loading: {{ somethingLoading }}</li>
      <li>Long query loading: {{ longSomethingLoading }}</li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
