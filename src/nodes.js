// Sections
const headerSection = document.querySelector('#header');
const trendingPreviewSection = document.querySelector('#trendingPreview');
const categoriesPreviewSection = document.querySelector('#categoriesPreview');
const genericSection = document.querySelector('#genericList');
const movieDetailSection = document.querySelector('#movieDetail');

// Lists & Containers
const searchForm = document.querySelector('#searchForm');
const trendingMoviesPreviewList = document.querySelector('.trendingPreview-movieList');
const categoriesPreviewList = document.querySelector('.categoriesPreview-list');
const movieDetailCategoriesList = document.querySelector('#movieDetail .categories-list');
const relatedMoviesContainer = document.querySelector('.relatedMovies-scrollContainer');

// Elements
const headerTitle = document.querySelector('.header-title');
const arrowBtn = document.querySelector('.header-arrow');
const headerCategoryTitle = document.querySelector('.header-title--categoryView');

const searchFormInput = document.querySelector('#searchForm input');
const searchFormBtn = document.querySelector('#searchBtn');

const trendingBtn = document.querySelector('.trendingPreview-btn');

const movieDetailTitle = document.querySelector('.movieDetail-title');
const movieDetailDescription = document.querySelector('.movieDetail-description');
const movieDetailScore = document.querySelector('.movieDetail-score');



/* 
Si no quieren que su archivo de nodes.js este lleno de 
'document.querySelector()' y verlo un poco mas limpio, 
les comparto un tip que utilizo mucho.

Creen esta funcion al inicio del archivo nodes.js

const $ = (id) => document.querySelector(id);
Y ahora cada 'document.querySelector()' lo pueden cambiar solamente por:

const headerSection = $('#header');
Es algo parecido a jQuery
*/