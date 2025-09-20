"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { PageHeader } from "@/components/page-header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Page Header */}
      <PageHeader
        title="Get in Touch"
        subtitle="We'd love to hear from you. Visit our gallery or reach out through the details below."
        backgroundImage="/bgGrid.jpg"
      />

      {/* Contact Content */}
      <section className="p-16 px-40 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          {/* Contact Information - Left */}
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl font-bold mb-8 text-purple-500">
              Visit Our Gallery
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-400">
                    Chemmad,
                    <br />
                    Tirurangadi, Trikkulam
                    <br />
                    Kerala,India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400">8848581159</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">mastersureshcmd@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <div className="text-gray-400 space-y-1">
                    <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: 12:00 PM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map - Right */}
          <div className="flex-1 my-20 ms-30">
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15663.651318818473!2d75.90100037470924!3d11.045162236314098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64d6ff35d2bcb%3A0xf64db394a0c964c1!2sChemmad%2C%20Kerala%20676306!5e0!3m2!1sen!2sin!4v1758368572374!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
