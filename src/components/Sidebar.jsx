import React, { Component } from "react";

function Sidebar() {
  return (
    <div class="bg-slate-800 w-1/5 h-screen">
      <div class="m-10">
        {/* <img src="user.png" alt="dp" class="w-13" /> */}
        <p class="text-4xl font-bold  text-center text-slate-50">JOHN ALEX</p>
        <p class="text-xl text-center text-slate-50">Designation</p>
      </div>
      {/* <hr class="solid " /> */}

      <ul class="">
        <div class="text-lg text-slate-50 hover:bg-slate-600 hover:cursor-pointer h-10 flex  pl-3 pt-2">
          <img src="dashboard.png" alt="" class="w-10" />
          <p class="ml-5">DASHBOARD</p>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
