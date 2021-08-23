import SingleMovie from "../components/SingleMovie";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_TOKEN } from '../globals/globals';

function PageSingleMovie() {

    const [movieData, setMovieData] = useState(null);

    const { id } = useParams();

    useEffect(() => {

        const fetchMovie = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });
            let rawMovieData = await res.json();
            setMovieData(rawMovieData);
        }

        fetchMovie();
    }, []);

    return (
        <section>
            {movieData !== null && <SingleMovie movieData={movieData} />}
        </section>
    )
}

export default PageSingleMovie
