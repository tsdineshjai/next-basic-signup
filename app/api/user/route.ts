import prisma from "@/db";

export async function GET() {
	const user = await prisma.user.findFirst({});
	return Response.json({
		username: user?.username.split("@")[0],
		email: user?.username,
	});
}
