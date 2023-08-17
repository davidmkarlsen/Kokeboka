import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RecipesView from '@/views/RecipesView.vue'
import RecipeDetailView from '@/views/RecipeDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hjem',
      component: HomeView
    },
	{
		path: '/oppskrifter',
		name: 'oppskrifter',
		component: RecipesView
	},
	{
		path: '/oppskrift',
		name: 'oppskrift',
		component: RecipeDetailView
	}
  ]
})

export default router
