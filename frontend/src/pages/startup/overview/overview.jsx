import React from "react";
import StartupDetails from "@/components/startupDisplay/startupDetails";

export default function Overview() {
  let startupDetails = {
    name: "Test Startup",
    logo: "https://picsum.photos/id/237/200/300",
    industry: "Testing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    founderDetails: {
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      birthday: "01.01.1999",
      phoneNumber: "076 888 88 88",
      city: "Basel",
      country: "Switzerland",
    },
  };

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
