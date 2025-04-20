import { RevealOnScroll } from '../RevealOnScroll';


export const Home = () => {

    return (<section id="home" className="min-h-screen flex items-center justify-center relative"
    >


        <RevealOnScroll>
            <div className="text-center z-10 px-4">

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                    Hi, I am Adrian Cruz Castro
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I am a Computer Engineer with 1 year of experience in IT and knowledge in software testing,
                    cybersecurity, and networking. Experienced in using Postman for API testing and Jira for bug
                    tracking and reporting. Proficient in C#, Python and HTML. with a strong interest in quality
                    assurance and agile methodologies (Scrum). Seeking a Junior QA position to apply my skills
                    in software testing and defect management.
                </p>

                <div className="flex justify-center space-x-4">

                    <a href="#projects" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]  hover:bg-blue-500/10"> View Projects


                    </a>


                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]  hover:bg-blue-500/10"> Contact me


                    </a>

                    <a href="https://www.linkedin.com/in/adrianjcc02/" target="_blank" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]  hover:bg-blue-500/10">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>


                </div>


            </div>

        </RevealOnScroll>
    </section>
    );
};