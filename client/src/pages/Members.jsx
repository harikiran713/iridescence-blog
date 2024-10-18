import axios from 'axios';
import { useEffect, useState } from 'react';

const Members = () => {
    const [people, setPeople] = useState([]); 
    const years = ["4th year", "3rd year", "2nd year", "1st year"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/members/view");
                setPeople(response.data);
                console.log(response.data);

                setTimeout(() => {
                    console.log("This message will appear after 2 seconds.");
                }, 2000); 
                
            } catch (error) {
                console.error("Error fetching members:", error); 
            }
        };
        fetchData();
    }, []); 

    return (
        <div>
            <div>
                <h1>Faculty Advisors</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-12 my-24 gap-8">
                {years.map((year) => {
                    console.log(year)
                    const yearMembers = people.filter((member) => member.year === year);
                    return yearMembers.map((member, index) => (
                        <div key={index} className="max-w-xs mt-20 p-5 rounded-lg border border-gray-300 bg-gray-200 shadow-2xl hover:shadow-xl transition-transform transform hover:scale-105 hover:border-gray-400 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center">
                                <img 
                                    src={member.photoUrl
                                    } 
                                    alt={member.name} 
                                    className="h-[250px] w-[250px] object-cover rounded-2xl mb-4" 
                                />
                              
                                <div className="font-bold text-lg mb-2">{member.name}</div>
                                <ul className="text-center space-y-1">
                                    <li className="text-sm text-gray-500">{member.year}</li>
                                    <li className="text-sm text-gray-500">{member.department}</li>
                                    <li className="text-sm text-gray-500">{member.role}</li>
                                </ul>
                            </div>
                        </div>
                    ));
                })}
            </div>
        </div>
    );
};

export default Members;

