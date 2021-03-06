import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";
import card from "../../mocks/movie-card";

it(`SmallMovieCard correctly renders default markup`, () => {
  const tree = renderer
    .create(
        <MemoryRouter
          initialEntries = {[`/`]}>
          <SmallMovieCard card={card}/>
        </MemoryRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
