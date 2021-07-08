
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=9&q=${encodeURI(category)}&api_key=B9oZs3OU5q1946S5f6U15DNvQmWWP2Ko`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }

    })

    return gifs;
}