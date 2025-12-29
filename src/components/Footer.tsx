import { Linkedin, Github, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full bg-brown-200">
      <div
        className="
          mx-auto flex w-full max-w-[375px] flex-col
          items-center gap-6
          px-4 py-10

          md:max-w-[1440px]
          md:flex-row
          md:justify-between
          md:px-[120px]
        "
      >
        {/* Left group */}
        <div className="flex items-center gap-4">
          <p className="text-body-1 text-brown-500">
            Get in touch
          </p>

          <div className="flex gap-4">
            <Linkedin className="text-brown-500"/>
            <Github className="text-brown-500" />
            <Mail className="text-brown-500" />
          </div>
        </div>

        {/* Home page */}
        <a
          href="#"
          className="text-body-1 text-brown-600 underline"
        >
          Home page
        </a>
      </div>
    </footer>
  );
}

export default Footer;