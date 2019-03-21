function init() {
  //put any page initialization/handlebars initialization here
  let recipeFormTemplate = document.querySelector('#recipe-form-template').innerHTML
  let recipeFormFn = Handlebars.compile(recipeFormTemplate)
  document.querySelector('main').innerHTML = recipeFormFn({ingredients: ['','','','','']})

  Handlebars.registerPartial('recipeDetailsPartial', document.querySelector('#recipe-details-partial').innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(`<li name="ingredients">${ingredient}</li>`)
  })
}

function handleSubmit() {
  let recipe = {}
  let name = document.querySelector('#name').value
  let description = document.querySelector('#description').value
  let ingredients = []
  let ingredientsList = document.getElementsByName('ingredients')

  for (let i = 0; i < ingredientsList.length; i++) {
    if (ingredientsList[i] && ingredientsList[i].value) {
      ingredients.push(ingredientsList[i].value)
    }
  }

  recipe.name = name
  recipe.description = description
  recipe.ingredients = ingredients

  let recipeTemplate = document.querySelector('#recipe-template').innerHTML
  let recipeFn = Handlebars.compile(recipeTemplate)
  document.querySelector('main').innerHTML = recipeFn(recipe)
}

function displayEditForm() {
  let recipe = {}
  let name = document.querySelector('#recipeName').innerText
  let description = document.querySelector('#recipeDescription').innerText
  let ingredients = []
  let ingredientsList = document.getElementsByName('ingredients')

  for (let i = 0; i < ingredientsList.length; i++) {
    if (ingredientsList[i] && ingredientsList[i].innerText) {
      ingredients.push(ingredientsList[i].innerText)
    }
  }

  recipe.name = name
  recipe.description = description
  recipe.ingredients = ingredients

  let recipeFormTemplate = document.querySelector('#recipe-form-template').innerHTML
  let recipeFormFn = Handlebars.compile(recipeFormTemplate)
  document.querySelector('main').innerHTML = recipeFormFn(recipe)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
