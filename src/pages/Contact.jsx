import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { isEmail } from "../Helpers/RegexMatcher";
import HomeLayout from "../layout/HomeLayout";

const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.name || !userInput.email || !userInput.message) {
      toast.error("All fields are require");
      return;
    }
    if (!isEmail(userInput.email)) {
      toast.error("Invalid email");
    }
    try {
      const response = axiosInstance.post("/contact", userInput);
      toast.promise(response, {
        loading: "Submitting your message",
        success: "Form submitted successfully",
        error: "Failed to submit the form",
      });
      const contactResponse = await response;
      if (contactResponse?.data?.success) {
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("operation field....");
    }
  };
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          onSubmit={onFormSubmit}
          noValidate
          className="flex flex-col item-center justify-center gap-2 p-5 rounded-m text-white shadow-[0_0_10px_black] w-[22rem]"
        >
          <h1 className="text-3xl font-semibold">Contact Form</h1>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="name" className="text-xl font-semibold">
              Name
            </label>
            <input
              type="text"
              className="bg-transparent border px-2 py-1 rounded-sm"
              placeholder="Enter your name"
              name="name"
              id="name"
              onChange={handleInputChange}
              value={userInput.name}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="email" className="text-xl font-semibold">
              Email
            </label>
            <input
              type="email"
              className="bg-transparent border px-2 py-1 rounded-sm"
              placeholder="Enter your email"
              name="email"
              id="email"
              onChange={handleInputChange}
              value={userInput.email}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="message" className="text-xl font-semibold">
              Message
            </label>
            <textarea
              className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
              name="message"
              id="message"
              placeholder="Enter your text"
              onChange={handleInputChange}
              value={userInput.message}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-bold text-xl cursor-pinter"
          >
            Submit
          </button>
        </form>
      </div>
    </HomeLayout>
  );
};

export default Contact;
