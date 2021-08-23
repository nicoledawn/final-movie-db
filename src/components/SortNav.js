import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import { API_TOKEN } from '../globals/globals'

function SortNav( {sort} ) {

    const [movieData, setMovieData] = useState(null); 
    const [movieImages, setMovieImages] = useState(null);


    useEffect(() => {

        const fetchMovies = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });
            let rawMovieData = await res.json();
            rawMovieData = rawMovieData.results.splice(0, 12);
            setMovieData(rawMovieData);
        }

        fetchMovies();
    }, [sort]);

    return (
        <div>
            
        </div>
    )
}

export default SortNav
