import { useEffect, useState } from "react";

import {
    getEmployees,
    deleteEmployee
} from "../api/employeeApi";

import EmployeeTable from "../components/EmployeeTable";


export default function Home() {

    const [employees, setEmployees] = useState([]);


    const fetchEmployees = async () => {

        try {

            const response = await getEmployees();

            console.log(response.data);

            // IMPORTANT FIX
            setEmployees(
                Array.isArray(response.data)
                    ? response.data
                    : response.data.employees || []
            );

        } catch (error) {

            console.log(error);

        }
    };


    useEffect(() => {
        fetchEmployees();
    }, []);


    const handleDelete = async (id) => {

        try {

            await deleteEmployee(id);

            fetchEmployees();

        } catch (error) {

            console.log(error);

        }
    };


    return (

        <div className="p-5">

            <EmployeeTable
                employees={employees}
                handleDelete={handleDelete}
            />

        </div>

    );
}