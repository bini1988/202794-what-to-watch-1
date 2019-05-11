import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoviesCatalog from "./movies-catalog";

configure({adapter: new Adapter()});

const filmsMock = [
  {
    id: `480d2236-6c7d-4fd3-a225-80c66710a71f`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  }, {
    id: `505f451a-0b69-47ed-96c6-66d5525d5a5e`,
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
  }
];

describe(`MoviesCatalog`, () => {
  it(`Set catalog active card on movie's card mouse enter event`, () => {
    const wrapper = mount(
        <MoviesCatalog
          films={filmsMock}/>
    );

    const activeCard = filmsMock[0];
    const card = wrapper.find(`.catalog__movies-card[id='${activeCard.id}']`);
    expect(card).toHaveLength(1);

    expect(wrapper.state(`activeCard`)).toEqual(null);

    card.simulate(`mouseenter`);
    wrapper.update();

    expect(wrapper.state(`activeCard`)).toEqual(activeCard);

    card.simulate(`mouseleave`);
    wrapper.update();

    expect(wrapper.state(`activeCard`)).toEqual(null);
  });
});