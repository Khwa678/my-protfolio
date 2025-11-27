import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact(){
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "YOUR_SERVICE_ID";      // replace
    const templateID = "YOUR_TEMPLATE_ID";    // replace
    const userID = "YOUR_PUBLIC_KEY";         // replace

    emailjs.sendForm(serviceID, templateID, formRef.current, userID)
      .then(() => {
        setStatus("SENT");
        formRef.current.reset();
      }, (err) => {
        console.error(err);
        setStatus("ERROR");
      });
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Open to job opportunities, collaborations and mentorships.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow">
          <h3 className="font-semibold">Direct</h3>
          <p className="mt-2"><strong>Email:</strong> your.email@example.com</p>
          <p className="mt-1"><strong>LinkedIn:</strong> <a className="underline" href="https://www.linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
          <p className="mt-1"><strong>GitHub:</strong> <a className="underline" href="https://github.com/yourusername">github.com/yourusername</a></p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow flex flex-col gap-3">
          <label className="text-sm">Name<input name="from_name" required className="w-full mt-1 p-2 rounded bg-gray-50 dark:bg-gray-900 border"/></label>
          <label className="text-sm">Email<input name="reply_to" type="email" required className="w-full mt-1 p-2 rounded bg-gray-50 dark:bg-gray-900 border"/></label>
          <label className="text-sm">Message<textarea name="message" required className="w-full mt-1 p-2 rounded bg-gray-50 dark:bg-gray-900 border h-28"/></label>

          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send Message</button>
            <button type="reset" className="px-4 py-2 border rounded">Reset</button>
          </div>

          {status === "SENT" && <p className="text-sm text-green-600">Message sent — thank you!</p>}
          {status === "ERROR" && <p className="text-sm text-red-600">Error sending message. Use mailto fallback.</p>}
        </form>
      </div>
    </section>
  );
}
