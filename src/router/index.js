import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: () => import(/* webpackChunkName: "recipe" */ '../views/RecipeView.vue')
  },
  {
    path: '/mealplanner',
    name: 'mealplanner',
    component: () => import(/* webpackChunkName: "mealplanner" */ '../views/MealPlanner.vue')
  },
  {
    path: '/mealbyingredients',
    name: 'mealbyingredients',
    component: () => import(/* webpackChunkName: "recipe" */ '../views/MealByIngredients.vue')
  },
  {
    path: '/shoppinglist',
    name: 'shoppinglist',
    component: () => import(/* webpackChunkName: "recipe" */ '../views/ShoppingList.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import(/* webpackChunkName: "recipe" */ '../views/Favorites.vue')
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
