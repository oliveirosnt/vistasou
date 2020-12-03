import { unmountComponentAtNode } from "react-dom";	
import { render } from "react-dom";	
import { act } from "react-dom/test-utils";	
import Product from "./components/Product.js"	
import React from 'react';	

let container = null;	

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