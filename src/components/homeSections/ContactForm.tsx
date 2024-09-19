import React from "react";

const ContactForm = () => {
  return (
    <form
      className="space-y-8 relative"
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <div>
        <input
          type="hidden"
          name="access_key"
          defaultValue="b6cca442-88a3-4137-a8b3-38b2cc2d46cc"
        />
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="block p-3 w-full text-sm  rounded-lg  shadow-sm text-white  bg-gray-700/80  dark:placeholder-white/60  outline-none"
          placeholder="name@flowbite.com"
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-300"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="block p-3 w-full text-sm  rounded-lg  shadow-sm text-white  bg-gray-700/80  dark:placeholder-white/60  outline-none"
          placeholder="Let us know how we can help you"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-300 "
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={6}
          className="block p-3 w-full  text-sm text-white rounded-lg  shadow-sm  bg-gray-700/80  dark:placeholder-white/60 dark:text-white outline-none resize-none"
          placeholder="Leave a comment..."
        />
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-sm font-medium block text-center mx-auto text-tealGreen rounded-lg bg-transparent sm:w-fit border border-tealGreen transition-all duration-500 hover:bg-black hover:text-white "
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
