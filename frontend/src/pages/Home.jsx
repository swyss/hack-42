import { Button } from "@/components/ui/button";

import PersonalForm from "@/components/form/personalForm/personalForm";
//import AcademiaForm from "@/components/form/academia/academiaForm";

import Login from "@/components/form/login/login";

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Button>Register your Startup!</Button>
      <div className="flex items-center justify-center">
        <Login />
        <PersonalForm />
      </div>
    </div>
  );
};

export default Home;
