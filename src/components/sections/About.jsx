import { RevealOnScroll } from '../RevealOnScroll';


export const About = () => {

    const QAskills = [
        "Selenium",
        "NUnit",
        "Appium",
        "Jira",
        "Postman"]
    const ProgrammingLanguages = [
        "C#",
        "Python",
        "Javascript",
        "HTML",
        "React",
        ".Net",
        "SQL"]
    const Cibersecurity = [
        "WireShark",
        "Nmap",
        "Burp Suite",
        "MetaSplot",
        "Hydra",
        "Kali Linux"

    ]

    const OS = [
        "Windows",
        "Linux",
        "Kali Linux",
        "MacOS",
        "iOS",
        "Android"

    ]



    return (<section id="about" className="min-h-screen flex items-center justify-center py-20"
    >

        <RevealOnScroll>

            <div className="max-w-3xl mx-auto px-4">

                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center"> About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I'm a passionate QA professional with a background in computer engineering and a focus on both manual and automated testing. I work with tools like Selenium, NUnit, Postman,
                        and Jira, and have experience in C# and Python. I'm continuously learning, currently exploring mobile testing with Appium and strengthening my knowledge in cybersecurity and
                        networking. I enjoy finding bugs, improving processes, and delivering high-quality products.
                    </p>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4"> Quality Assurance  </h3>
                            <div className="flex flex-wrap gap-2">
                                {QAskills.map((tech, key) => (

                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"

                                    >

                                        {tech}

                                    </span>

                                ))}

                            </div>


                        </div>




                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4"> Programming Languages  </h3>
                            <div className="flex flex-wrap gap-2">
                                {ProgrammingLanguages.map((tech, key) => (

                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"

                                    >

                                        {tech}

                                    </span>

                                ))}

                            </div>


                        </div>

                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4"> Programming Languages  </h3>
                            <div className="flex flex-wrap gap-2">
                                {Cibersecurity.map((tech, key) => (

                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"

                                    >

                                        {tech}

                                    </span>

                                ))}

                            </div>


                        </div>

                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4"> Programming Languages  </h3>
                            <div className="flex flex-wrap gap-2">
                                {OS.map((tech, key) => (

                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"

                                    >

                                        {tech}

                                    </span>

                                ))}

                            </div>


                        </div>




                    </div>




                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4"> Education

                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> Bachellor in Informatic Engineer</strong> - Universidad Castro Carazo (2020-2024)
                            </li>

                            <li>
                                <strong> Executive in English for services</strong> - Instituto Nacional de Aprendizaje (INA) (2018-2018)
                            </li>


                            <li>
                                Relevant courses:Introduction to Cibersecurity, ISO 27001, FrontEnd Development
                            </li>


                        </ul>


                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4"> Work Experience</h3>

                        <div className="space-y-4 text-gray-300 ">
                            <div>

                                <h4 className="font-semibold">Network Technical Support at Foundever (2023-2025) </h4>
                                <p> ● Diagnosed and resolved network issues to ensure connectivity and optimal
                                    perfomance of high Fidelity speaker system  </p>
                                <p> ● Provided technical support to customers in Spanish and English over the phone and
                                    chat, diagnosing and resolving system issues. Checked network settings and
                                    configurations on routers to ensure proper functionality

                                </p>

                            </div>



                        </div>

                    </div>


                </div>
            </div>
        </RevealOnScroll>
    </section>

    )
};