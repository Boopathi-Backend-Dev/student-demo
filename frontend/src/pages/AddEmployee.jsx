import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeForm from "../components/EmployeeForm";

import { createEmployee } from "../api/employeeApi";


export default function AddEmployee() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        salary: "",
        address: "",
    });


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createEmployee(formData);

            alert("Employee Added Successfully");

            navigate("/");

        } catch (error) {

            console.log(error);

        }
    };


    return (
        <div className="max-w-3xl mx-auto mt-10">

            <EmployeeForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                buttonText="Add Employee"
            />

        </div>
    );
}