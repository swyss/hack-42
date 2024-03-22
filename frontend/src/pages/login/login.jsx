import React from "react";
import Login from "@/components/form/login/login";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Login />
        </div>
      </div>
    </div>
  );
}
