import { Sidebar } from "flowbite-react";
import { HiUser,HiArrowSmRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { PiStackPlus } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ImUserPlus } from "react-icons/im";
import { useEffect, useState } from "react";

const DashSidebar = () => {
    const location=useLocation();
// const [tab,setTab]=useState('');
// useEffect(()=>
// {
//     const urlParams=
// })


    return (
        <Sidebar className="w-full md:w-52">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item active icon={HiUser} label={'User'} labelColor='dark'>
                        Profile
                    </Sidebar.Item>
                  <Link to='?tab=addevent'>  <Sidebar.Item active icon={PiStackPlus}>Add an Event</Sidebar.Item></Link>
                 <Link to='?tab=addmember'><Sidebar.Item  active icon={ImUserPlus}> Add Member</Sidebar.Item></Link> 
                    <Sidebar.Item active icon={HiArrowSmRight} labelColor='dark'>
                        Sign Out
                    </Sidebar.Item>
                   
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};

export default DashSidebar;
