const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="font-grotesk text-sm tracking-widest text-accent uppercase font-semibold">
              About Me
            </span>
            <h2 className="font-outfit font-bold text-4xl sm:text-5xl md:text-6xl mt-4 mb-8">
              Crafting Digital Excellence
            </h2>
          </div>
          
          <div className="space-y-6 font-inter text-lg leading-relaxed text-muted-foreground">
            <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              I'm a designer-developer-entrepreneur passionate about creating meaningful digital experiences 
              that blend aesthetics with functionality. With expertise spanning UI/UX design, frontend development, 
              and interactive experiences, I bring ideas to life through clean code and thoughtful design.
            </p>
            
            <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              My entrepreneurial mindset drives me to not just build products, but to solve real problems 
              and create value. I believe in the power of cross-platform development and the importance of 
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
