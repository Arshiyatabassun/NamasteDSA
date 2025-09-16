
import { useState, useEffect } from "react";

const withDataFetching = (url) => (WrappedComponent) => {
  return function DataFetchingComponent(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, [url]);

    // Handle loading and error states
    if (loading) return <h3>⏳ Loading...</h3>;
    if (error) return <h3>❌ Error: {error}</h3>;

    // Pass data as prop to WrappedComponent
    return <WrappedComponent data={data} {...props} />;
  };
};

// A simple component that displays users
const UserList = ({ data }) => {
  return (
    <div>
      <h2>👥 Users</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Wrap UserList with HOC and provide API
const UserListWithData = withDataFetching(
  "https://jsonplaceholder.typicode.com/users"
)(UserList);

export default function App() {
  return (
    <div>
      <UserListWithData />
    </div>
  );
}
