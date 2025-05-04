let page = 1;
let infiniteScroll
searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=' + searchFormInput.value;
    ;
});
trendingBtn.addEventListener('click', () => {
    location.hash = '#trends'
});
arrowBtn.addEventListener('click', () => {
    history.back();
 });

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false);
window.addEventListener('scroll', infiniteScroll, false);

function navigator() {
    console.log({location});

    if(infiniteScroll) {
        window.removeEventListener('scroll', infiniteScroll, {pasive: false});
        infiniteScroll = undefined; 
    }

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
    };

    window.scroll(0,0);

    if (infiniteScroll) {
        window.addEventListener('scroll', infiniteScroll, {pasive: false});
    }
};

function homePage() {
    console.log('Home!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getCategoriesPreview();
    getTrendingMoviesPreview();
}

function categoriesPage() {
    
    console.log('Category!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    //['#category', 'id-name']
    const [_, categoryData] = location.hash.split('='); 
    const [categoryId, categoryName] = categoryData.split('-');
    const newName = categoryName.replace('%20', '');
    headerCategoryTitle.innerHTML = newName;
    getMoviesByCategory(categoryId);
}

function moviesPage() {
   /*  Evitar scrolling lateral de la seccion de recomendados
   const relatedMoviesScroll = () => scroll(0,0); 
   relatedMoviesContainer
   */
    console.log('Movies!');

    headerSection.classList.add('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
    

    const [_, movieId] = location.hash.split('=');
    getMovieById(movieId);
    
}

function searchPage() {
    console.log('Search!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_, query] = location.hash.split('=');
    getMoviesBySearch(query);
    
}

function trendsPage() {
    console.log('TRENDS!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML = 'Trends';
    getTrendingMovies();

    infiniteScroll = getPaginatedTrendingMovies;
};