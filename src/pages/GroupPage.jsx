import React from "react";
import { Link } from "react-router-dom";

const GroupPage = () => {
  return (
    <div>
      <ul>
        <li className="px-8 py-8">Groups</li>
        <li className="px-8 py-4">Friends</li>
        <li className="px-8 py-8">Activity</li>
      </ul>
      <button className=" px-8 py-4 text-white bg-teal-500 rounded-full shadow-md hover:bg-teal-600 m-5">
        <Link to='/Login'> Back </Link>
      </button>
    </div>
  );
};

export default GroupPage;