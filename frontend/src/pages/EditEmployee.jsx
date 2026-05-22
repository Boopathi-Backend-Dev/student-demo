import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import EmployeeForm from "../components/EmployeeForm";

import {
    getEmployee,
    updateEmployee
} from "../api/employeeApi";


export default function EditEmployee() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        salary: "",
        address: "",
    });


    const fetchEmployee = async () => {

        try {

            const response = await getEmployee(id);

            setFormData(response.data);

        } catch (error) {

            console.log(error);

        }
    };


    useEffect(() => {
        fetchEmployee();
    }, []);


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateEmployee(id, formData);

            alert("Employee Updated Successfully");

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
                buttonText="Update Employee"
            />

        </div>
    );
}