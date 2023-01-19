const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")


const apiKey = "KJ8zteId2Rdjuv6WqG8dkw==fyWvmMkWqgCO0yWL";
const option = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke(){

    try {
        jokeEl.innerText = "Updating....";
    btnEl.disabled = true;
    btnEl.innerText = "Loding..."
    //console.log("clicked");
    const response = await fetch(apiURL, option)
    const data = await response.json()
     

    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke";

    //console.log(data[0].joke);
    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later"
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke";
        console.log(error);
    }

   
}

btnEl.addEventListener("click",getjoke)