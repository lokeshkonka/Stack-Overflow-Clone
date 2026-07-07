import React from "react";
import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";

export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white">
            <HeroSection />
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <h2 className="mb-6 text-3xl font-semibold tracking-tight">Latest Questions</h2>
                        <LatestQuestions />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold tracking-tight">Top Contributors</h2>
                        <TopContributers />
                    </div>
                </div>
            </div>
        </main>
    );
}
