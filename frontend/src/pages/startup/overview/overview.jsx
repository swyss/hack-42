import React from "react";
import StartupDetails from "@/components/startupDisplay/startupDetails";
import { useSearchParams } from "react-router-dom";
import { data, getBatchById } from "@/lib/mockdata";

export default function Overview() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const startupDetails = getBatchById(id);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container">
        <div className="flex justify-center items-center">
          <StartupDetails props={startupDetails} />
        </div>
      </div>
    </div>
  );
}
