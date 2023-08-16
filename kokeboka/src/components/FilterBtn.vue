<template>
	<button class="flex py-2 px-4 gap-2 align-middle bg-primary text-white rounded-md font-body">
		<img class="my-auto w-6" :src="getImageUrl()">
		<span>
			{{ filterTitle }}
		</span>
	</button>
</template>

<script setup lang="ts">
const props = defineProps<{ 
	filterTitle: string,
	filterIcon: string
}>()

function getImageUrl() {
  return new URL(`../assets/${props.filterIcon}`, import.meta.url)
}

</script>