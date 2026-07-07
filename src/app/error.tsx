"use client";

import React from "react";
import ShimmerButton from "@/components/magicui/shimmer-button";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    React.useEffect(() => {
        console.error("Global Error Intercepted:", error);
    }, [error]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
            <div className="relative z-10 max-w-md space-y-6">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-10 w-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                    </svg>
                </div>
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Backend Connection Error</h1>
                    <p className="text-gray-400">
                        We are unable to connect to the backend server. It seems the database service is currently offline or unreachable.
                    </p>
                </div>
                <div className="rounded-lg bg-white/5 p-4 text-left font-mono text-xs text-red-400/80 border border-white/10 max-h-40 overflow-auto">
                    {error.message || "Unknown Connection Error"}
                </div>
                <div className="flex justify-center pt-2">
                    <ShimmerButton onClick={() => reset()} className="shadow-2xl">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                            Retry Connection
                        </span>
                    </ShimmerButton>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_50%)]" />
        </main>
    );
}
