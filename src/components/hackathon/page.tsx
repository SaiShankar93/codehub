"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BackgroundLines } from "@/components/ui/background-lines";

export function Hackathon() {
    const theme = useSelector((state: any) => state.theme.theme);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isPopupVisible, setPopupVisible] = useState(false);

    const targetDate = new Date('2025-02-21T06:30:00').getTime();

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const padNumber = (num: number): string => {
        return num.toString().padStart(2, '0');
    };

    const handleMoreInfoClick = () => {
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <BackgroundLines className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    CODEVERSE
                </h1>
                <p className={`text-lg md:text-xl mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    A 36 HOUR HACKATHON ON 21 & 22 FEB 2025
                </p>

                <div className={`max-w-md mx-auto mb-12 ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-100"} p-6 rounded-xl`}>
                    <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>Themes</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"} font-medium`}>AI TECH</div>
                        <div className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"} font-medium`}>FIN TECH</div>
                        <div className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"} font-medium`}>AGRI TECH</div>
                        <div className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"} font-medium`}>HEALTH TECH</div>
                        <div className={`col-span-2 text-center ${theme === "dark" ? "text-blue-400" : "text-blue-600"} font-medium`}>CYBER TECH</div>
                    </div>
                    <div className={`mt-4 ${theme === "dark" ? "text-yellow-300" : "text-yellow-600"} text-sm italic`}>
                        * Detailed problem statements will be revealed soon!
                    </div>
                </div>

                <div className="flex gap-4 justify-center mb-12">
                    <a
                        href="https://konfhub.com/widget/codeverse25?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Prompt&borderRadius=10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            px-8 py-3 rounded-full 
                            ${theme === "dark"
                                ? "bg-white text-black hover:bg-gray-200"
                                : "bg-black text-white hover:bg-gray-800"
                            } 
                            transition-all duration-300 ease-in-out
                            transform hover:scale-105
                            hover:shadow-lg
                            active:scale-95
                            cursor-pointer
                            font-medium
                        `}
                    >
                        Register Now
                    </a>
                    <button
                        onClick={handleMoreInfoClick}
                        className={`
                            px-8 py-3 rounded-full border-2
                            ${theme === "dark"
                                ? "border-white text-white hover:bg-white hover:text-black"
                                : "border-black text-black hover:bg-black hover:text-white"
                            }
                            transition-all duration-300 ease-in-out
                            transform hover:scale-105
                            hover:shadow-lg
                            active:scale-95
                            cursor-pointer
                            font-medium
                        `}
                    >
                        More Info
                    </button>
                </div>

                {/* Popup Component */}
                {isPopupVisible && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closePopup}>
                        <div className={`bg-gray p-6 rounded-lg shadow-lg max-w-lg max-h-[80vh] overflow-y-auto ${theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-black"}`} onClick={(e) => e.stopPropagation()}>
                            <h2 className="text-xl font-bold mb-4">Hackathon Information</h2>
                            {/* Updated Popup Content for Better Consistency */}
                            <div className="space-y-6 text-left leading-relaxed">
                                <p>
                                    We are excited to bring you an opportunity like no other—our upcoming Hackathon on February 21st!
                                    This is your chance to showcase your skills, collaborate with like-minded individuals, and tackle
                                    real-world challenges provided directly by companies.
                                </p>

                                <h3 className="text-lg font-semibold">🔍 About the Problem Statements</h3>
                                <p>
                                    Unlike generic competitions, this hackathon is designed to simulate real-world problem-solving.
                                    Each domain will have one exclusive problem statement, carefully curated by companies. These
                                    could be actual challenges faced by the companies themselves, making this an opportunity to
                                    work on impactful, industry-relevant solutions.
                                </p>

                                <h3 className="text-lg font-semibold">📌 What does this mean for you?</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    ✅ You'll be solving problems that matter in the real world
                                    <br />✅ Your solutions will be evaluated by industry professionals
                                    <br />✅ Companies may even adopt and implement the best ideas
                                </ul>

                                <h3 className="text-lg font-semibold">👥 Who Can Participate?</h3>
                                <p>
                                    This hackathon is open to students, innovators, and tech enthusiasts who are ready to think outside
                                    the box and create something amazing. Whether you're a developer, designer, or problem-solver,
                                    this is your chance to shine!
                                </p>

                                <h3 className="text-lg font-semibold">🏆 Prizes & Rewards</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    💰 Every Domain will have a exiciting cash prize for the top 3 teams.
                                </ul>

                                <h3 className="text-lg font-semibold">🎯 Why You Should Participate?</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    🔥 Work on real-world projects and build something meaningful
                                    <br />🔥 Get your work reviewed by top industry experts
                                    <br />🔥 Stand out for internship opportunities—companies may notice and consider top-performing participants
                                    <br />🔥 Gain networking opportunities and connect with industry professionals
                                </ul>

                                <h3 className="text-lg font-semibold">📅 Event Details</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    📍 The hackathon will take place on February 21st
                                    <br />📜 The problem statements and event details will be shared a few days prior to give you time to prepare
                                </ul>

                                <p>
                                    This is not just a competition—it's a career-boosting experience that could open doors to
                                    exciting opportunities. Don't miss out!
                                </p>

                                <p>
                                    📢 Register now and be part of this game-changing event! 🚀🔥
                                </p>
                            </div>
                            {/* Close Button */}
                            <button
                                onClick={closePopup}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                <div className={`grid grid-cols-4 gap-4 max-w-2xl mx-auto ${theme === "dark" ? "text-white" : "text-black"}`}>
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="text-center">
                            <div className={`text-3xl md:text-5xl font-bold mb-1 ${theme === "dark" ? "text-white" : "text-black"}`}>
                                {unit === 'days' ? value : padNumber(value)}
                            </div>
                            <div className={`text-sm md:text-base capitalize ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                {unit}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BackgroundLines>
    );
}

export default Hackathon;
