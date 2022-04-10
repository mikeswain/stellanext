import { useRouter } from "next/router";
import { useState } from "react";
import { readdir } from "fs/promises";
import { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
    <div>
      {paintings && (
        <ImageGallery
          showIndex
          thumbnailPosition="left"
          lazyLoad
          loading="lazy"
          
          items={paintings.map(({ image, title }) => ({
            original: image,
            thumbnail: `${image}/-/preview/100x100`,
            originalTitle: title,
            thumbnailTitle: title
          }))}
        />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const dir = await readdir("./content/paintings");
  return {
    props: { paintings: dir.map((file) => file.replace(/\.md$/, "")) }
  };
}
