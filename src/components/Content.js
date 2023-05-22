import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Content = () => {
  return (
    <div>
      <section className="history relative" id="history">
        <div className="container mx-auto">
          <h2 className="text-9xl text-grey-1 pt-20 p-6 md:p-0">
            01.
            <sup className="text-2xl">HISTORY</sup>
          </h2>
          <p className="w-10/12 m-0 ml-4 md:m-0 md:ml-16 p-2 md:w-4/6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
        <div className="bg-blue-2 p-5 opacity-75 static xl:absolute xl:bottom-0 xl:left-0 xl:right-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./images/slider_1.jpg" alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="./images/slider_2.jpg" alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/slider_1.jpg" alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="./images/slider_2.jpg" alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/slider_1.jpg" alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="./images/slider_2.jpg" alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/slider_1.jpg" alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="./images/slider_2.jpg" alt="slider" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section>
        <div class="container mx-auto flex flex-col p-6 md:p-0 md:flex-row md:items-center py-4">
          <h2 class="text-9xl text-grey-2 pr-5" id="team">
            02.
            <sup class="text-2xl">
              CLIMB
            </sup>
          </h2>
          <p class="w-full md:w-6/12">
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Content;
