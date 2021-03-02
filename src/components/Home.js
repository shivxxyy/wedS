import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import home1 from './images/home1.jpg'
import home2 from './images/home2.jpg'
import home3 from './images/home3.jpg'
const Home = () => {
  return (
    <div style={{backgroundColor:'rgb(255, 102, 153)'}}>
    <div style={{backgroundColor:'rgb(255, 102, 153)'}}>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          padding: "1rem",
        }}
      >
        Welcome To wedS!
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "rgb(153, 51, 153)",
          fontWeight: "bold",
          paddingRight: "1rem",
        }}
      >
        Please Choose a Location For Booking
      </p>
      </div>

      <div style={{ backgroundColor: "rgb(255, 102, 153)" }}>
        <Container>
          <Carousel
            style={{
              border: "2px solid rgb(153, 51, 153)",
              borderRadius: "20px",
            }}
          >
            <Carousel.Item interval={1000}>
              <img
                width={10}
                height={700}
                className="d-block w-100"
                src={home1}
                alt="First slide"
                style={{
                  border: "2px solid rgb(153, 51, 153) ",
                  borderRadius: "20px",
                }}
              />
              <Carousel.Caption>
                <h3
                  style={{
                    fontWeight: "bold",
                    color: "rgb(255, 102, 153)",
                    fontStyle: "italic",
                  }}
                >
                  Premium
                </h3>
                <p style={{ color: "black", fontWeight: "bold" }}>
                  The Best Of All And The Most Beautiful One
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                width={10}
                height={700}
                className="d-block w-100"
                src={home2}
                alt="Third slide"
                style={{
                  border: "2px solid rgb(153, 51, 153)  ",
                  borderRadius: "20px",
                }}
              />
              <Carousel.Caption>
                <h3
                  style={{
                    fontWeight: "bold",
                    color: "rgb(255, 102, 153)",
                    fontStyle: "italic",
                  }}
                >
                  Deulex
                </h3>
                <p style={{ color: "black", fontWeight: "bold" }}>
                  Want To Get Married Quietly In The Most Beautiful Way? Try
                  This!{" "}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                width={10}
                height={700}
                className="d-block w-100"
                src={home3}
                alt="Third slide"
                style={{
                  border: "2px solid rgb(153, 51, 153)  ",
                  borderRadius: "20px",
                }}
              />
              <Carousel.Caption>
                <h3
                  style={{
                    fontWeight: "bold",
                    color: "rgb(255, 102, 153)",
                    fontStyle: "italic",
                  }}
                >
                  Common Man's Wedding
                </h3>
                <p style={{ color: "black", fontWeight: "bold" }}>
                  Having A Tight Budget? No Problem. We Are Here For You.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </div>
  );
};

export default Home;
