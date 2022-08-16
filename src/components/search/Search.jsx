import { React } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearch } from '../../redux/search';
import { updateResults } from '../../redux/results';
import { reducerUpdateNextPage } from '../../redux/nextpage';
import { reducerUpdateDetails } from '../../redux/details';
import { reducerUpdatePrevPage } from '../../redux/prevpage';
import { BiSearch } from 'react-icons/bi';
import './search.css';

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.search);
  const { platforms } = useSelector((state) => state.platforms);

  const apisearch = axios.create({
    baseURL:
      'https://api.rawg.io/api/games?key=0d853fc444024e038f0d01d8bbb2e0a7&page=1&page_size=8&exclude_additions=true',
  });

  async function searchGames() {
    try {
      const response = await apisearch.get(
        `&search=${search}&parent_platforms=${platforms}`
      );
      dispatch(updateResults(response.data.results));
      dispatch(reducerUpdateNextPage(response.data.next));
      dispatch(reducerUpdateDetails(''));
      dispatch(reducerUpdatePrevPage(null));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='search'>
      <h1 className='search__logo'>GAMESEARCH</h1>
      <div className='search__div'>
        <input
          placeholder='Search for any game...'
          className='search__input'
          type='text'
          onChange={(e) => dispatch(updateSearch(e.target.value))}
        />
        <button className='search__btn' onClick={searchGames}>
          <BiSearch className='search__icon' />
        </button>
      </div>
    </div>
  );
};

export default Search;
