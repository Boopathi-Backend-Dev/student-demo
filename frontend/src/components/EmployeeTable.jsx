import { Link } from "react-router-dom";

export default function EmployeeTable({ employees, handleDelete }) {

    return (
        <div className="overflow-auto">

            <table className="w-full bg-white shadow-md">

                <thead className="bg-gray-200">

                    <tr>
                        <th className="p-3">Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        employees.map((employee) => (

                            <tr
                                key={employee.id}
                                className="border-b text-center"
                            >

                                <td className="p-3">
                                    {employee.name}
                                </td>

                                <td>
                                    {employee.email}
                                </td>

                                <td>
                                    {employee.phone}
                                </td>

                                <td>
                                    {employee.department}
                                </td>

                                <td>
                                    ₹{employee.salary}
                                </td>

                                <td className="space-x-2">

                                    <Link
                                        to={`/edit/${employee.id}`}
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}