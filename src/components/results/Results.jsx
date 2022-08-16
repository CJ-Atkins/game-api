import React from 'react';
import './results.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { reducerUpdateDetails } from '../../redux/details';
import { updateResults } from '../../redux/results';
import { reducerUpdateNextPage } from '../../redux/nextpage';
import { reducerUpdatePrevPage } from '../../redux/prevpage';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

const Results = () => {
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.results);
  const { details } = useSelector((state) => state.details);
  const { nextpage } = useSelector((state) => state.nextpage);
  const { prevpage } = useSelector((state) => state.prevpage);

  const apidetails = axios.create({
    baseURL: 'https://api.rawg.io/api/games/',
  });

  const nextpageapi = axios.create({
    baseURL: '',
  });

  const prevpageapi = axios.create({
    baseURL: '',
  });

  async function fetchDetails(id) {
    try {
      const response = await apidetails.get(
        `${id}?key=0d853fc444024e038f0d01d8bbb2e0a7`
      );
      dispatch(reducerUpdateDetails(response.data));
    } catch (error) {
      console.log(error);
      alert('No game information');
    }
  }

  async function fetchNextPage() {
    try {
      const response = await nextpageapi.get(nextpage);
      dispatch(updateResults(response.data.results));
      dispatch(reducerUpdateNextPage(response.data.next));
      dispatch(reducerUpdatePrevPage(response.data.previous));
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPrevPage() {
    try {
      const response = await prevpageapi.get(prevpage);
      dispatch(updateResults(response.data.results));
      dispatch(reducerUpdatePrevPage(response.data.previous));
      dispatch(reducerUpdateNextPage(response.data.next));
    } catch (error) {
      console.log(error);
    }
  }

  if (!results || details) return <div></div>;

  return (
    <div className='results'>
      <div className='results__btn-div'>
        {prevpage == null ? null : (
          <button className='results__btn' onClick={fetchPrevPage}>
            <BsFillArrowLeftCircleFill className='results__btn-icon' />
          </button>
        )}
        {nextpage == null ? null : (
          <button className='results__btn' onClick={fetchNextPage}>
            <BsFillArrowRightCircleFill className='results__btn-icon' />
          </button>
        )}
      </div>

      <div className='results__div'>
        {results.map((item, index) => (
          <div
            className='results__item-div'
            onClick={() => fetchDetails(item.id)}
            key={item.id}
          >
            <div className='results__info-div'>
              <h4 className='results__info-title'>{item.name}</h4>
              <p className='results__info-metadata'>
                Released: {item.released}
              </p>
            </div>
            {item.metacritic !== null ? (
              <p className='results__info-score'>{item.metacritic}</p>
            ) : null}
            <div className='results__img-div'>
              <img
                className='results__img'
                alt=''
                src={item.background_image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
