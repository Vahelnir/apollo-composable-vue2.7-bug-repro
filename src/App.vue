<script setup lang="ts">
import { provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createMockClient } from "mock-apollo-client";
import HelloWorld from "./components/HelloWorld.vue";
import { GET_LONG_SOMETHING, GET_SOMETHING } from "./queries";

function wait(milliseconds: number) {
  return new Promise<void>((res) => setTimeout(() => res(), milliseconds));
}

const mockedApolloClient = createMockClient();

mockedApolloClient.setRequestHandler(GET_SOMETHING, () =>
  wait(500).then(() => ({ data: { something: { id: 0, hello: "world" } } }))
);

mockedApolloClient.setRequestHandler(GET_LONG_SOMETHING, () =>
  wait(5000).then(() => ({
    data: { longSomething: { id: 0, world: "world" } },
  }))
);

provide(DefaultApolloClient, mockedApolloClient);
</script>

<template>
  <div>
    <HelloWorld />
  </div>
</template>
