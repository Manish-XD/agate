import "../styles/foot.css";

function Foot() {
  return (
    <div className="foot__container">
      <img src="hero.png" className="bg2" />
      <img src="hero_part1.png" className="blob" />
      <img src="white_vector2.png" className="bg1" />
      <div className="foot__content">
        <div className="left">
          <h2>BEST PRICE</h2>
          <h1>Agate Phone Grip</h1>
          <div className="price">
            <span className="strikethrough">44.50$</span>
            <span className="actualPrice">19.50$</span>
          </div>
          <p>These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!</p>
          <button className="foot__btn">BUY NOW</button>
        </div>
        <div className="right">
          <img src="foot_image.png" alt="food image"/>
        </div>
      </div>
    </div>
  )
}

export default Foot