export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=cIlwR5ukWhUTMd9NNDpiFLHWZJj74icE`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}
/**
 * [Apuntes]
 * En images utilizamos el ?. A la hora de hacer destructuring si ponemos al final el ? estás preguntando si existe el campo img.images.
 * Si existe, sigue con el downsided_medium.url si no, no hace nada o salta un error.
 */