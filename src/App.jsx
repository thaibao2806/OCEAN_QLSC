import { React, useContext, useEffect } from "react";
import "./App.scss";
import { Header } from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { UserContext } from "./Context/UseContext";
import { useDispatch, useSelector } from "react-redux";
import { handleRefresh } from "./redux/actions/userAction";

function App() {

  // const dataUserRedux = useSelector((state) => state.user.account); 
  // console.log("checkkkk", dataUserRedux)

  // const { user, loginContext, loginContextUser } = useContext(UserContext);
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("email")) {
      dispatch(handleRefresh())
    }
  }, []);

  return (
    <div className="app-container">
      <div className="app-header">
        <Header />
      </div>

      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
