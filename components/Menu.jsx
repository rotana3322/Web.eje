import React from 'react'

export default function Menu() {
  return (
    <>
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
        Coffee<small>Blend</small>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a href="menu.html" className="nav-link">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="services.html" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="blog.html" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="about.html" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="room.html"
              id="dropdown04"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="shop.html">
                Shop
              </a>
              <a className="dropdown-item" href="product-single.html">
                Single Product
              </a>
              <a className="dropdown-item" href="room.html">
                Cart
              </a>
              <a className="dropdown-item" href="checkout.html">
                Checkout
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item cart">
            <a href="cart.html" className="nav-link">
              <span className="icon icon-shopping_cart" />
              <span className="bag d-flex justify-content-center align-items-center">
                <small>1</small>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <section className="home-slider owl-carousel">
    <div
      className="slider-item"
      style={{ backgroundImage: "url(images/bg_3.jpg)" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay" />
      <div className="container">
        <div className="row slider-text justify-content-center align-items-center">
          <div className="col-md-7 col-sm-12 text-center ftco-animate">
            <h1 className="mb-3 mt-5 bread">Our Menu</h1>
            <p className="breadcrumbs">
              <span className="mr-2">
                <a href="index.html">Home</a>
              </span>{" "}
              <span>Menu</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-intro">
    <div className="container-wrap">
      <div className="wrap d-md-flex align-items-xl-end">
        <div className="info">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex ftco-animate">
              <div className="icon">
                <span className="icon-phone" />
              </div>
              <div className="text">
                <h3>000 (123) 456 7890</h3>
                <p>
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="icon">
                <span className="icon-my_location" />
              </div>
              <div className="text">
                <h3>198 West 21th Street</h3>
                <p>
                  {" "}
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="icon">
                <span className="icon-clock-o" />
              </div>
              <div className="text">
                <h3>Open Monday-Friday</h3>
                <p>8:00am - 9:00pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="book p-4">
          <h3>Book a Table</h3>
          <form action="#" className="appointment-form">
            <div className="d-md-flex">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group ml-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="d-md-flex">
              <div className="form-group">
                <div className="input-wrap">
                  <div className="icon">
                    <span className="ion-md-calendar" />
                  </div>
                  <input
                    type="text"
                    className="form-control appointment_date"
                    placeholder="Date"
                  />
                </div>
              </div>
              <div className="form-group ml-md-4">
                <div className="input-wrap">
                  <div className="icon">
                    <span className="ion-ios-clock" />
                  </div>
                  <input
                    type="text"
                    className="form-control appointment_time"
                    placeholder="Time"
                  />
                </div>
              </div>
              <div className="form-group ml-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="d-md-flex">
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={2}
                  className="form-control"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="form-group ml-md-4">
                <input
                  type="submit"
                  defaultValue="Appointment"
                  className="btn btn-white py-3 px-4"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
