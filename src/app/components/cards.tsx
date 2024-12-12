const questions = [
    "Who am I?",
    "Why choose me?",
    "What can I do for you?"
];

const FlipCardComponent = () => {
    return (
        <section className="mx-auto flex justify-center gap-2 px-4 py-10 lg:max-w-7xl">
            {questions.map((question, index) => (
                <div key={index} className="group h-56 w-full">
                    {/* Gradient Border Wrapper */}
                    <div className="relative h-full w-full rounded-xl bg-gradient-to-r from-gray-800 via-red-600 to-gray-800 p-1">
                        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front Face */}
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-800 text-white flex items-center justify-center px-5 py-3 [backface-visibility:hidden]">
                                <p className="text-4xl text-center font-semibold">{question}</p>
                            </div>

                            {/* Back Face */}
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-800 text-white flex items-center justify-center px-5 py-3 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="text-lg text-gray-300 mt-2">
                                    {index === 0
                                        ? "I am currently a front-end developer with focus on React, but I’m also comfortable with full-stack work. My goal is to build clean, functional interfaces while understanding the full system behind them."
                                        : index === 1
                                            ? "I value clear communication and enjoy collaborating with others. Taking on challenges and learning from my team is where I do my best work."
                                            : "I’m curious and quick to pick up new tools. I’m always eager to understand not just how things work, but why, so I can adapt and contribute effectively."}
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
