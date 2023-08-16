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
					<div class="w-full bg-amber-200 h-36 p-5 text-2xl rounded-md">Man</div>
					<div class="w-full bg-amber-200 h-36 p-5 text-2xl rounded-md">Tir</div>
					<div class="w-full bg-amber-200 h-36 p-5 text-2xl rounded-md">Ons</div>
					<div class="w-full bg-amber-200 h-36 p-5 text-2xl rounded-md">Tor</div>
					<div class="w-full bg-amber-200 h-36 p-5 text-2xl rounded-md">Fre</div>
					<div class="w-full bg-amber-200 h-36 p-5 text-2xl rounded-md">Lør</div>
					<div class="w-full bg-amber-200 h-36 p-5 text-2xl rounded-md">Søn</div>
				</div>
			</div>
			<div class="bg-webBackground3 p-7 mt-8 rounded-lg">
				<h1 class="text-2xl font-medium">Populære oppskrifter</h1>
				<p class="mt-2">
					Nedenfor finner du smakfulle oppskrifter som flere elsker å lage. 
				</p>
			</div>
		</div>
		<div class="bg-webBackground2 w-3/12 p-5 rounded-lg">
			Ja
		</div>
	</div>
</template>

<script setup lang="ts">
import SearchInput from '@/components/SearchInput.vue';
import FilterBtn from '@/components/FilterBtn.vue';
</script>