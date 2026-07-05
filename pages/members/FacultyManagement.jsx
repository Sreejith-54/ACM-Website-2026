import FacultyCards from "./FacultyCards";

export default function FacultyManagement() {
    return (
        <section className="section-panel">
            <div className="mb-10 text-center">
                <div className="eyebrow">Faculty team</div>
                <h1 className="text-4xl font-bold text-white md:text-5xl">Faculty <span className="text-accent">Management</span></h1>
                <p className="mx-auto mt-4 max-w-2xl text-white/60">
                    Faculty mentors guiding ACM activities, events, and student projects.
                </p>
            </div>
            <div className="responsive-people-grid xl:grid-cols-3">
                    <FacultyCards
                        src="/Binupk.jpg"
                        name="Mr.P.K Binu"
                        position="Faculty Sponsor"
                        mg="sm:mr-10 md:mr-28 lg:mr-24 xl:mr-32"
                        width={200}  // Adjust width as necessary
                        height={300} // Adjust height as necessary
                    />
                    <FacultyCards
                        src="/Swaminathanj.jpg"
                        name="Dr. Swaminathan J"
                        position="Executive Committee Member"
                        mg="sm:mr-0 md:mr-0 lg:mr-24 xl:mr-32"
                        width={200}  // Adjust width as necessary
                        height={300} // Adjust height as necessary
                    />
                    <FacultyCards
                       src="/Jyothishanair.jpg"
                        name="Dr. Jyothisha Nair"
                        position="Chairperson"
                        mg="mr-0 sm:mt-9 md:mt-10 lg:mt-0"
                        width={200}  // Adjust width as necessary
                        height={300} // Adjust height as necessary
                    />
                    <FacultyCards
                       src="/Geethamam.jpg"
                        name="Dr. Geetha M"
                        position="Executive Committee Member"
                        mg="sm:mr-10 md:mr-28 lg:mr-24 xl:mr-32"
                        width={200}  // Adjust width as necessary
                        height={300} // Adjust height as necessary
                    />
                    <FacultyCards
                        src="/Gopakumarg.jpg"
                        name="Dr. Gopakumar G"
                        position="Executive Committee Member"
                        mg="sm:mr-0 md:mr-0 lg:mr-24 xl:mr-32"
                        width={200}  // Adjust width as necessary
                        height={300} // Adjust height as necessary
                    />
                    <FacultyCards
                        src="/Priyamam1.png"
                        name="Priya M"
                        position="Executive Committee Member"
                        mg="mr-0 sm:mt-9 md:mt-10 lg:mt-0"
                        width={200}  // Adjust width as necessary
                        height={300} // Adjust height as necessary
                    />
            </div>
        </section>
    );
}

