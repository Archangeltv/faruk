import { BsGithub, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="w-full items-center justify-center text-[#A3ABB2] flex-col flex gap-3 my-10">
      <h2>Hire me for your next design work.</h2>
      <p>I am also available for collaborations and internships.</p>
      <div>
        <div className="flex items-center justify-center text-[#A3ABB2] gap-8 text-2xl">
          <BsGithub />
          <BsTwitter />
          <BsWhatsapp />
        </div>
        <p className="mt-3">
          @Faruk 2023. Developed by{" "}
          <a
            href="https://archangelportfolio.netlify.app"
            className="underline text-white"
          >
            @Archangel
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
