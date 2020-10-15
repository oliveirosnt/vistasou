import { unmountComponentAtNode } from "react-dom";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import Product from "./components/Product.js"
import React from 'react';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

let container = null;
configure({ adapter: new Adapter() });

beforeEach(() => {
  // Configura um elemento do DOM como alvo do teste
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("testing the props", () => {
  act(() => {
    render(<Product name='aaa' value='bbb' />, container);
  });
  expect(container.textContent).toEqual("aaabbb");  
});

it("testing without the props", () => {
  act(() => {
    render(<Product/>, container);
  });
  expect(container.textContent).toEqual("");  
});

it("testing the default state", () => {
  const checkbox = shallow(<Product/>);
  expect(checkbox.text()).toEqual('');
});

it("testing the change of the state", () => {
  const product = shallow(<Product/>);
  expect(product.text()).toEqual('');
  product.find('input').simulate('change');
  expect(product.text()).toEqual('Favorito');
});
