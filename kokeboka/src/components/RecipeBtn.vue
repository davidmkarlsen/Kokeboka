<template>
	<button class="w-40 h-40 bg-secondary flex align-bottom items-end p-4 text-xl rounded-md text-start leading-7">
		{{ recipeTitle }}
	</button>
</template>

<script setup lang="ts">
const props = defineProps<{ 
	recipeTitle: string
}>()
</script>