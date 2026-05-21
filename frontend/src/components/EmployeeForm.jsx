export default function EmployeeForm({
    formData,
    handleChange,
    handleSubmit,
    buttonText
}) {

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-white p-5 shadow-md space-y-4"
        >

            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3"
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3"
            />

            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3"
            />

            <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border p-3"
            />

            <input
                type="number"
                name="salary"
                placeholder="Salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full border p-3"
            />

            <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border p-3"
            />

            <button className="bg-black text-white px-5 py-2">
                {buttonText}
            </button>

        </form>
    );
}