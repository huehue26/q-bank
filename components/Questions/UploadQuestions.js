import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function UploadQuestions() {
  const [questionHeading, setQuestionHeading] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [subject, setSubject] = useState("english");
  const [explanation, setExplanation] = useState("");
  const { currentUser } = useAuth();
  const addQuestionHandler = async () => {
    if (
      !(
        questionHeading &&
        option1 &&
        option2 &&
        option3 &&
        option4 &&
        answer &&
        explanation &&
        subject_name
      )
    )
      return;
    const response = await axios.post("/api/pushQuestion", {
      title: questionHeading,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      answer: answer,
      author: currentUser._delegate.displayName,
      author_email: currentUser._delegate.email,
      explanation: explanation,
      subject_name: subject,
    });
    const { questionId } = response.data;
    console.log(questionId);
    await axios.post("/api/addQuestionToUserProfile", {
      user: currentUser._delegate.email,
      questionId: questionId,
    });
  };
  const subjectChangeHandler = (e) => {
    switch (e) {
      case "English":
        setSubject("english");
        break;
      case "Hindi":
        setSubject("hindi");
        break;
      case "Maths":
        setSubject("maths");
        break;
      case "Science":
        setSubject("science");
        break;
      case "Social Science":
        setSubject("social_science");
        break;
    }
  };
  return (
    <div className="m-5 w-4/5 mx-auto">
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="title"
          className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          onChange={(e) => setQuestionHeading(e.target.value)}
          placeholder=" "
          required
        />
        <label
          htmlFor="title"
          className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Question Title
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        Subject Name
        <div>
          <select
            placeholder=" "
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-gray-800 dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none hover:bg-teal-400 focus:ring-0 focus:border-teal-600 peer"
            onClick={(e) => subjectChangeHandler(e.target.value)}
          >
            <option className="hover:bg-teal-400">English</option>
            <option className="hover:bg-teal-400">Maths</option>
            <option className="hover:bg-teal-400">Science</option>
            <option className="hover:bg-teal-400">Social Science</option>
            <option className="hover:bg-teal-400">Hindi</option>
          </select>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="opt1"
            placeholder=" "
            id="opt1"
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            required
          />
          <label
            htmlFor="opt1"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            onChange={(e) => setOption1(e.target.value)}
          >
            Option-1
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="opt2"
            id="opt2"
            placeholder=" "
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            onChange={(e) => setOption2(e.target.value)}
            required
          />
          <label
            htmlFor="opt2"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Option-2
          </label>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="opt3"
            id="opt3"
            placeholder=" "
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            onChange={(e) => setOption3(e.target.value)}
            required
          />
          <label
            htmlFor="opt3"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Option-3
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="opt4"
            id="opt4"
            placeholder=" "
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            onChange={(e) => setOption4(e.target.value)}
            required
          />
          <label
            htmlFor="opt4"
            className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Option-4
          </label>
        </div>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="ans"
          id="ans"
          placeholder=" "
          className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <label
          htmlFor="ans"
          className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Answer
        </label>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="explanation"
          id="explanation"
          placeholder=" "
          className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark: dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
          onChange={(e) => setExplanation(e.target.value)}
          required
        />
        <label
          htmlFor="explanation"
          className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Explanation
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <button
          type="submit"
          className=" text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg  w-full px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          onClick={addQuestionHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default UploadQuestions;
