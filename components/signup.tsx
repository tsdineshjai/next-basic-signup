"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LabelledInput from "./labelledInputType";
import CreateUser from "@/actions/user";

export default function Signup() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	return (
		<div className="h-screen flex justify-center flex-col">
			<div className="flex justify-center">
				<a
					href="#"
					className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
				>
					<div>
						<div className="px-10">
							<div className="text-3xl font-extrabold">Sign up</div>
						</div>
						<div className="pt-2">
							<LabelledInput
								onChange={(e) => {
									setUsername(e.target.value);
								}}
								label="Username"
								placeholder="harkirat@gmail.com"
							/>
							<LabelledInput
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								label="Password"
								type={"password"}
								placeholder="123456"
							/>
							<button
								onClick={async () => {
									const response = await CreateUser(username, password);
									localStorage.setItem("userDetails", JSON.stringify(response));
									router.push("/");
								}}
								type="button"
								className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
							>
								Sign Up
							</button>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
}
