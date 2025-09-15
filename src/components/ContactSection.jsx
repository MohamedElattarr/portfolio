import { Facebook, Instagram, Linkedin, LocateIcon, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utlis";

export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

       
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto" >
                Have a project in mind or want to collebreate? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> 
                            Contact Information 
                            </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4" >
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a 
                                    href="lovelllyshoot@gmail.com"
                                    className="tex-muted-foreground hover:text-primary transition-colors"
                                    >
                                        lovelllyshoot@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4" >
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone </h4>
                                    <a 
                                    href="tel:+2032393236"
                                    className="tex-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +20 1032393236
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4" >
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location </h4>
                                    <a 
                                    className="tex-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Egypt , Elmansoura , Dakahliya
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me </h4>
                            <div className="flex space-x-4 justify-center" >
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank">
                                    <Facebook />
                                </a>
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3> Send a Message </h3>

                        <form action="" className="space-y-6" >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name </label>
                                <input
                                 type="text"
                                 id="name"
                                 name="name"
                                 required
                                 className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary"
                                 placeholder="Mohamed Elattar..."
                                 />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email </label>
                                <input
                                 type="text"
                                 id="email"
                                 name="email"
                                 required
                                 className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary"
                                 placeholder="elattar@gmail.com..."
                                 />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your message </label>
                                <textarea
                                 type="text"
                                 id="message"
                                 name="message"
                                 required
                                 className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary resize-none"
                                 placeholder="Your message"
                                 />
                            </div>

                            <button type="submit" 
                            
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2 ")} > Send Message <Send /> </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;