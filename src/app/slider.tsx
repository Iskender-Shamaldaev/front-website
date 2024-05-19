'use client'
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import {Navigation, Pagination} from 'swiper/modules';
import {useGetSlidersQuery} from "@/services/slider";

export default function Slider() {

  const {data, isLoading} = useGetSlidersQuery();

  return (
    <>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {!isLoading && data?.data.map((image: any) => (
          <SwiperSlide key={image.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${image?.attributes?.swiperImage.data[0].attributes.url}`}
                 alt={image}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
