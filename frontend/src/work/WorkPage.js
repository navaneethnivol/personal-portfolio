import React from "react";
import { Link } from "react-router-dom";

function WorkPage() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
            <div className="text-neutral-300">
                <p>
                    Striving to learn as much as I can about everything and anything I can, to observe and listen, and, in response, to do good. Here's a summary of my work so far.
                </p>
                <hr className="my-6 border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Accenture</h2>
                <p className="text-neutral-400 text-sm mb-4">
                    Software Engineer, June 2021 - August 2022
                </p>
                <p className="mb-4">
                    As a budding Software Engineer, my journey at Accenture in Hyderabad, India, from June 2021 to August 2022, was a thrilling exploration of software development.
                    I played a key role in crafting Java-based micro-services using Spring Boot and GraphQL. This wasn't just about coding; it was about making things faster and better.
                    Through clever caching techniques, I managed to cut down application response time by an impressive 30%.
                </p>

                <p>
                    Embracing Agile methodologies and Test-Driven Development (TDD), I dived into Liferay portlet development, bringing a fresh and efficient approach.
                    I didn't stop there—I automated testing and deployment using CI/CD pipelines and JUnit. The result? A significant 20% reduction in regression errors.
                    I also had the opportunity to delve into cloud-based solutions, orchestrating them with Terraform in AWS (EC2, S3, RDS).
                    At this early phase of my career, I've discovered that being a Software Engineer involves more than just coding; it's about architecting inventive solutions that drive progress.
                    My time at Accenture was a vibrant chapter in my journey, and I'm excited about the adventures that lie ahead in the ever-evolving world of technology.
                </p>

                <hr className="my-6 border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">AlcoveX Studios</h2>
                <p className="text-neutral-400 text-sm mb-4">
                    Software Engineer, May 2020 - August 2020
                </p>
                <p>
                    <p className="mb-4">
                        During my time as a Software Engineer at AlcoveX Studios, I embarked on an exciting journey of learning and implementation.
                        As a fresher, I took on the challenge of engineering the backend for Interview Buddy's application, utilizing Hasura and PostgreSQL.
                        This hands-on experience allowed me to ensure seamless video calls and effective data storage.
                    </p>

                    <p className="mb-4">
                        Eager to enhance the application's security, I configured AWS Cognito for OAuth and implemented JWT Tokens for REST Authentication.
                        Delving into serverless architecture, I developed GraphQL APIs and serverless functions using NodeJS on AWS Lambda, API Gateway, and ELB, demonstrating my commitment to efficient traffic routing.
                    </p>

                    <p className="mb-4">
                        Innovation became a key focus as I implemented Agora WebRTC for video calls and real-time whiteboard features.
                        Additionally, AWS SES was employed for timely email communication, further enriching the application's functionality.
                        As a fresher, I embraced the challenges with enthusiasm, learning and implementing solutions that not only contributed to Interview Buddy's development but also marked significant milestones in my early career as a Software Engineer.
                    </p>
                </p>

                <hr className="my-6 border-neutral-800" />
                <h2 className="font-medium text-xl mb-1 tracking-tighter">Fountane Makerspace PVT LTD</h2>
                <p className="text-neutral-400 text-sm mb-4">
                    Software Engineer Intern, May 2019 — June 2019
                </p>
                <p>
                    Embarking on my first internship at Fountane Makerspace PVT LTD, I delved into the world of software engineering with enthusiasm.
                    From developing user-centric React components and optimizing database schema design to implementing Node.js solutions for efficient file transfers, each task was a learning milestone.
                    Additionally, configuring Continuous Integration/Continuous Deployment (CI/CD) workflows with Docker for AWS deployment underscored my adaptability and commitment to seamless processes.
                    This experience, while brief, left an indelible mark, setting the stage for my ongoing journey in the dynamic realm of software engineering.
                </p>
            </div>
        </section>
    );
}

export default WorkPage;