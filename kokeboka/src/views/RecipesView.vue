<template>
	<div>
		<search-input class="mt-6"></search-input>
		<div class="flex gap-4 mt-8">
			<filter-btn v-for="category in categories" :key="category.id" :filter-title="category.title" :filter-icon="'fish.svg'"></filter-btn>
			<filter-btn :filter-title="'Alle filtre'" :filter-icon="'fish.svg'"></filter-btn>
		</div>
		<h1 class="text-2xl mt-10 font-medium">Frokost</h1>
		<router-link :to="{ name: 'oppskrift'}">
			<div class="flex mt-4 gap-4 overflow-hidden">
				<recipe-btn v-for="recipe in recipes" :key="recipe.id" :recipe-title="recipe.title"></recipe-btn>
			</div>
		</router-link>
		<h1 class="text-2xl mt-10 font-medium">Lunsj</h1>
		<div class="flex mt-4 gap-4 overflow-hidden">
			<recipe-btn v-for="recipe in recipes" :key="recipe.id" :recipe-title="recipe.title"></recipe-btn>
		</div>
		<h1 class="text-2xl mt-10 font-medium">Middag</h1>
		<div class="flex mt-4 gap-4 overflow-hidden">
			<recipe-btn v-for="recipe in recipes" :key="recipe.id" :recipe-title="recipe.title"></recipe-btn>	
		</div>
		<h1 class="text-2xl mt-10 font-medium">Dessert</h1>
		<div class="flex mt-4 gap-4 overflow-hidden">
			<recipe-btn v-for="recipe in recipes" :key="recipe.id" :recipe-title="recipe.title"></recipe-btn>	
		</div>
		<h1 class="text-2xl mt-10 font-medium">Snacks</h1>
		<div class="flex mt-4 gap-4 overflow-hidden">
			<recipe-btn v-for="recipe in recipes" :key="recipe.id" :recipe-title="recipe.title"></recipe-btn>	
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchInput from '@/components/SearchInput.vue'
import FilterBtn from '@/components/FilterBtn.vue';
import RecipeBtn from '@/components/RecipeBtn.vue'

const recipes = ref([{
	id: 0,
	title: ""
}])
const categories = ref([{
	id: 0,
	title: ""
}])

fetch('https://localhost:7101/api/Recipe')
	.then(res => res.json())
	.then(data => recipes.value = data)
	.catch(err => console.log(err.message))

fetch('https://localhost:7101/api/Category')
	.then(res => res.json())
	.then(data => categories.value = data)
	.catch(err => console.log(err.message))

</script>