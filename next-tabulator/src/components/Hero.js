import React from "react";
import MovieTabulator from "./MovieTabulator";

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold mb-5">Box Office List!</h1>
                    <MovieTabulator />
                </div>
            </div>
        </div>
    );
};

export default Hero;
