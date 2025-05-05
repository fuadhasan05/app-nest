import React from 'react';

const Newsletter = () => {
  return (
    <section className="w-11/12 mx-auto rounded-lg bg-blue-50 py-25 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and be the first to know about new apps and updates.
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-200"
            required
          />
          <button
            type="submit"
            className="px-8 py-2 btn btn-primary"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
