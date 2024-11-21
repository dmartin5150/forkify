import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);
    // Loading recipe
    await model.loadRecipe(id);
    // rendering recipe
    recipeView.render(model.state.recipe);
    const { recipe } = model.state;
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResuls = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

controlSearchResuls();

const controlServings = function (newServings) {
  // update servings in the state
  model.updateServings(newServings);
  // update recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);
  recipeView.update(model.state.recipe);
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // show loading spinner
    addRecipeView.renderSpinner();
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);
    // render recipe
    recipeView.render(model.state.recipe);
    // display success message
    addRecipeView.renderMessage();
    // re-render bookmar
    bookmarksView.render(model.state.bookmarks);
    // change ID in url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // close form
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (e) {
    console.error(e);
    addRecipeView.renderError(e.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandleRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlBookmark);
  searchView.addHandlerSearch(controlSearchResuls);
  paginationView.addHanderClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
