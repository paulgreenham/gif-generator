class FavoriteGifs {
    constructor(){
        this._favoriteGifs = []
    }

    getFavorites(){
        return this._favoriteGifs
    }

    addGif(url){
        this._favoriteGifs.push(url)
    }

    removeGif(url){
        let removeIndex = this._favoriteGifs.indexOf(url)
        this._favoriteGifs.splice(removeIndex, 1)
    }

    clearAll(){
        this._favoriteGifs = []
    }
}

