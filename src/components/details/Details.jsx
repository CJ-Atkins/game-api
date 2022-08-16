import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './details.css';
import { reducerUpdateDetails } from '../../redux/details';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Details = () => {
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.details);

  const clearDetails = () => {
    dispatch(reducerUpdateDetails(''));
  };

  if (!details) return <div></div>;

  return (
    <div className='details' key={details.id}>
      <button className='details__btn' onClick={clearDetails}>
        <BsFillArrowLeftCircleFill className='details__btn-icon' /> Back to
        results
      </button>
      <div className='details__div'>
        <h2 className='details__title'>{details.name}</h2>
        <div className='details__columns-div'>
          <div className='details__left-column-div'>
            <img
              className='details__img'
              src={details.background_image_additional}
              alt=''
            />
          </div>
          <div className='details__right-column-div'>
            {details.developers[0] !== undefined ? (
              <p className='details__metadata details__developer'>
                Developed by {details.developers[0].name}
              </p>
            ) : null}
            {details.publishers[0] !== undefined ? (
              <p className='details__metadata details__publisher'>
                Published by {details.publishers[0].name}
              </p>
            ) : null}
            {details.genres[0] !== undefined ? (
              <p className='details__metadata details__genre'>
                Genre: {details.genres[0].name}
              </p>
            ) : null}
            <p className='details__metadata details__released'>
              Released: {details.released}
            </p>
            <ul className='details__metadata details__platforms'>
              Available on:
              {details.platforms.map((item, index) => (
                <li className='details__platform' key={item.platform.name}>
                  {item.platform.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p
          className='details__description'
          dangerouslySetInnerHTML={{ __html: details.description }}
        ></p>
      </div>
    </div>
  );
};

export default Details;
