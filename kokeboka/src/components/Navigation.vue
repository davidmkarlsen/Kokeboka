<template>
	<div class="flex gap-6 font-body text-textstandard">
		<a href="#" class="flex">
			<button class="py-3 px-4 rounded-md font-medium hover:bg-orange-200">
				<img class="m-auto" src="../assets/kokeboka-logo.png" alt="kokeboka-logo">
			</button>
		</a>
		<link-navigation-btn :linkTitle="'Hjem'"></link-navigation-btn>
		<link-navigation-btn :linkTitle="'Oppskrifter'"></link-navigation-btn>
		<a href="#" class="ms-auto">
			<button class="py-3 px-6 rounded-md font-medium bg-secondary hover:bg-amber-300">Legg til oppskrift +</button>
		</a>
	</div>
</template>

<script setup lang="ts">
import LinkNavigationBtn from './LinkNavigationBtn.vue';
</script>