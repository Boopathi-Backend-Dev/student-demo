import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div className="bg-black text-white p-4 flex justify-between">

            <h1 className="text-2xl font-bold">
                Employee CRUD
            </h1>

            <div className="space-x-4">

                <Link to="/">
                    Home
                </Link>

                <Link to="/add">
                    Add Employee
                </Link>

                <Link to="/dashboard">
                    Dashboard
                </Link>

            </div>

        </div>
    );
}