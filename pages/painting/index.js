import { useRouter } from "next/router";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import UploadcareImage from "@uploadcare/nextjs-loader";
import { readdir } from "fs/promises";
import { useEffect } from "react";

export default function Paintings({ paintings: paintingSlugs }) {
  const router = useRouter();
  const { category } = router.query;
  const [paintings, setPaintings] = useState();
  useEffect(() => {
    (async () => {
      const allPaintings = (await Promise.all(paintingSlugs.map((slug) => import(`/content/paintings/${slug}.md`)))).map(
        ({ attributes }) => attributes
      );
      setPaintings(
        !category ? allPaintings : allPaintings.filter(({ categories }) => !!(categories || []).find((slug) => slug === category))
      );
    })();
  }, [category, paintingSlugs]);

  return (
    paintings && (
      <Carousel showThumbs={false} centerMode>
        {paintings.map(({ image, title, price, size, medium, categories }, index) => (
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
