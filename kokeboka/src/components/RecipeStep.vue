<template>
	<div class="relative">
		<h4 class="font-medium">Steg {{ stepNumber }}</h4>
		<input :id="inputId" type="checkbox" class="hidden peer">
		<label :for="inputId" class="flex px-5 py-4 gap-5 bg-orange-200 w-full mt-2 border-4 border-orange-200 rounded-md cursor-pointer ps-16 peer-checked:border-orange-200 peer-checked:bg-orange-300 ">
			<div>
				{{ stepDetails }}
			</div>
		</label>
		<div class="w-6 h-6 bg-white absolute top-16 left-5 rounded-full grid place-items-center">
			<img src="@/assets/check.svg" alt="sjekk" class="w-3 h-3 fill-white">
		</div>
		<div class="w-6 h-6 bg-white absolute top-16 left-5 rounded-full place-items-center block peer-checked:hidden">
		</div>
	</div>
</template>

<script setup lang="ts">
var props = defineProps<{
	stepNumber: number,
	stepDetails: string
}>()

var inputId = props.stepNumber.toString();
</script>