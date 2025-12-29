import herosection from '../assets/herosection.jpg';

export function HeroSection() {
    return (
    <section className="mx-auto justify-center items-center flex w-full flex-col gap-[60px] px-4 py-10 lg:flex-row bg-brown-100">
      
      <div className="text-center flex flex-col w-full max-w-[347px] gap-[24px]">
        <h1 className="font-bold text-brown-600 text-headline-1 lg:text-right leading-[60px]">
          Stay Informed, Stay Inspired
        </h1>

        <p className="text-brown-400 text-body-1 lg:text-right">
          Discover a World of Knowledge at Your Fingertips. Your Daily
          Dose of Inspiration <br /> and Information.
        </p>
      </div>

      <div className="w-[343px] h-[470px] overflow-hidden rounded-2xl bg-brown-200">
        <img
          src={herosection}
          alt="author"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col w-full max-w-[347px]">
        <p className="text-body-3 text-brown-400"> -Author</p>
        <p className="pt-1 text-headline-3 text-brown-600">
          Thompson P.
        </p>

        <p className="pt-3 text-body-1 text-brown-400 leading-relaxed">
          I am a pet enthusiast and freelance writer who specializes in
          animal behavior and care. With a deep love for cats, I enjoy
          sharing insights on feline companionship and wellness.
        </p>

        <p className="pt-4 text-body-1 text-brown-400 leading-relaxed">
          When I'm not writing, I spends time volunteering at my local
          animal shelter, helping cats find loving homes.
        </p>
      </div>
    </section>
  );
}