"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="w-fit flex flex-col mx-auto gap-3">
			<h2 className="text-white-600/75">{error.message}</h2>
			<button
				className="bg-gray-950/50 p-2 rounded-lg text-white/40 hover:text-white/70"
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	);
}
