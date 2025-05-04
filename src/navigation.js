window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({location});

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if(location.hash.startsWith('#search=')) {
        searchPage();
    } else if(location.hash.startsWith('#movie=')) {
        moviesPage();
    } else if(location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }
};

function homePage() {
    console.log('Home!!');
    getCategoriesPreview();
    getTrendingMoviesPreview();
}

function categoriesPage() {
    console.log('Category!!');
}

function moviesPage() {
    console.log('Movies!');
}

function searchPage() {
    console.log('Search!');
}

function trendsPage() {
    console.log('TRENDS!');
}