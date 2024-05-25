import imgHero from "./../assets/images/hero.png";

function Hero() {
  return (
    <section className="bg-[#F8D629] text-[#002A48] rounded-b-3xl">
      <div className="grid max-w-screen-xl px-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 items-center space-x-40">
        <div className="mr-auto place-self-center lg:col-span-5">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl">
            One More Friend
          </h1>
          <h2 className="text-4xl font-bold mb-8">Thousands More Fun!</h2>
          <p className="max-w-xl mb-6 lg:mb-8 md:text-lg lg:text-base">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-[#003459] text-white rounded-3xl transition-all duration-300 hover:bg-[#001F36]"
          >
            Explore Now
          </a>
        </div>
        <div className="lg:col-span-6 lg:flex lg:justify-end lg:items-center">
          <img src={imgHero} alt="mockup" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
