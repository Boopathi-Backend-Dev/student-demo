import axiosInstance from "./axiosInstance";


// GET ALL
export const getEmployees = async () => {

    return await axiosInstance.get("/employees/");

};


// GET SINGLE
export const getEmployee = async (id) => {

    return await axiosInstance.get(`/employees/${id}/`);

};


// CREATE
export const createEmployee = async (data) => {

    return await axiosInstance.post(
        "/employees/",
        data
    );

};


// UPDATE
export const updateEmployee = async (id, data) => {

    return await axiosInstance.put(
        `/employees/${id}/`,
        data
    );

};


// DELETE
export const deleteEmployee = async (id) => {

    return await axiosInstance.delete(
        `/employees/${id}/`
    );

};
