import { CiCalendarDate} from "react-icons/ci";

import { FaGoogleDrive } from "react-icons/fa";

const people = [
    {
        name: "Harikiar",
        year: "4th year",
        branch: "Computer Science",
        role: "Video Editor",
        photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
        name: "John Doe",
        year: "3rd year",
        branch: "Mathematics",
        role: "Video Editor",
        photo: "https://images.pexels.com/photos/3184426/pexels-photo-3184426.jpeg",
    },
    {
        name: "Jane Smith",
        year: "2nd year",
        branch: "Physics",
        role: "Video Editor",
        photo: "https://images.pexels.com/photos/1567335/pexels-photo-1567335.jpeg",
    },
    {
        name: "Alice Johnson",
        year: "1st year",
        branch: "Biology",
        role: "Video Editor",
        photo: "https://images.pexels.com/photos/4032035/pexels-photo-4032035.jpeg",
    },
    {
        name: "Bob Brown",
        year: "4th year",
        branch: "Engineering",
        role: "Video Editor",
        photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    },
    {
        name: "Charlie Green",
        year: "3rd year",
        branch: "Chemistry",
        role: "Video Editor",
        photo: "https://firebasestorage.googleapis.com/v0/b/iridescence-page.appspot.com/o/photos%2FIMG_8181.JPG?alt=media&token=6e053d4c-fe19-4e38-8089-a2d10e67a857",
    },
    {
        name: "Daisy White",
        year: "2nd year",
        branch: "Philosophy",
        role: "Video Editor",
        photo: "https://images.pexels.com/photos/3998885/pexels-photo-3998885.jpeg",
    },
    {
        name: "Ethan Black",
        year: "1st year",
        branch: "Literature",
        role: "Video Editor",
        photo: "https://images.pexels.com/photos/1864612/pexels-photo-1864612.jpeg",
    },
];

const Events = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-12 my-24 gap-8">
                <div className="max-w-xs mt-20 p-5 rounded-lg border border-gray-300 bg-gray-200 shadow-2xl hover:shadow-xl transition-transform transform hover:scale-105 hover:border-gray-400 hover:bg-gray-100">
                    <div className="flex flex-col items-center space-y-4">
                        <img
                            className="rounded-lg object-cover w-[250px] h-[200px]"
                            src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="NFT"
                        />
                        <h2 className="text-xl font-bold text-gray-800">Kibertopiks</h2>
                        <div className="flex justify-between w-full text-sm">
                            <div className="flex items-center text-gray-600 px-20">
                                <CiCalendarDate />
                                <p>11 days left</p>
                            </div>
                        </div>
                        <hr className="border-gray-300 w-full" />
                        <div className="flex items-center w-full">
                            
                           
                        <button className="bg-blue-500 hover:shadow-2xl transition-transform transform hover:scale-105 hover:bg-blue-600 mx-auto w-[200px] h-[43px] rounded-xl font-bold hover:bg-blue-600 text-white flex justify-center self-center  ">
                       <h1 className="text-xl my-auto">photos</h1>
</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
