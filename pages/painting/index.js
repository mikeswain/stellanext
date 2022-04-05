import { useRouter } from "next/router";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import UploadcareImage from "@uploadcare/nextjs-loader";
import { readdir } from "fs/promises";
import { useEffect } from "react";

export default function Paintings({ paintings: paintingSlugs }) {
  const router = useRouter();
  const [paintings, setPaintings] = useState();
  useEffect(() => {
    (async () => {
      const allPaintings = await Promise.all(paintingSlugs.map((slug) => import(`/content/paintings/${slug}.md`)));
      setPaintings(allPaintings.map(({ attributes }) => attributes));
    })();
  });
  const { category } = router.query;
  const slideImages =
    paintings &&
    (category ? paintings : paintings.filter(({ categories }) => !category || !!categories.find(({ slug }) => slug == category)));
  return (
    slideImages && (
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
    )
  );
}

export async function getStaticProps() {
  const dir = await readdir("./content/paintings");
  return {
    props: { paintings: dir.map((file) => file.replace(/\.md$/, "")) }
  };
}
