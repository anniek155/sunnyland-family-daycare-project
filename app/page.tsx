import { Heart, Users, Clock, BookOpen, Star, Phone, Mail, MapPin, Baby } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import RiseOnScroll from '@/components/RiseOnScroll';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 sm:pt-10 md:pt-14 pb-2">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="rise text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-gray-800 px-4" style={{ animationDelay: '0.1s' }}>
              Where Little Hearts <span className="text-orange-500">Grow &amp; Learn</span>
            </h1>
            <p className="rise text-lg sm:text-xl text-gray-600 mb-2 sm:mb-3 max-w-2xl mx-auto px-4" style={{ animationDelay: '0.35s' }}>
              Loving care in a safe, home-like setting
            </p>
          </div>

          {/* Kids illustration */}
          <div className="flex justify-center my-2 sm:my-3">
            <Image src="/images/kids.png" alt="Happy children" width={500} height={300} className="w-64 sm:w-80 md:w-96 h-auto mix-blend-multiply" />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8 sm:mb-12">
            <div className="flex-1 text-center md:text-left">
              <RiseOnScroll>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-800 px-4 md:px-0">
                  Welcome to <span className="text-yellow-500">Sunnyland Family Daycare</span>
                </h2>
              </RiseOnScroll>
              <RiseOnScroll delay={150}>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl px-4 md:px-0">
                  We&apos;re a licensed family daycare dedicated to providing exceptional care and early childhood education in a home-like setting.
                </p>
              </RiseOnScroll>
            </div>
            <div className="flex-shrink-0">
              <Image src="/images/house.png" alt="Warm home environment" width={320} height={240} className="w-56 sm:w-72 h-auto mix-blend-multiply" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <RiseOnScroll delay={0}>
              <div className="p-6 sm:p-8 text-center">
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mb-4 mx-auto" />
                <h3 className="font-pacifico text-xl sm:text-2xl text-gray-800">Monday–Friday<br />7:00 AM – 6:00 PM</h3>
              </div>
            </RiseOnScroll>

            <RiseOnScroll delay={150}>
              <div className="p-6 sm:p-8 text-center">
                <Baby className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500 mb-4 mx-auto" />
                <h3 className="font-pacifico text-xl sm:text-2xl text-gray-800">Ages 6 Months – 5 Years</h3>
              </div>
            </RiseOnScroll>

            <RiseOnScroll delay={300} className="sm:col-span-2 md:col-span-1">
              <div className="p-6 sm:p-8 text-center">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mb-4 mx-auto" />
                <h3 className="font-pacifico text-xl sm:text-2xl text-gray-800">Family Atmosphere</h3>
              </div>
            </RiseOnScroll>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-12 sm:py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <RiseOnScroll>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-800">Our Daily Programs</h2>
            </RiseOnScroll>
            <RiseOnScroll delay={150}>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">Engaging activities designed for every stage of development</p>
            </RiseOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-5 rounded-3xl shadow-md text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl mb-3 text-gray-800">Creative Play &amp; Arts</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start justify-center"><span className="text-yellow-500 mr-2">✓</span>Arts and crafts projects that spark imagination</li>
                <li className="flex items-start justify-center"><span className="text-yellow-500 mr-2">✓</span>Music, singing, and movement activities</li>
                <li className="flex items-start justify-center"><span className="text-yellow-500 mr-2">✓</span>Sensory play and exploration</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-3xl shadow-md text-center">
              <div className="flex justify-center items-center gap-3 mb-3">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <Image src="/images/abc-block.png" alt="" width={64} height={64} className="w-14 h-14 object-contain mix-blend-multiply" />
              </div>
              <h3 className="text-xl sm:text-2xl mb-3 text-gray-800">Early Learning</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start justify-center"><span className="text-green-500 mr-2">✓</span>Letter recognition and phonics</li>
                <li className="flex items-start justify-center"><span className="text-green-500 mr-2">✓</span>Numbers, shapes, and colors</li>
                <li className="flex items-start justify-center"><span className="text-green-500 mr-2">✓</span>Story time and language development</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-3xl shadow-md text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl mb-3 text-gray-800">Social Development</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start justify-center"><span className="text-blue-500 mr-2">✓</span>Building friendships and sharing</li>
                <li className="flex items-start justify-center"><span className="text-blue-500 mr-2">✓</span>Cooperative play and teamwork</li>
                <li className="flex items-start justify-center"><span className="text-blue-500 mr-2">✓</span>Emotional intelligence and empathy</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-3xl shadow-md text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl mb-3 text-gray-800">Outdoor Adventures</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start justify-center"><span className="text-purple-500 mr-2">✓</span>Safe outdoor play area</li>
                <li className="flex items-start justify-center"><span className="text-purple-500 mr-2">✓</span>Nature exploration and discovery</li>
                <li className="flex items-start justify-center"><span className="text-purple-500 mr-2">✓</span>Physical activities and motor skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-0">
            <RiseOnScroll>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 text-gray-800">
                Why Families <span className="text-orange-500">Love Us</span>
              </h2>
            </RiseOnScroll>
          </div>

          {/* Four reasons image */}
          <RiseOnScroll>
            <div className="flex justify-center mb-8">
              <Image src="/images/four-reasons.png" alt="Four reasons why families love us" width={900} height={300} className="w-full max-w-3xl h-auto mix-blend-multiply" />
            </div>
          </RiseOnScroll>

          {/* Photos at bottom */}
          <div className="flex gap-4">
            <div className="w-1/2 h-[380px] rounded-3xl overflow-hidden shadow-lg">
              <Image src="/images/image0.jpeg" alt="Child playing outdoors" width={600} height={700} className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 h-[380px] rounded-3xl overflow-hidden shadow-lg">
              <Image src="/images/image1.jpeg" alt="Kids playing on slide" width={600} height={700} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <RiseOnScroll>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-800">Get in Touch</h2>
            </RiseOnScroll>
            <RiseOnScroll delay={150}>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">We&apos;d love to meet you and your little one!</p>
            </RiseOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl sm:text-2xl mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Call us</p>
                    <p className="text-base sm:text-lg text-gray-800">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Email us</p>
                    <p className="text-base sm:text-lg text-gray-800 break-words">hello@sunnylanddaycare.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Visit us</p>
                    <p className="text-base sm:text-lg text-gray-800">123 Sunshine Lane<br />Happy Town, ST 12345</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl">
                <h4 className="text-base sm:text-lg mb-3 text-gray-800">Operating Hours</h4>
                <p className="text-sm sm:text-base text-gray-700">Monday – Friday: 7:00 AM – 6:00 PM</p>
                <p className="text-sm sm:text-base text-gray-700">Saturday – Sunday: Closed</p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl sm:text-2xl mb-6 text-gray-800">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm sm:text-base">Parent&apos;s Name</label>
                  <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm sm:text-base">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm sm:text-base">Phone</label>
                  <input type="tel" placeholder="(555) 123-4567" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm sm:text-base">Child&apos;s Age</label>
                  <input type="text" placeholder="e.g., 2 years old" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm sm:text-base">Message</label>
                  <textarea rows={4} placeholder="Tell us about your childcare needs..." className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors text-sm sm:text-base"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white py-4 rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all shadow-lg text-sm sm:text-base">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Image src="/images/logo.png" alt="Sunnyland Family Daycare" width={160} height={64} className="h-12 sm:h-16 w-auto mx-auto mb-4 sm:mb-6 brightness-0 invert" />
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Creating bright futures, one child at a time</p>
            <p className="text-gray-400 text-xs sm:text-sm">© 2026 Sunnyland Family Daycare. All rights reserved.</p>
            <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
              <a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a>
              <a href="#programs" className="text-gray-400 hover:text-yellow-400 transition-colors">Programs</a>
              <a href="#why-us" className="text-gray-400 hover:text-yellow-400 transition-colors">Why Us</a>
              <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
