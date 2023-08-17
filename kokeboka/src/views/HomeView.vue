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
	<div class="flex mt-11 gap-8 font-body text-textstandard">
		<div class="w-9/12">
			<div class="bg-webBackground3 p-7 rounded-lg">
				<h1 class="text-2xl font-medium">Ukens utvalgte</h1>
				<p class="mt-2">
					Vi har fremhevet ulike middager for hver dag i uka. Disse er valgt ut med tanke på ernæring og smak, 
					slik at det skal passe til enhver person.
				</p>
				<div class="grid grid-cols-4 gap-5 mt-10">
					<div class="w-full bg-amber-200 h-36 p-4 text-2xl rounded-md flex items-end">Man</div>
					<div class="w-full bg-amber-200 h-36 p-4 text-2xl rounded-md flex items-end">Tir</div>
					<div class="w-full bg-amber-200 h-36 p-4 text-2xl rounded-md flex items-end">Ons</div>
					<div class="w-full bg-amber-200 h-36 p-4 text-2xl rounded-md flex items-end">Tor</div>
					<div class="w-full bg-amber-200 h-36 p-4 text-2xl rounded-md flex items-end">Fre</div>
					<div class="w-full bg-amber-200 h-36 p-4 text-2xl rounded-md flex items-end">Lør</div>
					<div class="w-full bg-amber-200 h-36 p-4 text-2xl rounded-md flex items-end">Søn</div>
				</div>
			</div>
			<div class="bg-webBackground3 p-7 mt-8 rounded-lg">
				<h1 class="text-2xl font-medium">Populære oppskrifter</h1>
				<p class="mt-2">
					Nedenfor finner du smakfulle oppskrifter som flere elsker å lage. 
				</p>
				<div class="flex mt-7 flex-col gap-6">
					<recipe-highlight-home></recipe-highlight-home>
					<recipe-highlight-home></recipe-highlight-home>
					<recipe-highlight-home></recipe-highlight-home>
				</div>
			</div>
		</div>
		<div class="bg-webBackground2 w-3/12 px-5 py-8 rounded-lg text-center">
			<h1 class="text-2xl font-medium">Lei av å lete?</h1>
			<h1 class="text-2xl font-semibold mt-1 w-40 mx-auto">La oss velge for deg</h1>
			<button class="w-full bg-amber-200 h-28 p-4 rounded-md text-left mt-8 flex items-end">
				<div class="text-xl font-medium w-1/2 leading-6">Finn frokost</div>
			</button>
			<button class="w-full bg-lime-200 h-28 p-4 rounded-md text-left mt-5 flex items-end">
				<div class="text-xl font-medium w-1/2 leading-6">Finn lunsj</div>
			</button>
			<button class="w-full bg-rose-200 h-28 p-4 rounded-md text-left mt-5 flex items-end">
				<div class="text-xl font-medium w-1/2 leading-6">Finn middag</div>
			</button>
			<button class="w-full bg-amber-200 h-28 p-4 rounded-md text-left mt-5 flex items-end">
				<div class="text-xl font-medium w-1/2 leading-6">Finn dessert</div>
			</button>
			<button class="w-full bg-lime-200 h-28 p-4 rounded-md text-left mt-5 flex items-end">
				<div class="text-xl font-medium w-1/2 leading-6">Finn snacks</div>
			</button>

		</div>
	</div>
</template>

<script setup lang="ts">
import SearchInput from '@/components/SearchInput.vue';
import FilterBtn from '@/components/FilterBtn.vue';
import RecipeHighlightHome from '@/components/RecipeHighlightHome.vue';
</script>