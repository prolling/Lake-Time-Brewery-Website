import React, { useState } from "react";

const Donations = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    organizationName: "",
    requestedItem: "",
    details: "",
    dateNeeded: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const emailTo = "laketimebrewery@gmail.com";
    const subject = "Donation Request";
    const body = `Full Name: ${form.fullName} \n Email: ${form.email} \n Phone Number: ${form.phoneNumber} \n Organization Name: ${form.organizationName} \n Requested Item: ${form.requestedItem}\n Provide any details of request: ${form.details}\n Date Needed: ${form.dateNeeded}`;

    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setForm({
      fullName: "",
      email: "",
      phoneNumber: "",
      organizationName: "",
      requestedItem: "",
      details: "",
      dateNeeded: "",
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-500 py-6">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Donation Request Form
        </h1>
        <p className="text-center py-1">
          We review donation requests on a monthly basis. Although we'd like to
          be able to accommodate all requests, it just isn't always feasibly
          possible. To be considered for a donation, please complete and submit
          the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            pattern="^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="organizationName"
            value={form.organizationName}
            onChange={handleChange}
            placeholder="Organization Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="requestedItem"
            value={form.requestedItem}
            onChange={handleChange}
            placeholder="Requested Item"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            placeholder="Provide any details of request (reason, how many people in attendance, beneficiary of event, etc.)"
            className="w-full p-2 h-32 border border-gray-300 rounded"
            required
          />
          <input
            type="date"
            name="dateNeeded"
            value={form.dateNeeded}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <div className="text-center">
            <button
              type="submit"
              className="group text-white w-fit px-6 py-3 my-2 text-center rounded-md bg-secondary hover:cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donations;
