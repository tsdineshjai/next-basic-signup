import prisma from "@/db";

async function getUserDetails() {
	try {
		const user = await prisma.user.findFirst({});
		return {
			username: user?.username,
			email: user?.username,
		};
	} catch (e) {
		console.log(e);
	}
}
export default async function Home() {
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});
	const userData = await getUserDetails();

	return (
		<section className="flex flex-col justify-center h-screen">
			<main className="flex justify-center">
				<article className="border p-8 rounded flex flex-col p-y bg-orange-600/30 text-blue-600">
					<p>Name: {userData?.username?.split("@")[0]}</p>
					<p>Email: {userData?.email}</p>
				</article>
			</main>
		</section>
	);
}
