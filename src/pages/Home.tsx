import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, CheckCircle, ArrowRight, Star, MapPin, Clock, Mail } from 'lucide-react';
import { SERVICES, CLINIC_INFO, IMAGES } from '../constants';
import { cn } from '../lib/utils';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-teal-50/50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-600/5 clip-path-hero hidden lg:block" />
          <img
            src={IMAGES.hero}
            alt="Wellness Background"
            className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-20 hidden lg:block clip-path-hero"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-white border border-teal-100 px-4 py-2 rounded-full shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-ping" />
                <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Accepting New Patients</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Heal Naturally. <br />
                <span className="text-teal-600 italic font-serif">Live Fully.</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Experience the power of integrative medicine with Dr. Mostafa Medhati — combining ancient wisdom with modern science to restore your health and vitality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/20 active:scale-95"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 border-2 border-teal-100 px-8 py-4 rounded-full text-lg font-bold hover:border-teal-600 transition-all active:scale-95"
                >
                  Explore Services
                </a>
              </div>
              <div className="flex items-center gap-8 pt-4 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">20+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Years Exp.</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">5k+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Patients Helped</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">4.9</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Google Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={IMAGES.drMedhati}
                  alt="Dr. Mostafa Medhati"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Cards */}
              <div className="absolute -top-10 -right-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Top Rated Care</p>
                    <p className="text-xs text-gray-500">Watertown, MA</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                    <Star className="w-6 h-6 fill-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Holistic & Natural</p>
                    <p className="text-xs text-gray-500">Mind · Body · Spirit</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-[0.2em] mb-4">What We Offer</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Holistic Healing Services</h3>
            <p className="text-lg text-gray-600">
              Each treatment is personalized to your unique health needs, combining centuries-old wisdom with evidence-informed modern practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-xl">{service.icon === 'needle' ? '🪡' : service.icon === 'leaf' ? '🌿' : service.icon === 'cup' ? '🫙' : service.icon === 'zap' ? '💡' : service.icon === 'sparkles' ? '🎋' : service.icon === 'flame' ? '🔥' : '📡'}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-teal-600 font-bold">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.drMedhati}
                  alt="Dr. Medhati at work"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-teal-50 hidden md:block">
                <p className="text-4xl font-bold text-teal-600 mb-1">20+</p>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Years of Clinical Practice</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-sm font-bold text-teal-600 uppercase tracking-[0.2em]">Your Practitioner</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Dr. Mostafa Medhati
                <span className="block text-xl font-medium text-teal-600 mt-2">PhD, MD, Lic.Ac, MAOM</span>
              </h3>
              <div className="bg-teal-600/5 border-l-4 border-teal-600 p-6 rounded-r-2xl italic text-lg text-teal-900 font-serif">
                "My mission is to help every patient unlock their body's innate power to heal — through a personalized journey that honors the whole person."
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Dr. Medhati brings a rare integration of Western medical training with deep expertise in Traditional Chinese Medicine, Persian healing traditions inspired by Avicenna, and Japanese acupuncture systems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'PhD — Biomedical Sciences',
                  'MD — Medical Doctor',
                  'Lic.Ac — Licensed Acupuncturist',
                  'MAOM — Oriental Medicine',
                  'TCM Practitioner',
                  'Japanese Acupuncture (JAS)'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500" />
                    <span className="text-sm font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all active:scale-95"
                >
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-bold text-teal-600 uppercase tracking-[0.2em] mb-4">Find Us</h2>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Location & Office Hours</h3>
                <p className="text-gray-600 text-lg">
                  Conveniently located in Watertown, MA, our clinic provides a peaceful sanctuary for your healing journey.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {CLINIC_INFO.address}
                    </p>
                    <a href="https://maps.google.com/?q=124+Watertown+St+Watertown+MA" target="_blank" rel="noopener" className="text-teal-600 font-bold text-sm mt-2 inline-block hover:underline">
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 shrink-0">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Office Hours</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-600">
                      {Object.entries(CLINIC_INFO.hours).map(([day, hours]) => (
                        <div key={day} className="contents">
                          <span className="font-bold text-gray-900">{day}</span>
                          <span>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Contact</h4>
                    <p className="text-gray-600">{CLINIC_INFO.phone}</p>
                    <p className="text-gray-600">{CLINIC_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.1!2d-71.183!3d42.364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377!2s124+Watertown+St+Watertown+MA!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AcuMeD Clinic location map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.clinic}
            alt="Clinic Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-teal-900/90 backdrop-blur-sm" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to start your healing journey?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="bg-white text-teal-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-teal-50 transition-all active:scale-95 shadow-2xl"
            >
              Book Your Appointment
            </Link>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="bg-teal-700 text-white border-2 border-teal-500 px-10 py-5 rounded-full text-xl font-bold hover:bg-teal-800 transition-all active:scale-95"
            >
              Call Us: {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
