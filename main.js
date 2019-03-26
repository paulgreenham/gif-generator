let favorites = new FavoriteGifs
let render = new Render

const convertQueryString = function(str){
    newStr = ""
    for(let i = 0; i < str.length; i ++){
        if(str[i] != " "){
            newStr += str[i]
        }
        else{
            newStr += "+"
        }
    }
    return newStr
}

const getGifs = function(queryTerms){
$.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?q=${convertQueryString(queryTerms)}&api_key=Cn0UdyG81KmxMaUCm93gc9Tx9cxyNRwp&limit=6`,
    success: function(data){
        const embedURLs = data.data.map(d => d.embed_url)
        render.displayResults(embedURLs)
    },
    error: function (xhr, text, error) {
        console.log(text)
    }
})
}

$("#search").on("click", function(){
$("#image-container").empty()
getGifs($("input").val())
})

$("#clear-results").on("click", function(){
$("#image-container").empty()
})

$("#clear-favorites").on("click", function(){
favorites.clearAll()
$("#favorites").empty()
})

$("#image-container").on("click", ".add", function(){
let url = $(this).siblings("iframe").attr("src")
favorites.addGif(url)
$(this).closest("div").remove()
render.addFavorite(url)
})

$("#favorites").on("click", ".remove", function(){
favorites.removeGif($(this).siblings("iframe").attr("src"))
$(this).closest("div").remove()
})