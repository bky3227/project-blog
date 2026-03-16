import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

function LoginAdminForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Login data:", formData);

        // TODO: call login API
    };

    return (
        <>
            <div className="w-full h-auto flex justify-center pt-10 bg-white px-4">
                <div className="w-full max-w-md bg-brown-200 rounded-2xl px-4 py-10 top-12">
                    <p className="text-headline-4 text-center mb-2 text-brand-orange">Admin panel</p>
                    <h1 className="text-headline-2 text-center mb-8">Log in</h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div className="space-y-1">
                            <label className="block text-body-1 text-brown-400 leading-6">
                                Email
                            </label>
                            <Input
                                className="w-full mt-1 pt-3 pr-3 pb-3 pl-4 rounded-lg bg-white border-solid border-brown-300 block text-body-1 text-brown-400"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-1">
                            <label className="block text-body-1 text-brown-400 leading-6">
                                Password
                            </label>
                            <Input
                                className="w-full mt-1 pt-3 pr-3 pb-3 pl-4 rounded-lg bg-white border-solid border-brown-300 block text-body-1 text-brown-400"
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Submit ปุ่ม log up ต้องเอาไปเชื่อมกับ page Register */} 
                        <Button
                            type="submit"
                            className="w-full rounded-full bg-black text-white hover:bg-muted-foreground mt-4"
                        >
                            Log in
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginAdminForm;