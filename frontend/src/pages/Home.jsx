import { Button } from "@/components/ui/button";

import Login from "@/components/form/login/login";

const Home = () => {
  return (
    <div className="flex-grow flex-col flex items-center gap-5">
      <h1 className="text-3xl font-bold">
        Welcome to START Fellowship Management System
      </h1>
      <div className="flex flex-col justify-center items-center gap-5">
        <p>
          Are you a startup looking for mentoring, coaching and seeking a
          opportunity to live in switzerland and grow your brand?
        </p>
        <Button
          variant="outline"
          onClick={() => {
            location.href = "/startup/create";
          }}
        >
          Apply now!
        </Button>
      </div>
    </div>
  );
};

export default Home;
