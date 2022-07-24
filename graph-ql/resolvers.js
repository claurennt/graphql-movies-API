const Movie = require('../DB/Movie');

//resolver to get all movies
const movies = async () => {
  try {
    const moviesFetched = await Movie.find();
    return moviesFetched;
  } catch (error) {
    throw error;
  }
};

//resolver to create a new movie
const createMovie = async (args) => {
  try {
    const { title, director, year, genre, rating } = args.movie;
    const movie = new Movie({
      title,
      director,
      year,
      genre,
      rating,
    });
    const { _doc, id } = await movie.save();

    return { ..._doc, _id: id };
  } catch (error) {
    throw error;
  }
};

module.exports = { movies, createMovie };
