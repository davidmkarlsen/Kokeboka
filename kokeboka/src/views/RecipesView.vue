<template>
	<search-input class="mt-6"></search-input>
	<div class="flex gap-4 mt-8">
		<filter-btn :filter-title="'Fisk'" :filter-icon="'fish.svg'"></filter-btn>
		<filter-btn :filter-title="'Vegetar'" :filter-icon="'fish.svg'"></filter-btn>
		<filter-btn :filter-title="'Kylling'" :filter-icon="'fish.svg'"></filter-btn>
		<filter-btn :filter-title="'Storfe'" :filter-icon="'fish.svg'"></filter-btn>
		<filter-btn :filter-title="'Asiatisk'" :filter-icon="'fish.svg'"></filter-btn>
		<filter-btn :filter-title="'Italiensk'" :filter-icon="'fish.svg'"></filter-btn>
		<filter-btn :filter-title="'Alle filtre'" :filter-icon="'fish.svg'"></filter-btn>
	</div>
	<h1 class="text-2xl mt-10 font-medium">Frokost</h1>
	<router-link :to="{ name: 'oppskrift'}">
		<div class="flex mt-4 gap-4 overflow-hidden">
			<recipe-btn v-for="recipe in recipes" :recipe-title="recipe"></recipe-btn>
		</div>
	</router-link>
	<h1 class="text-2xl mt-10 font-medium">Lunsj</h1>
	<div class="flex mt-4 gap-4 overflow-hidden">
		<recipe-btn v-for="recipe in recipes" :recipe-title="recipe"></recipe-btn>
	</div>
	<h1 class="text-2xl mt-10 font-medium">Middag</h1>
	<div class="flex mt-4 gap-4 overflow-hidden">
		<recipe-btn v-for="recipe in recipes" :recipe-title="recipe"></recipe-btn>
	</div>
	<h1 class="text-2xl mt-10 font-medium">Dessert</h1>
	<div class="flex mt-4 gap-4 overflow-hidden">
		<recipe-btn v-for="recipe in recipes" :recipe-title="recipe"></recipe-btn>
	</div>
	<h1 class="text-2xl mt-10 font-medium">Snacks</h1>
	<div class="flex mt-4 gap-4 overflow-hidden">
		<recipe-btn v-for="recipe in recipes" :recipe-title="recipe"></recipe-btn>
	</div>
	
	
</template>

<script setup lang="ts">
import SearchInput from '@/components/SearchInput.vue'
import FilterBtn from '@/components/FilterBtn.vue';
import RecipeBtn from '@/components/RecipeBtn.vue'

var recipes = ["Chili Con Carne", "Pasta Carbonara"]
</script>