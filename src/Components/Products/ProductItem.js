import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductItem.scss';

const ProductItem = ( {product} ) => {
  const [currentPrice, setCurrentPrice] = useState(product.priceRetail);
  const [currentPriceGold, setCurrentPriceGold] = useState(product.priceGold);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [meterActive, setMeterActive] = useState(true);
  const [packActive, setPackActive] = useState(false);

  const onClickPack = () => {
    setCurrentPrice(product.priceGoldAlt.toFixed(2));
    setCurrentPriceGold(product.priceRetailAlt.toFixed(2));
    setPackActive(!packActive);
    setMeterActive(false);
    console.log(currentPrice);
    console.log(currentPriceGold);
  }

  const onClickMeter = () => {
    setCurrentPrice(product.priceGold);
    setCurrentPriceGold(product.priceRetail);
    setMeterActive(!meterActive);
    setPackActive(false);
    console.log(currentPrice);
    console.log(currentPriceGold);
  }

  const insertBeforeLastOccurrence = (strToSearch, strToFind, strToInsert) => {
    let n = strToSearch.lastIndexOf(strToFind);
    if (n < 0) return strToSearch;
    return strToSearch.substring(0,n) + strToInsert + strToSearch.substring(n);
  }

  const handleClickMore = () => {
    setCurrentQuantity(prevCount => prevCount + 1);
  };

  const handleClickLess = () => {
    if (currentQuantity > 0) {
      setCurrentQuantity(prevCount => prevCount - 1);
    }
  }

  const handleOnChange = (e) => {
    setCurrentQuantity(+(e.target.value))
  };
  return (
    <li className="products-list__item">
      <div className="products-list__item-wrapper">
        <section className="products-list__item-main-info">
          <div className="products-list__item-img-wrapper">
            <img className="products-list__item-img" src={insertBeforeLastOccurrence(product.primaryImageUrl, '.jpg', '_220x220_1')} alt="product image" />
          </div>
          <div className="products-list__item-product-info">
            <div className="products-list__item-product-identity">
              <div className="products-list__item-product-code">
                <span>Код: {product.code.replace(/^0+/, '')}</span>
                <span className="products-list__item-product-status">Наличие</span>
              </div>
              <a className="products-list__item-product-title" href="#product">{product.title}</a>
            </div>
            <div>
              <span className="products-list__item-product-needs">Могут понадобиться: {' '}</span>{
              product.assocProducts.split("\n")
                .map((tag, idx) => (
                  <a key={idx} href="#" className="products-list__item-product-needs--link">
                    {tag}
                  </a>
                ))}
            </div>
          </div>
        </section>
        <section className="products-list__price-info">
          <div className="products-list__price-card">
            <span className="products-list__price-card-text">По карте клуба</span>
            <span className="products-list__price-card-gold">{currentPriceGold} &#8381;</span>
          </div>
          <span className="products-list__price-card-default">{currentPrice} &#8381;</span>
          <p className="products-list__price-binding">Можно купить за {currentPriceGold - 34.3} балла</p>
          <div>
            <span className={meterActive ? 'products-list__item-measure products-list__item-measure-active' : 'products-list__item-measure'} onClick={onClickMeter}>За {product.unitAlt}</span>
            <span className={packActive ? 'products-list__item-measure products-list__item-measure-active' : 'products-list__item-measure'} onClick={onClickPack}>За {product.unitFull.replace('ка', 'ку')}</span>
          </div>
          <div className="products-list__price-pack-info-wrapper">
            <div className="products-list__price-pack-info">
              <span className="products-list__price-pack-info--icon"></span>
              <span className="products-list__price-pack-info--text">Продаётся упаковками: 1 упак. = {(product.unitRatio / product.unitRatioAlt).toFixed(2)} {product.unitAlt}</span>
            </div>
          </div>

          <div className="products-list__price-numbers-container">
            <div className="products-list__price-numbers-wrapper">
              <div className="products-list__price-numbers-input-wrapper">
                <input className="products-list__price-numbers-input" type="number" readOnly value={currentQuantity} onChange={handleOnChange} />
                <div className="products-list__price-numbers-arrows">
                <span onClick={handleClickMore}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33266 4.07594C8.6572 4.05948 8.98004 4.15667 9.24182 4.36727L9.35008 4.46446L14.5355 9.64991C15.0562 10.1706 15.0562 11.0148 14.5355 11.5355C14.0148 12.0562 13.1706 12.0562 12.6499 11.5355L8.33261 7.21894L4.01675 11.5355C3.49605 12.0562 2.65183 12.0562 2.13113 11.5355C1.61043 11.0148 1.61043 10.1706 2.13113 9.64991L7.31658 4.46446C7.59557 4.18547 7.96744 4.05597 8.33266 4.07594Z" fill="#12171B"/>
                </svg>
              </span>
                  <span onClick={handleClickLess}>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.90849 5.36556L4.01675 5.46276L8.33261 9.77823L12.6499 5.46276C13.1706 4.94206 14.0148 4.94206 14.5355 5.46276C15.0215 5.94874 15.0539 6.71655 14.6327 7.24011L14.5355 7.34837L9.35008 12.5338C9.07085 12.8131 8.69857 12.9426 8.33304 12.9223C7.96744 12.9423 7.59557 12.8128 7.31658 12.5338L2.13113 7.34837C1.61043 6.82767 1.61043 5.98345 2.13113 5.46276C2.61712 4.97677 3.38493 4.94437 3.90849 5.36556Z" fill="#12171B"/>
                </svg>
              </span>
                </div>
              </div>
            </div>
            <div className="products-list__price-numbers-cart">
              <span data-product-id={product.productId}>
                В корзину
              </span>
            </div>
          </div>
        </section>
      </div>
    </li>
  )
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductItem;
