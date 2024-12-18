import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import fetchUserDetails from "./utils/fetchUserDetails";
import { setUserDetails } from "./store/userSlice";
import { useDispatch } from "react-redux";
import { setAllCategory } from "./store/productSlice";
import SummaryApi from "./common/SummaryApi";
import Axios from "./utils/Axios";

function App() {
  const dispatch = useDispatch()
  const fetchUser = async () => {
    const userData = await fetchUserDetails();
    
    dispatch(setUserDetails(userData.data))
  };

  const fetchCategory = async()=>{
    try {
        setLoading(true)
        const response = await Axios({
            ...SummaryApi.getCategory
        })
        const { data : responseData } = response

        if(responseData.success){
          dispatch(setAllCategory(responseData.data))
            // setCategoryData(responseData.data)
        }
    } catch (error) {
        
    }finally{
    }
}

  useEffect(async () => {
    fetchUser()
    fetchCategory()
  },[]);
  return (
    <>
      <Header />
      <main className="min-h-[78vh]">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
