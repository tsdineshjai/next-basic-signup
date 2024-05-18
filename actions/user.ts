"use server";

import prisma from "@/db";
import { z } from "zod";

const inputSchemaValidation = z.object({
	username: z.string().email(),
	password: z.string().min(5),
});

export default async function CreateUser(username: string, password: string) {
	const { success, data } = inputSchemaValidation.safeParse({
		username,
		password,
	});

	if (!success) {
		throw new Error("either one or all input types are incorrect");
	}

	const user = await prisma.user.create({
		data: {
			username: data.username,
			password: data.password,
		},
	});
	console.log(user.id);
	return `Signed up with user details :{JSON.stringify(${user})}`;
}
  