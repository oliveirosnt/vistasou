import React from 'react';
import vestido from '../images/vestido.jpg'

function Products() {
    return (
        <div class="products">
            <ul>
                <li>
                    <div class="product_01">
                    <img src={vestido} alt="vestido" />
                    <h3>Vestido azul</h3>
                    <h3>100,00R$</h3>
                    <button>Favoritar</button>
                    </div>
                </li>
                <li>
                    <div class="product_02">
                    <img src={vestido} alt="vestido" />
                    <h3>Vestido azul</h3>
                    <h3>100,00R$</h3>
                    <button>Favoritar</button>
                    </div>
                </li>
                <li>
                    <div class="product_03">
                    <img src={vestido} alt="vestido" />
                    <h3>Vestido azul</h3>
                    <h3>100,00R$</h3>
                    <button>Favoritar</button>
                    </div>
                </li>
                <li>
                    <div class="product_04">
                    <img src={vestido} alt="vestido" />
                    <h3>Vestido azul</h3>
                    <h3>100,00R$</h3>
                    <button>Favoritar</button>
                    </div>
                </li>
            </ul>
      </div>
    )
}

export default Products;