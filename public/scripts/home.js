let imgs = ["/img/B_1.jpg","/img/B_2.jpg","/img/B_3.jpg","/img/B_4.jpg","/img/B_5.jpg","/img/B_6.jpg","/img/B_7.jpg","/img/B_8.jpg"];

let bgImg = document.querySelector(".hero-section");
let randNum = Math.floor(Math.random() * imgs.length); 


bgImg.style.backgroundImage = `url(${imgs[randNum]})`;

async function createNewsCard(){
    let newsCards = document.querySelector(".news-cards");
    let news = await getNews();
    let newsCount = news.totalResults;
    let randNum = Math.floor(Math.random() * newsCount);
    let date = news.articles[randNum].publishedAt;

    let html = `<div class="card">
                <h3 class="title">${news.articles[randNum].title}</h3>
                <img class="img" src="${news.articles[randNum].urlToImage}" alt="image" />
                <p class="publisher">Publish: ${date.slice(0,10)}</p>
                <p class="author">${news.articles[randNum].author}</p>
                <p>${news.articles[randNum].description}</p>
            </div>`;

    newsCards.innerHTML += html;
}

async function getNews(){
    try{
        let response = await fetch(`https://newzapp-j4ft.onrender.com/news`);

        if(!response.ok){
            throw new Error("Failed to fetch data!")
        }

        return response.json();
    }
    catch(error){
        console.error(error);
    }
}

for(let i = 0; i < 100; i++){
    createNewsCard();
}
