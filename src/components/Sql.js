import React from "react";

export const Sql=()=>{

    const [data, setData] = useState([]);
  console.log(data)
  useEffect(() => {
    // Fetch data from the server
    axios.get("http://localhost:3002/getdetails")
      .then((response) => {
        setData(response.data.data); // Assuming the data is in the 'data' property of the response object
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return(
    <div>
        <h1>Name:{}</h1>
    </div>
  )
}