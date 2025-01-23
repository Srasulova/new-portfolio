const questions = [
    "Who am I?",
    "Why choose me?",
    "What can I do for you?"
];

const FlipCardComponent = () => {
    return (
        <section className="mx-auto flex justify-center gap-2 px-4 pb-20 lg:max-w-7xl">
            {questions.map((question, index) => (
                <div key={index} className="group h-60 w-full">
                    {/* Gradient Border Wrapper */}
                    <div className="relative h-full w-full rounded-xl bg-gradient-to-r from-teal-300 via-red-600 to-gray-800 p-1">
                        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front Face */}
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-800 text-white flex items-center justify-center px-5 py-3 [backface-visibility:hidden]">
                                <p className="text-4xl text-center font-semibold">{question}</p>
                            </div>

                            {/* Back Face */}
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-800 text-white flex items-center justify-center px-5 py-3 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="text-lg text-gray-300 mt-2">
                                    {index === 0
                                        ? "Full Stack Software Engineer with a focus on Front-End Development"
                                        : index === 1
                                            ? "I solve tricky problems creatively, continuously learn, and always aim to improve my work."
                                            : "I build web applications from concept to deployment. I can develop full-stack projects, create responsive interfaces, and solve complex technical challenges."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </section>
    );
};

export default FlipCardComponent;
