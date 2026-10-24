import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen p-6 md:p-12 space-y-16 max-w-7xl mx-auto">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-gradient tracking-tight">
          Premium Aesthetics
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Testing the luxurious dark maroon and premium peach color palette for
          your high-end e-commerce store.
        </p>
      </header>

      <section className="bg-brand-gradient rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The 2026 Festive Collection
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Experience uncompromised luxury with our latest arrivals.
          </p>
          <button className="bg-white text-[#59171b] px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg">
            Shop the Collection
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-foreground mb-6">
          Trending Products
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            {/* Image placeholder using secondary color */}
            <div className="w-full h-48 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <span className="text-secondary-foreground font-medium">
                Product Image
              </span>
            </div>
            <h4 className="text-xl font-semibold text-foreground">
              Classic Maroon Tote
            </h4>
            <p className="text-muted-foreground text-sm mt-2 mb-4">
              Handcrafted with premium materials for everyday elegance.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-lg text-foreground">$299</span>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-accent border border-border rounded-2xl p-5 shadow-sm flex flex-col justify-center items-center text-center">
            <h4 className="text-2xl font-bold text-accent-foreground mb-2">
              Exclusive Member Offer
            </h4>
            <p className="text-accent-foreground/80 mb-6">
              Get 20% off your first luxury purchase when you join the club.
            </p>
            <button className="bg-foreground text-background px-6 py-2 rounded-lg font-medium hover:opacity-90 transition w-full">
              Sign Up Now
            </button>
          </div>

          <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Theme Colors
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary shadow-inner"></div>
                <span className="text-foreground font-medium">
                  Primary (Maroon)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary shadow-inner"></div>
                <span className="text-foreground font-medium">
                  Secondary (Peach)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-destructive shadow-inner"></div>
                <span className="text-foreground font-medium">
                  Destructive (Red)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-background border border-border"></div>
                <span className="text-foreground font-medium">Background</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
