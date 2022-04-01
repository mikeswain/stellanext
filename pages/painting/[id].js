import { useRouter } from "next/router";

import { attributes, react as Paintings } from "../../content/paintings.md";

function Painting({ cool, name }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>{<Paintings />}</h1>
      {id} {name} {cool && "Cool"}
    </div>
  );
}

export default Painting;

export async function getStaticPaths() {
  return {
    paths: attributes.paintings.map((k, i) => ({ params: { id: `${i}` } })),
    fallback: true // false or 'blocking'
  };
}

// This also gets called at build time
export async function getStaticProps({ params: { id } }) {
  const index = id && new Number(id);
  return {
    props: index < attributes.paintings.length ? attributes.paintings[index] : {} //attributes.paintings[new Number(id)]
  };
}
