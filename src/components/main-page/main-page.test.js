import React from "react";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import {MainPageView} from "./main-page";
import genreGroupsMock from "../../mocks/movies-genres";
import promoMovie from "../../mocks/movie-card";

const initialState = {};
const mockStore = configureStore();

it(`MainPageView correctly renders default markup`, () => {
  const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <MemoryRouter
          initialEntries = {[`/`]}>
          <MainPageView
            promoMovieCard={promoMovie}
            movies={genreGroupsMock[`All Genres`]}
            moviesGenres={Object.keys(genreGroupsMock)}
            onGenreChange={() => {}}
            onMoviesFetch={() => {}}
            onPromoMovieFetch={() => {}}
            onToMyListToggle={() => {}}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
