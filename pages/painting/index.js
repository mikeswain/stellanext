import { attributes } from "../../content/categories.md";
import { paintings } from "../../content/paintings.md";
import { Slide } from "react-slideshow-image";
export default function Paintings() {
  const router = useRouter();
  const { category } = router.query;
  const slideImages = attributes.paintings.map({ur})
  <div className="slide-container">
    <Slide>
      {slideImages.map((slideImage, index) => (
        <div className="each-slide" key={index}>
          <div style={{ backgroundImage: `url(${slideImage.url})` }}>
            <span>{slideImage.caption}</span>
          </div>
        </div>
      ))}
    </Slide>
  </div>;
}
