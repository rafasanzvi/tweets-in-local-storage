//Variables
const form = document.querySelector("#formulario")
const listTweets = document.querySelector("#lista-tweets")
let tweets = [] //This variable saves all tweets

//Event listeners
eventListeners()

function eventListeners() {
    form.addEventListener("submit", addTweets)
}


//Functions
function addTweets(e) {
    e.preventDefault()

    const individualTweet = document.querySelector("#tweet").value

    //Validating
    if (individualTweet === "") {
        showError("This space cannot be empty")

        return //Prevents the further use of additional lines of code
    }

    const tweetObj = {
        id: Date.now(),
        individualTweet //individualTweet: individualTweet
    }

    //Add to tweets array
    tweets = [...tweets, tweetObj]

    //Create HTML
    createHtml()

    //Restart form
    form.reset()
}

function showError(error) {
    const messageError = document.createElement("p")
    messageError.textContent = error
    messageError.classList.add("error")

    //Insert in the content
    const content = document.querySelector("#contenido")
    content.appendChild(messageError)

    //To remove 
    setTimeout(() => {
        messageError.remove()
    }, 3000)
}

//Show a list of tweets
function createHtml() {

    cleanHTML()

    if (tweets.length > 0) {

        tweets.forEach(tweet => {

            //Create HTML
            const li = document.createElement("li")

            //add text
            li.innerText = tweet.individualTweet

            //insert in HTML
            listTweets.appendChild(li)
        })
    }
}

function cleanHTML() {
    while (listTweets.firstChild) {
        listTweets.removeChild(listTweets.firstChild)
    }
}