// "use client"

// import { useState } from "react"
// import { Button } from "../components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
// import { Input } from "../components/ui/input"
// import { Textarea } from "../components/ui/textarea"
// import { MapPin, Phone, Mail, Clock } from "lucide-react"
// import Navigation from "../components/Navigation"
// import PageHeader from "../components/PageHeader"

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission
//     console.log("Form submitted:", formData)
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navigation />

//       <PageHeader
//         title="Get in Touch"
//         subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
//       />

//       {/* Contact Content */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-3xl font-bold mb-8 text-balance">Visit Our Gallery</h2>

//                 <div className="space-y-6">
//                   <div className="flex items-start space-x-4">
//                     <MapPin className="h-6 w-6 text-purple-400 mt-1" />
//                     <div>
//                       <h3 className="font-semibold mb-1">Address</h3>
//                       <p className="text-gray-300">
//                         123 Art District Avenue
//                         <br />
//                         Downtown Cultural Quarter
//                         <br />
//                         New York, NY 10001
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <Phone className="h-6 w-6 text-purple-400 mt-1" />
//                     <div>
//                       <h3 className="font-semibold mb-1">Phone</h3>
//                       <p className="text-gray-300">+1 (555) 123-4567</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <Mail className="h-6 w-6 text-purple-400 mt-1" />
//                     <div>
//                       <h3 className="font-semibold mb-1">Email</h3>
//                       <p className="text-gray-300">info@artisangallery.com</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <Clock className="h-6 w-6 text-purple-400 mt-1" />
//                     <div>
//                       <h3 className="font-semibold mb-1">Hours</h3>
//                       <div className="text-gray-300 space-y-1">
//                         <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
//                         <p>Saturday: 10:00 AM - 6:00 PM</p>
//                         <p>Sunday: 12:00 PM - 5:00 PM</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Map */}
//               <Card className="glass-card overflow-hidden">
//                 <CardContent className="p-0">
//                   <div className="h-64 bg-gray-800 relative">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635959542742!5m2!1sen!2sus"
//                       width="100%"
//                       height="100%"
//                       style={{ border: 0 }}
//                       allowFullScreen
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                       className="absolute inset-0"
//                     />
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Contact Form */}
//             <div>
//               <Card className="glass-card">
//                 <CardHeader>
//                   <CardTitle className="text-2xl text-balance">Send us a Message</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-2">
//                         Name
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         type="text"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="glass"
//                         placeholder="Your full name"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-2">
//                         Email
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="glass"
//                         placeholder="your.email@example.com"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="message" className="block text-sm font-medium mb-2">
//                         Message
//                       </label>
//                       <Textarea
//                         id="message"
//                         name="message"
//                         required
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="glass min-h-32"
//                         placeholder="Tell us about your inquiry..."
//                       />
//                     </div>

//                     <Button type="submit" className="w-full">
//                       Send Message
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
