import { useState } from 'react'
import { getYearList, } from '../../../helpers/dateTime';
import { defaultYearFilter } from '../../../constants/constants';

// api
import { getMoviesList, getMoviesListWithYear } from '../../../api/requests';

// component
import MovieCards from '../../MovieCards'

import styles from './SearchPage.module.css'

const SearchPage = () => {

    const [searchText, setSearchText] = useState("");
    const [moviesList, setMoviesList] = useState([]);
    const [yearList, setYearList] = useState(getYearList());
    const [searchYear, setSearchYear] = useState(defaultYearFilter);

    const handleInput = (e) => {
        setSearchText(e.target.value)
    }

    const handleSearch = () => {
        // console.log(searchText);
        if (searchYear === defaultYearFilter) {
            getMoviesList(searchText).then((response) => { setMoviesList(response.data.Search) })
        } else {
            getMoviesListWithYear(searchText, searchYear).then((response) => { setMoviesList(response.data.Search) })
        }
    }

    const handleClear = () => {
        setSearchText("")
    }


    return (
        <div className={styles.container}>
            <h3>Search Your favourite Movies &#38; Series</h3>

            <div className={styles.searchArea}>
                <input type="text" placeholder="Enter a movie title" value={searchText} onChange={handleInput} />

                <button onClick={handleSearch}>Search</button>

                <button onClick={handleClear}>Clear</button>

                {/* <label htmlFor="">Choose year</label> */}
                <select onChange={(e) => setSearchYear(e.target.value)}>
                    {yearList.map((a, aIdx) =>
                        (<option key={aIdx} value={a}>{a}</option>)
                    )}
                </select>
                {moviesList ? <MovieCards moviesList={moviesList} /> : <p>No Movies Yet</p>}
            </div>

            <div>
            </div>
        </div>
    )
}

export default SearchPage
