const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-fade-in">
            <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
              About Me
            </span>
            <h2 className="font-clash font-extrabold text-5xl sm:text-6xl md:text-7xl mt-2">
              Crafting Digital Excellence
            </h2>
          </div>
          
          <div className="space-y-8 font-satoshi text-xl sm:text-2xl leading-relaxed text-muted-foreground">
            <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              I'm a <span className="text-foreground font-semibold">designer-developer-entrepreneur</span> passionate about creating meaningful digital experiences 
              that blend aesthetics with functionality. With expertise spanning UI/UX design, frontend development, 
              and interactive experiences, I bring ideas to life through clean code and thoughtful design.
            </p>
            
            <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              My entrepreneurial mindset drives me to not just build products, but to <span className="text-foreground font-semibold">solve real problems 
              and create value</span>. I believe in the power of cross-platform development and the importance of 
              design thinking in every aspect of software creation.
            </p>
            
            <p className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Based in Tiruchirappalli, Tamil Nadu, I work with clients globally, transforming their 
              visions into beautifully crafted digital solutions that stand out in today's competitive landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
