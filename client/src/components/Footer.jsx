import { Footer } from "flowbite-react";

const Footercm = () => {
    return (
       
            <Footer container className=" flex flex-col border border-t-8 bottom-0  border-gray-500 h-18">
                <div className=" flex  bg-gradient-to-r from-indigo-500 font-semibold h-10 vis-purple-500 to-pink-500 w-32  text-white rounded-md justify-center"><h1 className="my-auto text-xl">Iridescense</h1></div>
                
                <div className="bg-gray-200 w-screen h-screen mt-8">
                    <div className=""><h1>© 2024 Iridescense™. All Rights Reserved.</h1></div>
                    <div className="flex"></div>
                </div>

            </Footer>
     
    );
};

export default Footercm;