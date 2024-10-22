
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashProfile from "../components/DashProfile";
import DashSiderbar from "../components/DashSidebar"
import AddEvents from "./AddEvents";
import AddMember from "./AddMember";

const Dashboard = () => {
    const location =useLocation()
    const [tab,setTab]=useState('');
    useEffect(()=>
    {
        const urlParams=new URLSearchParams(location.search);
        const tabFromUrl=urlParams.get('tab');
        if(tabFromUrl)
        {
            setTab(tabFromUrl);
        }

    },[location.search])
    return (
        <div className="min-h-screen flex flex-col md:flex-row ">
           <div  className="md:w-52">
          <DashSiderbar/>
           </div>
          <div className="-mt-44 w-full ">
            {tab==='profile' && <DashProfile />}
           {tab==='addevent' && <AddEvents/>}
           {tab==='addmember' && <AddMember/>}</div></div>
            
           
          
          
      
    );
};
export default Dashboard;

