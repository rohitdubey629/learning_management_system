import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/course/description", { state: { ...data } })}
      className="text-white w-[22rem] h-[340px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700"
    >
      <div className="overflow-hidden">
        <img
          className="h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale=[1,2] transition-all"
          src={data?.thumbnail?.secure_url}
          alt="course thumbnail"
        />
        <div className="p-3 space-y-1 text-white">
          <h1 className="text-xl text-white font-yellow-500 line-clamp-2">
            {data?.title}
          </h1>
          <p className="line-clamp-2">{data?.description}</p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold">Category : </span>
            {data?.category}
          </p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold">Total Lecture : </span>
            {data?.numberOfLectures}
          </p>
          <p className="font-semibold ">
            <span className="text-yellow-500 font-bold ">Instruction : </span>
            {data?.createdBy}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
