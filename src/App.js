import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Grid from './Grid';

const originalStyle = window.getComputedStyle(document.body).overflow;

const Trailer = ({ data }) => {
  const [trailerView, setTrailerView] = useState(false);

  useEffect(() => {
    if (trailerView){
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = originalStyle);

  }, [trailerView]);

  const url = data.Trailer.url.replace('watch?v=', 'embed/');

  return (
    <>
      <label onClick={() => setTrailerView(true)}>{data.Trailer.url}</label>

      {
        trailerView && (
            <div className='trailer'>
              <label onClick={() => setTrailerView(false)}>X</label>
              <iframe src={url}/>
            </div>
        )
      }
    </>
  )
};

const config = [
  {
    title: 'id',
    field: 'imdbID'
  },
  {
    title: 'title',
    field: 'Title'
  },
  {
    title: 'rating',
    field: 'imdbRating',
  },
 {
   title: 'trailer',
   field: 'Trailer',
   component: Trailer
 }
];

const App = ({ data }) => (
  <div>
    <Grid config={ config } data={ data } />
  </div>
);

const mapStateToProps = state => ({
  data: state.movies
});

export default connect(mapStateToProps)(App);
