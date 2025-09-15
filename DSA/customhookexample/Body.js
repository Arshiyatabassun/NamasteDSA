
import useOnlineStatus from "../src/useOnlineStatus";
const Body = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>"No internet plz check your internt connection"</h1>;

  return <></>;
};

export default Body;