const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-[70vh] w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          Have a cool Project and want to chat? Send me an E-mail through this
          button and I will respond to you as soon as possible
        </p>
        <a
          href="mailto: vick4dermatology@gmail.com"
          className="text-nowrap round-lg border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-indigo-700 transition-all duration-300 hover:translate-y-2 shadow-xl hover:shadow-indigo-600"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
