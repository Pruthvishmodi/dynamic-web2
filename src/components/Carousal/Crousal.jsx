"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

// export default function Carousal() {
//   return (
//     <Carousel
//       className="rounded-xl"
//       navigation={({ setActiveIndex, activeIndex, length }) => (
//         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//           {new Array(length).fill("").map((_, i) => (
//             <span
//               key={i}
//               className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                 activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
//               }`}
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>
//       )}
//     >
//       <Image
//         src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//         alt="image 1"
//         className="object-cover"
//         height={"500"}
//         width={"500"}
//       />
//       <Image
//         src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//         alt="image 2"
//         className="object-cover"
//         height={"500"}
//         width={"500"}
//       />
//       <Image
//         src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//         alt="image 3"
//         className="object-cover"
//         height={"500"}
//         width={"500"}
//       />
//     </Carousel>
//   );
// }
import React, { useState, useEffect } from "react";

const Carousal = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== 6) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(6);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <div className="relative w-full overflow-hidden h-[500px]">
      <div
        className="flex w-full h-full ease-in-out"
        style={{ transform: `translateX(${-100 * (slideIndex - 1)}%)` }}
      >
        <Image
          src="https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          height={"500"}
          width={"500"}
          alt="Slide 1"
        />
        <Image
          src="https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          height={"500"}
          width={"500"}
          alt="Slide 2"
        />
        <Image
          src="https://images.unsplash.com/photo-1682685797365-41f45b562c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8NTB8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          height={"500"}
          width={"500"}
          alt="Slide 3"
        />
        <Image
          src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          height={"500"}
          width={"500"}
          alt="Slide 4"
        />
        <Image
          src="https://images.unsplash.com/photo-1682685797736-dabb341dc7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8NzF8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          height={"500"}
          width={"500"}
          alt="Slide 5"
        />
        <Image
          src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          height={"500"}
          width={"500"}
          alt="Slide 6"
        />
      </div>
      <button
        className="left-0 absolute top-12 translateY(-50%) text-[30px] bg-transparent rounded-none cursor-pointer"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="right-0 absolute top-12 translateY(-50%) text-[30px] bg-transparent rounded-none cursor-pointer"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousal;
