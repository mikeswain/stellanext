import { useRouter } from "next/router";
function Painting({cool,name}) {
  const router = useRouter();
  const { id } = router.query;
  return <div>Welcome to painting {id} {name} {cool}</div>;
}

export default Painting;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true // false or 'blocking'
  };
}

// This also gets called at build time
export async function getStaticProps({ params: { id } }) {
  return {
    props: {
      '1': { cool: true, name: "mike" },
      '2': { cool: false, name: "jenny" }
    }[id]
  };
}
