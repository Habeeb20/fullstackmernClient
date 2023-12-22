import React from "react";
import { Link } from "react-router-dom";
import lock from "../components/assets/lock.jpg";

import { FadeIn } from "../components/FadeIn";

const About = () => {
    return (


        <div className="bg-slate-700 w-full linear-gradient(90.21deg, rgba(72, 19, 146) -5.91%, rgb(31, 4, 69) 111.58%); py-16 px-4 h-600">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10">
                <FadeIn delay={0.3} direction={"left"}>
                    <div className=" flex flex-col justify-center ml-14">
                        <h1 className="text-white font-bold text-3xl md:text-5xl py-6 ">
                            Authentication App
                        </h1>
                        <p className="text-white">
                            {" "}
                            This is a full-stack web application built with the MERN (MongoDB,
                            Express, React, Node.js) stack. It includes authentication features that
                            allow users to sign up, log in, log out, and also perform CRUD operations on their
                            profile while there is also an availability of uploading pictures on their profile picture and provides access to
                            protected routes only for authenticated users. <br />
                            The front-end of the application is built with React and uses React
                            Router for client-side routing. The back-end is built with Node.js and
                            Express, and uses MongoDB as the database. Authentication is implemented
                            using JSON Web Tokens (JWT).
                            <br />

                        </p>
                        <Link to='/login'>
                        <button
                            className=" bg-orange-400 mt-10 p-3 w-40 text-white border-radius-5 rounded-lg"
                            
                        >
                            Login
                        </button>

                        </Link>

                   
                    </div>
                </FadeIn>

                <FadeIn delay={0.3} direction={"right"}>
                    <div className="md:mt-10 mt-5">
                        <img className="w-80 h-150 rounded-lg" src={lock} alt="img" />
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default About;


