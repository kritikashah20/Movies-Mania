import { useState } from 'react'

// api
import { getMoviesList } from '../../../api/requests';

// component
import MovieCards from '../../MovieCards'

const SearchPage = () => {

    const [searchText, setSearchText] = useState("");
    const [moviesList, setMoviesList] = useState([]);

    const handleInput = (e) => {
        setSearchText(e.target.value)
    }

    const handleClick = () => {
        console.log(searchText);
        getMoviesList(searchText).then((response) => { setMoviesList(response.data.Search) })
    }

    const handleClear = () => {
        setSearchText("")
    }

    // arr = Array.from({ length: 121 }, (_, i) => 1989 + 1)
    // console.log(arr);


    return (
        <div>
            Search Page

            <div>
                <input type="text" placeholder="Enter a movie title" value={searchText} onChange={handleInput} />
                <button onClick={handleClick}>Search</button>
                <button onClick={handleClear}>Clear</button>



                <label htmlFor="">Choose year</label>
                <select>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>

                    {/* {arr.map((a, aIdx) => {
                        <option key={aIdx} value={a}>{a}</option>

                    }
                    )} */}
                </select>
                {moviesList ? <MovieCards moviesList={moviesList} /> : <p>No Movies Yet</p>}
            </div>

            <div>
            </div>
        </div>
    )
}

export default SearchPage
