<template>
	<div class="flex gap-3 mt-7">
		<span>Oppskrifter</span>
		<img src="@/assets/next.svg" alt="Neste">
		<span>Middager</span>
		<img src="@/assets/next.svg" alt="Neste">
		<span>Chili Con Carne</span>
	</div>
	<div class="bg-webBackground3 w-full py-9 px-7 mt-4 rounded-lg">
		<h1 class="text-3xl font-medium">Chili Con Carne</h1>
		<p class="mt-4">
			Chili con carne er en smakfull meksikansk rett med kjøttdeig, bønner, chili og krydder. 
			Serveres med ris eller brød, og kan toppes med rømme og ost. En populær favoritt globalt.
		</p>
		<div class="bg-red-200 w-full h-32 my-8"></div>
		<div class="flex gap-9">
			<div class="w-4/12">
				<h2 class="text-xl font-medium">Ingredienser</h2>
				<ul class="flex flex-col gap-3 mt-4">
					<li>500 g kjøttdeig (storfe eller svinekjøtt)</li>
					<li>1 løk, hakket</li>
					<li>2 hvitløksfedd, finhakket</li>
					<li>1 rød paprika, hakket</li>
					<li>1 grønn paprika, hakket</li>
					<li>1 boks hermetiske tomater</li>
					<li>2 bokser kidneybønner, skylt og avrent</li>
					<li>2 ss chilipulver (juster etter smak)</li>
					<li>1 ts spisskummen</li>
					<li>1 ts paprikapulver</li>
					<li>Salt og pepper etter smak</li>
					<li>Olje til steking</li>
					<li>Eventuelle toppings: revet ost, rømme, hakket koriander, limeskiver</li>
				</ul>
				<div class="flex align-bottom flex-col mt-16 bg-orange-200 p-6 pt-36 pb-12 rounded-md">
					<h3 class="font-medium text-2xl">Visste du at...</h3>
					<p class="mt-3 w-4/5">
						Til tross for sin meksikanske stil stammer Chili Con Carne faktisk fra Texas, USA, 
						der chili-konkurranser ble en trend på 1800-tallet.
					</p>
				</div>
			</div>
			<div class="w-8/12">
				<h2 class="text-xl font-medium">Fremgangsmåte</h2>
				<div class="flex flex-col mt-4 gap-5">
					<recipe-step v-for="step in recipeSteps" :step-number="step.stepNumber" :step-details="step.stepDetails"></recipe-step>	
					<h3 class="mt-4 font-medium">Nyt din hjemmelagde chili con carne!</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import RecipeStep from '@/components/RecipeStep.vue';

var recipeSteps = [
	{ 
		stepNumber: 1,
		stepDetails: "Varm opp litt olje i en stor gryte på middels varme. Tilsett løk og hvitløk, og stek til de er myke og gyldne."
	},
	{ 
		stepNumber: 2,
		stepDetails: "Tilsett kjøttdeig i gryten, og stek til den er brunet og gjennomstekt. Bryt opp kjøttet med en sleiv mens du steker."
	},
	{ 
		stepNumber: 3,
		stepDetails: "Tilsett de hakkede paprikaene i gryten, og la det steke i noen minutter til de er litt mykere."
	},
	{ 
		stepNumber: 4,
		stepDetails: "Hell i hermetiske tomater, inkludert sausen. Skyll bønnene godt og tilsett dem også i gryten."
	},
	{ 
		stepNumber: 5,
		stepDetails: "Tilsett chilipulver, spisskummen, paprikapulver, salt og pepper. Rør godt for å blande alle ingrediensene sammen."
	},
	{ 
		stepNumber: 6,
		stepDetails: "La retten småkoke under lokk i omtrent 20-30 minutter, slik at smakene blander seg godt sammen."
	},
	{ 
		stepNumber: 7,
		stepDetails: "Smak til med mer krydder om nødvendig, juster etter din preferanse."
	},
	{ 
		stepNumber: 8,
		stepDetails: "Server chili con carne varm, toppet med revet ost, en skje rømme, hakket koriander og eventuelt limeskiver for ekstra friskhet."
	}
]
</script>