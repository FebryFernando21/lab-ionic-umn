import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id : 'r1',
      title : 'Gado-gado',
      imageUrl : 'https://awsimages.detik.net.id/community/media/visual/2017/08/17/6dea012e-c17a-4ce2-b111-95360f307ee2.jpg?w=700&q=90',
      ingredients: ['Lontong', 'Kacang', 'Sayur']
    },
    
    {
      id : 'r2',
      title : 'Tempura',
      imageUrl : 'https://aromasian.com/wp-content/uploads/2017/08/japanese-fried-snacks-tempura.jpg',
      ingredients: ['Udang', 'Tepung']
    },
    
    {
      id : 'r3',
      title : 'Kentucky',
      imageUrl : 'https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg',
      ingredients: ['Ayam', 'Tepung']
    },
  ];

  constructor() { }

  getAllRecipes() {
    return[...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe =>{
      return recipe.id !== recipeId;
    })
  }

}
