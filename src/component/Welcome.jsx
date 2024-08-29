import React from "react";

function Welcome({ Logout }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#f8fafc] p-10 rounded-lg max-w-4xl relative max-h-[90vh] flex flex-col">
        <button
          className="bg-blue-600 m-5 p-2 rounded-[30px] text-white hover:scale-[1.07] block justify-end"
          onClick={Logout}
        >
          Logout
        </button>
        Welcome to SkillShikshya
      </div>
    </div>
  );
}

export default Welcome;
