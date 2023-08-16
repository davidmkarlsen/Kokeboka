<template>
	<a href="#">
		<button class="py-3 px-4 rounded-md font-medium hover:bg-orange-200">{{ linkTitle }}</button>
	</a>
</template>

<script setup lang="ts">
defineProps<{ 
	linkTitle: string
}>()
</script>