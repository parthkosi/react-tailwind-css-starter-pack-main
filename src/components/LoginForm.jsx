import React, { useState } from "react";
import Navbar from "./Navbar";
import Form from "./Form";

function LoginForm() {
  

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <Form/>
      </div>
    </div>
  );
}
export default LoginForm;
