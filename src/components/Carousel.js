function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div className="carousel-inner">
                <div className="newLot">New Lot</div>
                <div className="carousel-item active">
                    <div className="carousel-item__card">
                        <img src="/food.png" alt="Crystal Agate Phone Grip" />
                        <hr />
                        <span>CRYSTAL AGATE PHONE GRIP <strong>- 18.99$</strong></span>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-item__card">
                        <img src="/food.png" alt="Crystal Agate Phone Grip" />
                        <hr />
                        <span>CRYSTAL AGATE PHONE GRIP <strong>- 18.99$</strong></span>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-item__card">
                        <img src="/food.png" alt="Crystal Agate Phone Grip" />
                        <hr />
                        <span>CRYSTAL AGATE PHONE GRIP <strong>- 18.99$</strong></span>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-item__card">
                        <img src="/food.png" alt="Crystal Agate Phone Grip" />
                        <hr />
                        <span>CRYSTAL AGATE PHONE GRIP <strong>- 18.99$</strong></span>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-item__card">
                        <img src="/food.png" alt="Crystal Agate Phone Grip" />
                        <hr />
                        <span>CRYSTAL AGATE PHONE GRIP <strong>- 18.99$</strong></span>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-item__card">
                        <img src="/food.png" alt="Crystal Agate Phone Grip" />
                        <hr />
                        <span>CRYSTAL AGATE PHONE GRIP <strong>- 18.99$</strong></span>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-item__card">
                        <img src="/food.png" alt="Crystal Agate Phone Grip" />
                        <hr />
                        <span>CRYSTAL AGATE PHONE GRIP <strong>- 18.99$</strong></span>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel