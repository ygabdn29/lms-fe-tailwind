function RegisterForm() {
  return (
    <main className="bg-gray-500 bg-[url('/assets/img/register-bg.jpg')] bg-blend-overlay bg-cover font-Inria md:grid md:place-content-center md:w-screen md:h-dvh">
      <div className="rounded-md backdrop-blur-3xl bg-transparent drop-shadow-lg shadow shadow-black border-2 border-black flex flex-col lg:p-10">
        <h3 className="text-center text-slate-50 font-medium md:text-4xl md:mb-5">
          Registration
        </h3>
        <div className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Submit");
            }}
            className="md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-2 md:w-[40rem] "
          >
            <div className="md:flex md:flex-col md:gap-1">
              <label htmlFor="firstName" className="text-slate-50">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="rounded md:py-1 md:px-3"
                required
              />
            </div>

            <div className="md:flex md:flex-col md:gap-1">
              <label htmlFor="lastName" className="text-slate-50">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="rounded md:py-1 md:px-3"
              />
            </div>

            <div className="md:flex md:flex-col md:gap-1">
              <label htmlFor="birthDate" className="text-slate-50">
                Birth Date:
              </label>
              <input
                className="rounded md:py-1 md:px-1 md:px-3"
                type="date"
                id="birthDate"
                name="birthDate"
                required
              />
            </div>

            <div className="md:flex md:flex-col md:gap-1">
              <label htmlFor="gender" className="text-slate-50">
                Gender:{" "}
              </label>
              <select
                className="rounded md:py-1 md:px-3"
                name="gender"
                id="gender"
              >
                <option>Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="md:flex md:flex-col md:gap-1">
              <label htmlFor="address" className="text-slate-50">
                Address:
              </label>
              <input
                className="rounded md:py-1 md:px-3"
                type="text"
                id="address"
                name="address"
                required
              />
            </div>

            <div className="md:flex md:flex-col md:gap-1">
              <label htmlFor="phone" className="text-slate-50">
                Phone:
              </label>
              <input
                className="rounded md:py-1 md:px-3"
                type="text"
                id="phone"
                name="phone"
                required
              />
            </div>

            <div className="md:flex md:flex-col md:gap-1">
              <label htmlFor="username" className="text-slate-50">
                Email
              </label>
              <input
                className="rounded md:py-1 md:px-3"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>

            {/* <div className="d-flex flex-column">
            <label htmlFor="department">Department: </label>
            <select
              className="custom-select"
              name="department"
              id="department"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
            >
              <option value={0}>Select Department:</option>
              {department
                ? department.map((dept, id) => (
                    <option value={dept.id} key={id}>
                      {dept.name}
                    </option>
                  ))
                : ""}
            </select>
          </div> */}

            <div className="md:flex md:flex-col md:gap-1">
              <label htmlFor="password" className="text-slate-50">
                Password:
              </label>
              <input
                className="rounded md:py-1"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>

            <div className="md:flex align-items-center justify-content-between md:mt-5">
              <button
                type="submit"
                className="bg-green-500 md:px-4 md:py-2 rounded text-slate-50 transition-all duration-300 hover:bg-green-600"
              >
                Submit
              </button>
              {/* <Link to="login" className="btn btn-info mt-3">
              Login
            </Link> */}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default RegisterForm;
