import NavBar from "../components/NavBar";
import Input from "../components/Input";
import { createContext, useState, useMemo } from "react";
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export type Inputs = {
  email: string;
  name: string;
  password: string;
};

enum Variant {
  SIGN_UP,
  LOGIN,
}

interface AuthFormContextType {
  register: UseFormRegister<Inputs> | null;
  errors: FieldErrors<Inputs>;
}
export const AuthFormContext = createContext<AuthFormContextType>({
  register: null,
  errors: {},
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();
  const [variant, setVariant] = useState(Variant.LOGIN);
  const [authError, setAuthError] = useState("");
  const { signup, login } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async ({ password, email, name }) => {
    try {
      if (variant === Variant.SIGN_UP) {
        await signup({
          email,
          password,
          username: name,
        });
      } else {
        await login({
          email,
          password,
        });
      }
      setAuthError("");
      navigate("/browse");
    } catch (error: any) {
      setAuthError(error.response.data.errors[0].msg);
    }
  };

  const handleChangeAuthVariant = () => {
    setVariant(
      variant === Variant.LOGIN ? Variant.SIGN_UP : Variant.LOGIN
    );
    setAuthError("");
  };

  // Memoize context value to prevent re-renders
  const contextValue = useMemo(
    () => ({
      register,
      errors,
    }),
    [register, errors]
  );

  return (
    <div className="relative bg-black h-screen w-screen bg-opacity-50">
      <NavBar />
      <div className="flex justify-center items-center h-full">
        <div className="bg-black bg-opacity-70 p-16 self-center mt-2 w-full max-w-md rounded-md">
          <h2 className="text-white text-4xl mb-8 font-semibold">
            {variant === Variant.SIGN_UP ? "Sign up" : "Log in"}
          </h2>
          <AuthFormContext.Provider value={contextValue}>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              {variant === Variant.SIGN_UP && (
                <Input id="username" type="text" label="Username" name="name" />
              )}
              <Input
                id="email"
                type="email"
                label="Email address"
                name="email"
              />
              <Input
                id="password"
                type="password"
                label="Password"
                name="password"
                validate={
                  variant === Variant.SIGN_UP
                    ? () => {
                        const password = getValues("password");
                        if (password.length < 8) {
                          return "Password must be greater than 8 characters";
                        }
                        if (!/[A-Z]/.test(password)) {
                          return "Password must have at least one uppercase value";
                        }
                        if (!/[a-z]/.test(password)) {
                          return "Password must have at least one lowercase value";
                        }
                        if (!/\d/.test(password)) {
                          return "Password must have a number";
                        }
                        return true;
                      }
                    : undefined
                }
              />
              <input
                type="submit"
                className="bg-red-400 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700"
              />
              {authError && <p className="text-red-500">{authError}</p>}
            </form>
          </AuthFormContext.Provider>
          <button
            type="button"
            className="text-neutral-500 mt-12"
            onClick={handleChangeAuthVariant}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleChangeAuthVariant();
              }
            }}
          >
            <span className="text-white ml-1 hover:underline cursor-pointer">
              {variant === Variant.LOGIN
                ? "First time using Netflix?"
                : "Already have an account?"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
