export default function HeroSection() {
  return (
    <main>
      <div>
        {/* Hero card */}
        <div className="relative">
          <div className=" max-w-6xl mx-1 md:mx-auto">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute">
                <img
                  className="h-full w-full"
                  src="https://security.byrontang.repl.co/htmlbestanden/stylesheets/imagesheets/groenetekst.jpeg"
                  alt="People working on laptops"
                />
<div className="absolute inset-0 bg-green-700 mix-blend-multiply" />
              </div>
              <div className="relative py-8 px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Hoe veilig ben jij online?</span>

                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-green-50 sm:max-w-3xl md:bg-green-800/80 md:rounded-lg md:py-2">
                Op deze site leggen we uit over online security en hoe je jezelf beter kan beschermen.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More main page content here... */}
    </main>
  );
}
