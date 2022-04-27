import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
    console.log(users.length);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const user = {name, email}

    // post data to server

    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {
      
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then((res) => res.json())
    .then(data => {
      console.log(data);
    })
  };
  return (
    <div className="App">
      <h1>my own data : {users.length}</h1>
      <form onSubmit={handleClick}>
        <input type="text" name="name" />
        <input type="email" name="email" id="" />
        <input type="submit" value="submit" />
      </form>

      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
