import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
	const user = await prisma.user.findFirst({});
	return Response.json({
		username: user?.username.split("@")[0],
		email: user?.username,
	});
}

const inputSchemaValidation = z.object({
	username: z.string().email(),
	password: z.string().min(5),
});
export async function POST(request: NextRequest) {
	const body = await request.json();

	const { success, data } = inputSchemaValidation.safeParse(body);

	if (!success) {
		throw new Error("either one or all input types are incorrect");
	}

	const userCreated = await prisma.user.create({
		data,
	});
	return NextResponse.json({
		message: `user : ${userCreated.username} was created successfully`,
	});
}
