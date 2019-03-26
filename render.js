class Render{

    displayResults(urls){
        const source = $("#results-template").html()
        const template = Handlebars.compile(source)
        const hbText = template({urls})
        $("#image-container").append(hbText)
    }

    addFavorite(url){
        const source = $("#favorite-template").html()
        const template = Handlebars.compile(source)
        const hbText = template({url})
        $("#favorites").append(hbText)
    }
}