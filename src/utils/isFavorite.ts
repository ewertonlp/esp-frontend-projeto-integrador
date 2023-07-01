export function isFavorite(favorites: Array<any>, idCharacter: number) {
    // alert("PARAMS:", idCharacter);
    return favorites.find((favorite) => favorite.id === idCharacter);
  }