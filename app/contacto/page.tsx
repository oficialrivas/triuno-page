import { ContactPremiumNav } from "@/components/contact/ContactPremiumNav";
import { CameraStorySection } from "@/components/contact/CameraStorySection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#050505]">
      <ContactPremiumNav />

      {/* Scrollytelling Story */}
      <CameraStorySection />

      {/* Contact Form */}
      <div id="contact">
        <ContactFormSection />
      </div>
    </main>
  );
}
