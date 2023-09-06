const searchBar = document.getElementById("searchBar")
const searchButton = document.getElementById("searchButton")

const searchEmoji = ()=>{
    console.log("function called");
    if(searchBar.value!==""){
        searchButton.style.display = "flex"
    }else{
        searchButton.style.display = "none" 
    }
    const searchFieldValue = searchBar.value
    
    const filteredList = emojiList.filter((e)=>{
        if(e.aliases.some(ele=>ele.startsWith(searchFieldValue))){
            return true
        }
        if(e.description.split(" ").some(ele=>ele.startsWith(searchFieldValue))){
            return true
        }
        if(e.category.split(" ").some(ele=>ele.startsWith(searchFieldValue))){
            return true
        }
        if(e.tags.some(ele=> ele.startsWith(searchFieldValue))){
            return true
        }
    })
    const searchResultContainer = document.getElementById("searchResultContainer")
    searchResultContainer.innerText = "";
    filteredList.map((ele)=>{
        const emoji = document.createElement("h1")
        const category = document.createElement("h3")
        const description = document.createElement("p")
        emoji.innerText = ele.emoji
        category.innerText = ele.category
        description.innerText = ele.description

        searchResultContainer.appendChild(emoji)
        searchResultContainer.appendChild(category)
        searchResultContainer.appendChild(description)

    })
    console.log(filteredList);
}

if(searchBar.value==""){
    searchButton.style.display = "none"
}

searchButton.addEventListener("click",searchEmoji)

searchBar.addEventListener("keyup",searchEmoji)

window.onload = () => searchEmoji()