const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-outfit font-bold text-2xl">Your Name</p>
            <p className="font-grotesk text-sm text-muted-foreground mt-1">
              Designer • Developer • Entrepreneur
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-inter text-sm text-muted-foreground">
              © {currentYear} All rights reserved
            </p>
            <p className="font-grotesk text-xs text-muted-foreground mt-1">
              Built with passion in Tiruchirappalli, Tamil Nadu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
