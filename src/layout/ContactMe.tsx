import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import ContactImg from "/contact-me.webp";
import { MessageCircleMore, PhoneCall, Trash } from "lucide-react";

import emailjs from "@emailjs/browser";
import { createRef } from "react";
import { motion } from "framer-motion";
export default function ContactMe() {
  const form = createRef<HTMLFormElement>();

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current !== null) {
      emailjs
        .sendForm(
          "service_o31csif",
          "template_ztvmeok",
          form.current,
          "YgmLik1YwAzj5EWoJ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    alert("Your message has been sent successfully");
  };
  return (
    <section id="contact" className="mainSections">
      <SectionHeader title="Contact Me" />
      <p className="mt-2 mb-16 text-center text-xl">Get in touch</p>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 justify-evenly">
        <img
          src={ContactImg}
          className="md:hidden w-1/2 aspect-square"
          alt="conact me"
        />
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
          ref={form}
          className="flex flex-col md:my-0 my-8 gap-4"
          onSubmit={submitForm}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name:</label>
            <input
              required
              className=" w-[40ch] px-2 py-1 h-8 rounded-lg  border border-secondary-hover border-opacity-50 text-secondary"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone">
              Phone Number{" "}
              <i className="text-secondary-hover text-[0.8rem]">Whatsapp</i>:
            </label>
            <input
              required
              className=" w-[40ch] px-2 py-1 h-8 rounded-lg  border border-secondary-hover border-opacity-50 text-secondary"
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone number"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              required
              className=" w-[40ch] px-2 py-1 h-8 rounded-lg  border border-secondary-hover border-opacity-50 text-secondary"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message me:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Your Message here"
              className=" h-32 rounded-lg px-2 py-1 max-w-[40ch] border border-secondary-hover border-opacity-50 text-secondary"
            ></textarea>
          </div>
          {/* Buttons */}
          <div className="flex gap-2">
            <Button type="submit" className="w-fit">
              Send Message
            </Button>
            <Button title="reset form" type="reset" variant={"destructive"}>
              <Trash width={20} height={20} />
            </Button>

            <a href="https://wa.me/+201552557347" target="_blank">
              <Button
                title="Contact me via Whatsapp"
                type="button"
                variant="success"
              >
                <MessageCircleMore width={20} height={20} />
              </Button>
            </a>
            <a href="tel:+201552557347" target="_blank">
              <Button title="Call me" type="button" variant="warning">
                <PhoneCall width={20} height={20} />
              </Button>
            </a>
          </div>
          {/* Buttons */}
        </motion.form>
        {/* Form */}

        <motion.img
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
          src={ContactImg}
          className="hidden md:block w-1/3 aspect-square pointer-events-none"
          draggable="false"
          onContextMenuCapture={(e) => e.preventDefault()}
          alt="conact me"
        />
      </div>
    </section>
  );
}
