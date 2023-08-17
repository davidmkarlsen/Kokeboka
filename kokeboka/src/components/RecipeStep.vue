<template>
	<div>
		<h4 class="font-medium">Steg {{ stepNumber }}</h4>
		<div class="flex px-5 py-4 gap-5 bg-orange-200 w-full mt-2 rounded-md">
			<div class="rounded-full w-9 h-6 bg-white my-auto">
			</div>
			<div>
				{{ stepDetails }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
var props = defineProps<{
	stepNumber: number,
	stepDetails: string
}>()
</script>