import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Phone,
  MapPin,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeForm, setActiveForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("your.email@example.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setActiveForm(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      action: copyEmail,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      action: null,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Your City, Country",
      action: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-gray-700",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 animate-fade-in">
            <span className="font-grotesk text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Get In Touch
            </span>
            <h2 className="font-clash font-extrabold text-4xl sm:text-5xl md:text-7xl mt-6 mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Let's Create
              <br />
              Something Amazing
            </h2>
            <p className="font-satoshi text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Whether it's a new project or
              collaboration, I'm here to help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div
              className="space-y-8 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="font-grotesk text-2xl font-semibold mb-6">
                    Get in touch
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors duration-200 cursor-pointer group"
                        onClick={item.action || undefined}
                        style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                      >
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-grotesk text-sm text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="font-satoshi text-base">{item.value}</p>
                        </div>
                        {item.action && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {emailCopied ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              {/* Social Links */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="font-grotesk text-sm text-muted-foreground mb-4 text-center lg:text-left">
                  Follow me on social media
                </p>
                <div className="flex justify-center lg:justify-start gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      <social.icon className="w-7 h-7" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 sticky top-8">
                <CardContent className="p-8">
                  <h3 className="font-grotesk text-2xl font-semibold mb-2">
                    Send a message
                  </h3>
                  <p className="font-satoshi text-muted-foreground mb-6">
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="font-grotesk text-sm font-medium"
                        >
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="transition-all focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="font-grotesk text-sm font-medium"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="transition-all focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="font-grotesk text-sm font-medium"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="font-grotesk text-sm font-medium"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        required
                        className="resize-none transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-grotesk text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] rounded-xl group"
                    >
                      <Mail className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
