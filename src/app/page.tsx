"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Star, Sparkles, Calendar } from "lucide-react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="plain"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Haven Hotel"
          button={{
            text: "Book Now",
            href: "booking",
            props: {
              className: "primary-button",
              textClassName: "text-background"
            }
          }}
          buttonClassName="primary-button"
          buttonTextClassName="text-background"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="Experience Luxury Redefined"
          description="Discover unparalleled comfort and elegance at Grand Haven Hotel, where every detail is crafted for your perfect stay"
          tag="Welcome"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "booking" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297506993-c3fuem6q.jpg",
              imageAlt: "Luxury hotel lobby"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297507695-p8wd1bfz.jpg",
              imageAlt: "Modern hotel room"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297508613-by8q345j.jpg",
              imageAlt: "Hotel swimming pool"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297509283-q8qk2yok.jpg",
              imageAlt: "Hotel restaurant"
            }
          ]}
          stackedVariant="card"
          imagePosition="right"
          titleClassName="text-4xl md:text-6xl font-bold"
          descriptionClassName="text-lg md:text-xl text-foreground/80"
          buttonClassName="primary-button"
          buttonTextClassName="text-background"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Hospitality Excellence"
          description={[
            "At Grand Haven Hotel, we redefine luxury hospitality with world-class service and attention to every detail.",
            "Our commitment to creating unforgettable experiences has made us a premier destination for discerning travelers worldwide."
          ]}
          buttons={[{ text: "Our Story", href: "about" }]}
          showBorder={true}
          titleClassName="text-6xl md:text-7xl font-bold"
          descriptionClassName="text-lg md:text-xl text-foreground/80"
          buttonClassName="primary-button"
          buttonTextClassName="text-background"
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardThree
          title="Exceptional Amenities"
          description="Discover our world-class facilities and services designed to make your stay unforgettable"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              id: "01",
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, recommendations, and special requests",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297510825-ex0e0tam.jpg",
              imageAlt: "Hotel concierge service"
            },
            {
              id: "02",
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence at our award-winning restaurant featuring international cuisine and local specialties",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297511473-75qs039o.jpg",
              imageAlt: "Hotel restaurant"
            },
            {
              id: "03",
              title: "Fitness & Wellness Center",
              description: "Stay active in our state-of-the-art fitness center with modern equipment and personal training services",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297512123-e69r3izw.jpg",
              imageAlt: "Hotel fitness center"
            },
            {
              id: "04",
              title: "Luxury Spa Services",
              description: "Rejuvenate your mind and body with our comprehensive spa treatments and wellness programs",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297512985-qvl0gnzd.jpg",
              imageAlt: "Hotel spa"
            }
          ]}
          textBoxTitleClassName="text-3xl md:text-4xl font-bold"
          textBoxDescriptionClassName="text-lg text-foreground/80"
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our carefully designed rooms and suites, each offering comfort and elegance"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "suite",
              name: "Presidential Suite",
              price: "$599/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297513830-vx8e505r.jpg",
              imageAlt: "Presidential suite",
              onProductClick: () => window.open('https://booking.com', '_blank')
            },
            {
              id: "deluxe",
              name: "Deluxe Room",
              price: "$299/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297514337-ftdotau0.jpg",
              imageAlt: "Deluxe room",
              onProductClick: () => window.open('https://booking.com', '_blank')
            },
            {
              id: "standard",
              name: "Standard Room",
              price: "$199/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297514944-6vqi80y3.jpg",
              imageAlt: "Standard room",
              onProductClick: () => window.open('https://booking.com', '_blank')
            }
          ]}
          textBoxTitleClassName="text-3xl md:text-4xl font-bold"
          textBoxDescriptionClassName="text-lg text-foreground/80"
          cardNameClassName="text-lg font-semibold"
          cardPriceClassName="text-xl font-bold text-primary-cta"
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Hotel Packages"
          description="Choose the perfect package for your stay with exclusive benefits and services"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "weekend",
              badge: "Popular Choice",
              badgeIcon: Sparkles,
              price: "$399",
              subtitle: "Perfect for weekend getaways",
              buttons: [
                {
                  text: "Book Package",
                  onClick: () => console.log('Weekend package')
                },
                {
                  text: "Learn More",
                  href: "packages"
                }
              ],
              features: [
                "2 nights accommodation",
                "Complimentary breakfast",
                "Late checkout",
                "Welcome amenities"
              ]
            },
            {
              id: "business",
              badge: "Business Travel",
              price: "$499",
              subtitle: "Ideal for business travelers",
              buttons: [
                {
                  text: "Book Package",
                  onClick: () => console.log('Business package')
                },
                {
                  text: "View Details",
                  href: "business"
                }
              ],
              features: [
                "3 nights accommodation",
                "Business center access",
                "Airport transfer",
                "Meeting room credits"
              ]
            }
          ]}
          textBoxTitleClassName="text-3xl md:text-4xl font-bold"
          textBoxDescriptionClassName="text-lg text-foreground/80"
          badgeClassName="primary-button text-background"
          priceClassName="text-4xl font-bold"
          subtitleClassName="text-foreground/80"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Discover what our guests say about their memorable stays"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Travel Blogger",
              testimonial: "The attention to detail and impeccable service at Grand Haven Hotel exceeded all my expectations. Every moment was pure luxury.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297515681-fakt0f3z.png",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Executive",
              testimonial: "Outstanding accommodation with world-class amenities. The concierge service made my business trip seamless and enjoyable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297516372-f6ohvy69.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Vacation Traveler",
              testimonial: "From the elegant rooms to the exceptional dining, this hotel created the perfect romantic getaway for my anniversary celebration.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297517139-8qqku7x9.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Frequent Traveler",
              testimonial: "I've stayed at luxury hotels worldwide, but Grand Haven Hotel stands out with its personalized service and attention to guest comfort.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763297517820-svusn28y.jpg",
              imageAlt: "David Kim"
            }
          ]}
          textBoxTitleClassName="text-3xl md:text-4xl font-bold"
          textBoxDescriptionClassName="text-lg text-foreground/80"
          nameClassName="font-semibold"
          roleClassName="text-foreground/70"
          testimonialClassName="text-foreground/90 italic"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservations"
          title="Ready to Experience Luxury?"
          description="Book your stay at Grand Haven Hotel and discover exceptional hospitality. Our reservation team is ready to assist you."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email for booking updates"
          buttonText="Get Booking Info"
          termsText="By submitting, you agree to receive booking information and special offers from Grand Haven Hotel."
          onSubmit={(email) => console.log('Booking inquiry:', email)}
          tagClassName="primary-button text-background"
          titleClassName="text-3xl md:text-4xl font-bold"
          descriptionClassName="text-lg text-foreground/80"
          buttonClassName="primary-button"
          buttonTextClassName="text-background"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Grand Haven Hotel"
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Spa & Wellness", href: "spa" },
                { label: "Business Center", href: "business" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Location", href: "location" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: "Instagram",
              href: "https://instagram.com/grandhaven",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: "Facebook",
              href: "https://facebook.com/grandhaven",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: "Twitter",
              href: "https://twitter.com/grandhaven",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
          copyrightText="© 2025 Grand Haven Hotel. All rights reserved."
          logoTextClassName="text-2xl font-bold"
          columnTitleClassName="font-semibold text-background"
          columnItemClassName="text-background/80 hover:text-background"
        />
      </div>
    </ThemeProvider>
  );
}