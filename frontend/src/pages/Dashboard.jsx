import { useEffect, useState } from "react";

import axios from "axios";


export default function Dashboard() {

    const [employees, setEmployees] = useState([]);

    const [totalEmployees, setTotalEmployees] = useState(0);


    const fetchDashboardData = async () => {

        try {

            const response = await axios.get(
                "http://127.0.0.1:8000/dashboard/all-employees/"
            );

            setEmployees(response.data.employees);

            setTotalEmployees(response.data.total_employees);

        } catch (error) {

            console.log(error);

        }
    };


    useEffect(() => {
        fetchDashboardData();
    }, []);


    return (

        <div className="p-5">

            <div className="bg-white shadow-md p-5 rounded mb-5">

                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>

                <p className="mt-3 text-xl">
                    Total Employees : {totalEmployees}
                </p>

            </div>


            <div className="grid md:grid-cols-3 gap-5">

                {
                    employees.map((employee) => (

                        <div
                            key={employee.id}
                            className="bg-white p-5 shadow-md rounded"
                        >

                            <h2 className="text-2xl font-bold">
                                {employee.name}
                            </h2>

                            <p className="mt-2">
                                {employee.email}
                            </p>

                            <p>
                                {employee.phone}
                            </p>

                            <p>
                                {employee.department}
                            </p>

                            <p>
                                ₹{employee.salary}
                            </p>

                            <p>
                                {employee.address}
                            </p>

                        </div>
                    ))
                }

            </div>

        </div>

    );
}