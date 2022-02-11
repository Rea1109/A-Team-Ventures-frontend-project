import Header from "./component/commons/header/Header.container";
import RequestList from "./component/units/request/RequestList.container";

const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header></Header>
      <RequestList></RequestList>
    </div>
  );
};

export default App;
