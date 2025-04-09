import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import HttpService from "../../services/HttpService";
import useAuthStore from "../../hooks/useAuthStore";

// Define the Zod schema for validation
const schema = z.object({
    email: z
        .string()
        .email("Please enter a valid email")
        .min(1, "Email is required"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .min(1, "Password is required"),
});

// Type for the form data
type FormData = {
    email: string;
    password: string;
};

export default function StudentLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema), // Attach the Zod schema to React Hook Form
    });
    const { login } = useAuthStore();
    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
        HttpService.get<{ token: string }>('/student-login').then((res) => {
            console.log("token : " + res.token);
            login(res.token);
        }).catch((err) => {
            console.log(err);
        })
    };

    return (
        <div>
            <h1>Student Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="m-3">
                    <div>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="border mx-1"
                            {...register("email")}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="border mx-1"
                            {...register("password")}
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>

                    <div>
                        <input type="submit" value="Login" className="mx-1 p-2 rounded my-1 bg-blue-600 text-white cursor-pointer" />
                    </div>
                </div>
            </form>
        </div>
    );
}
