import { attributes as catAtt } from "../../content/categories.md";
import { attributes as paintAtt } from "../../content/paintings.md";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import UploadcareImage from "@uploadcare/nextjs-loader";

export default function Paintings() {
  const router = useRouter();
  const { category } = router.query;
  const slideImages = category
    ? paintAtt.paintings
    : paintAtt.paintings.filter(({ categories }) => !category || !!categories.find(({ slug }) => slug == category));
  return (
    <Carousel showThumbs={false} centerMode>
      {slideImages.map(({ image, title, price, size, medium, categories }, index) => (
        <div className="each-slide" key={index}>
          <p>
            <span>{title}</span>
          </p>
          <UploadcareImage src={image} alt={title} width={"500"} height={"500"} />
        </div>
      ))}
    </Carousel>
  );
}
