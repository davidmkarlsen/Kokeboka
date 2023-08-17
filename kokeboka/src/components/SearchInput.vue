<template>
	<form>
		<div class="relative w-6/12">
            <input 
				class="border-borderColor border-2 border-e-0 rounded-l-full w-11/12 py-3 px-6 font-body focus:outline-none" 
				type="text" placeholder="Søk etter oppskrift" name="searchForRecipeInput" id="searchForRecipeInput"
			>
            <button type="submit" class="absolute top-0 right-0 w-1/12 ps-1 pe-6 text-md h-full text-borderColor rounded-r-full border-2 border-s-0 border-borderColor bg-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
	</form>
</template>

<script setup lang="ts">

</script>