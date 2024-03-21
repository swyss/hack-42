import { Button } from "@/components/ui/button";

import PersonalForm from "@/components/form/personalForm/personalForm";
const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Button>Register your Startup!</Button>
      <div className="flex items-center justify-center">
        <PersonalForm />
      </div>
    </div>
  );
};

export default Home;
