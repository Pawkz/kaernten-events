import React, { useEffect, useState } from "react";

export default function Events() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://data.carinthia.com/api/v4/endpoints/557ea81f-6d65-6476-9e01-d196112514d2?include=image&page%5Bnumber%5D=2&page%5Bsize%5D=25&token=9962098a5f6c6ae8d16ad5aba95afee0"
    );
    const data = await response.json();
    // console.log("res:", response);
    // console.log("data:", data);
    // console.log("data2:", data.links);
    // console.log("data3:", data["@context"]);
    // console.log("data4:", data["@graph"]);
    setUser(data["@graph"]);
  };

  return (
    <div>
      <h1>Events</h1>
      {/* console.log("user", user); */}
      <ul>
        {user.length > 0 &&
          user.map((userObj) => <li key={userObj["@id"]}>{userObj.name}</li>)}
      </ul>
    </div>
  );
}
