import doenv from 'dotenv';

doenv.config();

async function fetchNews(query){
    try{
        let date = getDate();
        let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=publishedAt&apiKey=${process.env.APIKEY}`)

        if(!response.ok){
            throw new Error("Failed to Fetch data..")
        }

        return response.json();
    }   
    catch(error){
        console.error(error);
    }
}

function getDate(){
    let date = new Date();
    let month = date.getMonth()
    let day = date.getDate()
    let year = date.getFullYear()

    if(day < 10){
        day = `0${day - 1}`;
    }
    else{
        day = Number(day - 1);
    }
    
    if(month < 10){
        month = `0${month + 1}`;
    }

    let fullDate = `${year}-${month}-${day}`;
    return fullDate;
}


export default fetchNews;