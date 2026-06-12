import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {" "}
      <h1 className="mb-6 text-amber-300 font-bold">{data.name}</h1>
      <img
        className="mx-auto"
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />
      <div className="p-5 text-green-300 font-semibold">Followers: {data.followers}</div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/jaindhruv04");
  return response.json();
};

export default Github;
