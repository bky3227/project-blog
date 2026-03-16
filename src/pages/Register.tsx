import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import { CircleCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="mx-4 mt-10 lg:mt-[60px]">
        <div className="flex flex-col items-center justify-center gap-6 px-4 py-10 max-w-[798px] bg-base-brown-200 rounded-2xl mx-auto lg:px-[120px] lg:py-[60px] lg:gap-10">

          <CircleCheck
            size={100}
            className="text-[#12B279]"
            strokeWidth={1.5}
          />

          <h2 className="text-headline-2 leading-12 text-base-brown-600 text-center">
            Registration Success
          </h2>

          <Button
            variant="outline"
            className="mt-2"
            onClick={() => navigate("/")}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}

export default Register;
