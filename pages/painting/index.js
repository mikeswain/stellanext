import { attributes as catAtt } from "../../content/categories.md";
import { attributes as paintAtt } from "../../content/paintings.md";
import { Slide } from "react-slideshow-image";
import { useRouter } from "next/router";

import "react-slideshow-image/dist/styles.css";
export default function Paintings() {
  const router = useRouter();
  const { category } = router.query;
  const slideImages = paintAtt.paintings.filter(({ categories }) => !category || catAtt.categories.contains(category));
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map(({ image, title, price, size, medium, categories }, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${image})` }}>
              <span>{title}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
