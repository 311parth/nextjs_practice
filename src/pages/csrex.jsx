import { useState, useEffect, useRef } from "react";

export default function MyPage({ msg }) {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    // Fetch data from an API endpoint
    fetch("https://api.sampleapis.com/beers/ale")
      .then((response) => response.json())
      .then((data) => { console.log(data); setData(data); });
    // Set focus on the input element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>My Page</h1>
      <input type="text" ref={inputRef} />
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      msg: "This string is added by server before sending it can be api result data as well  ",

    }
  }
}