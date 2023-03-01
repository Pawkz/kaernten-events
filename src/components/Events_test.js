// import React, { useEffect, useState } from "react";

// export default function Events() {
//   const [user, setUser] = useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = () => {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUser(data));
//   };
//   return (
//     <div>
//       {" "}
//       <h1>User List</h1>
//       <ul>
//         {user &&
//           user.length > 0 &&
//           user.map((userObj, index) => (
//             <li key={userObj.id}>{userObj.name}</li>
//           ))}
//       </ul>
//     </div>
//   );
// }
