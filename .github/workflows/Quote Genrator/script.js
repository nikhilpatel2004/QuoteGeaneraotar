const apiUrl = "https://v2.jokeapi.dev/joke/Programming?type=twopart";
async function fetchQuote() {
    try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        
        let joke = data.type === "twopart" ? `${data.setup}\n${data.delivery}` : data.joke;
        
        const hindiJoke = await translateToHindi(joke);
        
        document.getElementById("quote").innerText = `${joke}\n(हिंदी: ${hindiJoke})` || "No jokes found.";
        document.getElementById("author").innerText = "__nikhil02__";
    } catch {
        document.getElementById("quote").innerText = "Failed to fetch joke.";
        document.getElementById("author").innerText = "";
    }
}

async function translateToHindi(text) {
    try {
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|hi`);
        const data = await res.json();
        return data.responseData.translatedText;
    } catch {
        return "अनुवाद विफल"; 
    }
}

document.addEventListener("DOMContentLoaded", fetchQuote);
document.getElementById("new-quote-btn").addEventListener("click", fetchQuote);
function tweet(){
    window.open( href="https://twitter.com/intent/tweet?text=Hello%20world")
}
