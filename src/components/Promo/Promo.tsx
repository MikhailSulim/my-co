import CircleText from '../CircleText/CircleText';
import './Promo.scss';

function Promo() {
  return (
    <section className="promo">
      <p className="promo__logo">MY-CO Architecture bureau</p>
      <div className="promo__text">
        <h1 className="promo__title">Studio exchange.</h1>
        <p className="promo__subtitle">
          Swapping our design studios <br /> for 2 weeks for some work and some
          fun.
        </p>
      </div>

      <div className="image">
        <div className="image__triangle"></div>
        {/* <p className='image__text'>watch video * watch video * watch video *</p> */}
        <CircleText text="Architecture Bureau MY-CO "/>
      </div>
    </section>
  );
}

export default Promo;
