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

  return <div>{paintings && <ImageGallery items={paintings.map(({ image }) => ({ original: image }))} />}</div>;
}

export async function getStaticProps() {
  const dir = await readdir("./content/paintings");
  return {
    props: { paintings: dir.map((file) => file.replace(/\.md$/, "")) }
  };
}
