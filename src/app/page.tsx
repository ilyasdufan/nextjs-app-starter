"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BS</span>
              </div>
              <h1 className="font-playfair text-2xl font-bold text-gray-900">
                Bella Syahira
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                Beranda
              </a>
              <a href="#layanan" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                Layanan
              </a>
              <a href="#galeri" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                Galeri
              </a>
              <a href="#tentang" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                Tentang
              </a>
              <a href="#kontak" className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
                Kontak
              </a>
            </nav>
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">
              Konsultasi
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="pt-20 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                  Layanan Jahit Premium
                </Badge>
                <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Jahit Bella
                  <span className="block text-amber-700">Syahira</span>
                </h1>
                <p className="font-cormorant text-xl text-gray-600 leading-relaxed">
                  Menciptakan pakaian berkualitas tinggi dengan sentuhan mewah dan elegan. 
                  Setiap jahitan dibuat dengan ketelitian dan cinta untuk memberikan hasil terbaik.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3">
                  Lihat Layanan
                </Button>
                <Button size="lg" variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50 px-8 py-3">
                  Hubungi Kami
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-amber-700">5+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-amber-700">500+</div>
                  <div className="text-sm text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-amber-700">100%</div>
                  <div className="text-sm text-gray-600">Kualitas Terjamin</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://placehold.co/600x700?text=Elegant+Tailoring+Workspace+with+Luxury+Fabrics+and+Professional+Equipment" 
                  alt="Elegant tailoring workspace with luxury fabrics and professional equipment"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-800 mb-4">
              Layanan Kami
            </Badge>
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Layanan Jahit Premium
            </h2>
            <p className="font-cormorant text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan jahit berkualitas tinggi dengan standar internasional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">J</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                  Jahit Custom
                </h3>
                <p className="text-gray-600 mb-4">
                  Pembuatan pakaian sesuai desain dan ukuran yang Anda inginkan dengan bahan berkualitas premium.
                </p>
                <div className="text-amber-700 font-semibold">
                  Mulai dari Rp 150.000
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                  Alterasi Pakaian
                </h3>
                <p className="text-gray-600 mb-4">
                  Penyesuaian ukuran dan modifikasi pakaian agar pas dan nyaman digunakan.
                </p>
                <div className="text-amber-700 font-semibold">
                  Mulai dari Rp 50.000
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">D</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                  Desain Eksklusif
                </h3>
                <p className="text-gray-600 mb-4">
                  Konsultasi desain dan pembuatan pakaian dengan gaya unik sesuai kepribadian Anda.
                </p>
                <div className="text-amber-700 font-semibold">
                  Mulai dari Rp 300.000
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">K</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                  Kebaya & Gaun
                </h3>
                <p className="text-gray-600 mb-4">
                  Spesialis pembuatan kebaya dan gaun untuk acara formal dengan detail yang sempurna.
                </p>
                <div className="text-amber-700 font-semibold">
                  Mulai dari Rp 500.000
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">S</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                  Seragam & Kemeja
                </h3>
                <p className="text-gray-600 mb-4">
                  Pembuatan seragam kantor, sekolah, dan kemeja formal dengan kualitas jahitan terbaik.
                </p>
                <div className="text-amber-700 font-semibold">
                  Mulai dari Rp 100.000
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">R</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                  Reparasi Pakaian
                </h3>
                <p className="text-gray-600 mb-4">
                  Perbaikan pakaian rusak, penggantian resleting, dan perawatan pakaian kesayangan.
                </p>
                <div className="text-amber-700 font-semibold">
                  Mulai dari Rp 25.000
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-800 mb-4">
              Galeri Karya
            </Badge>
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Hasil Karya Terbaik Kami
            </h2>
            <p className="font-cormorant text-lg text-gray-600 max-w-2xl mx-auto">
              Lihat berbagai hasil jahitan berkualitas tinggi yang telah kami buat untuk pelanggan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://placehold.co/400x500?text=Elegant+Custom+Kebaya+with+Intricate+Embroidery+Details" 
                alt="Elegant custom kebaya with intricate embroidery details"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg font-bold">Kebaya Custom</h3>
                  <p className="text-sm">Bordir tangan eksklusif</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://placehold.co/400x500?text=Professional+Business+Suit+with+Perfect+Tailoring" 
                alt="Professional business suit with perfect tailoring"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg font-bold">Jas Formal</h3>
                  <p className="text-sm">Potongan sempurna</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://placehold.co/400x500?text=Luxury+Evening+Gown+with+Flowing+Fabric" 
                alt="Luxury evening gown with flowing fabric"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg font-bold">Gaun Malam</h3>
                  <p className="text-sm">Desain mewah</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://placehold.co/400x500?text=Traditional+Batik+Dress+with+Modern+Cut" 
                alt="Traditional batik dress with modern cut"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg font-bold">Dress Batik</h3>
                  <p className="text-sm">Tradisional modern</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://placehold.co/400x500?text=Custom+Wedding+Dress+with+Lace+Details" 
                alt="Custom wedding dress with lace details"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg font-bold">Gaun Pengantin</h3>
                  <p className="text-sm">Detail renda mewah</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://placehold.co/400x500?text=Casual+Shirt+Collection+with+Premium+Fabric" 
                alt="Casual shirt collection with premium fabric"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg font-bold">Kemeja Kasual</h3>
                  <p className="text-sm">Bahan premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-800">
                Tentang Kami
              </Badge>
              <h2 className="font-playfair text-4xl font-bold text-gray-900">
                Pengalaman & Keahlian
                <span className="block text-amber-700">Lebih dari 5 Tahun</span>
              </h2>
              <p className="font-cormorant text-lg text-gray-600 leading-relaxed">
                Bella Syahira adalah penjahit berpengalaman dengan dedikasi tinggi dalam menciptakan 
                pakaian berkualitas. Dengan keahlian yang terasah selama bertahun-tahun, kami 
                berkomitmen memberikan layanan terbaik untuk setiap pelanggan.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                  <span className="text-gray-700">Berpengalaman lebih dari 5 tahun</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                  <span className="text-gray-700">Menggunakan bahan berkualitas premium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                  <span className="text-gray-700">Garansi kepuasan pelanggan 100%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                  <span className="text-gray-700">Konsultasi desain gratis</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x600?text=Professional+Tailor+Bella+Syahira+at+Work+with+Measuring+Tools" 
                alt="Professional tailor Bella Syahira at work with measuring tools"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="font-playfair text-2xl font-bold text-amber-700">500+</div>
                  <div className="text-sm text-gray-600">Pelanggan Puas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-800 mb-4">
              Hubungi Kami
            </Badge>
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Konsultasi Gratis
            </h2>
            <p className="font-cormorant text-lg text-gray-600 max-w-2xl mx-auto">
              Siap membantu mewujudkan pakaian impian Anda. Hubungi kami untuk konsultasi gratis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-8 border-0 shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                  Informasi Kontak
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-700 font-bold">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                      <p className="text-gray-600">
                        Jl. Merdeka No. 123<br />
                        Jakarta Pusat, DKI Jakarta 10110
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-700 font-bold">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                      <p className="text-gray-600">+62 812-3456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-700 font-bold">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@jahitbellasyahira.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-700 font-bold">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Jam Operasional</h4>
                      <p className="text-gray-600">
                        Senin - Sabtu: 09:00 - 18:00<br />
                        Minggu: 10:00 - 16:00
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 border-0 shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                Kirim Pesan
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nama@email.com"
                      className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+62 812-3456-7890"
                    className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Ceritakan kebutuhan jahit Anda..."
                    rows={4}
                    className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3"
                  size="lg"
                >
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BS</span>
                </div>
                <h3 className="font-playfair text-xl font-bold">Bella Syahira</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Layanan jahit premium dengan kualitas terbaik dan pelayanan yang memuaskan.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
                  <span>📘</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
                  <span>📷</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
                  <span>📱</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#layanan" className="hover:text-amber-400 transition-colors">Jahit Custom</a></li>
                <li><a href="#layanan" className="hover:text-amber-400 transition-colors">Alterasi Pakaian</a></li>
                <li><a href="#layanan" className="hover:text-amber-400 transition-colors">Desain Eksklusif</a></li>
                <li><a href="#layanan" className="hover:text-amber-400 transition-colors">Kebaya & Gaun</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 Jl. Merdeka No. 123, Jakarta Pusat</li>
                <li>📞 +62 812-3456-7890</li>
                <li>✉️ info@jahitbellasyahira.com</li>
                <li>🕒 Senin - Sabtu: 09:00 - 18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Jahit Bella Syahira. Semua hak dilindungi undang-undang.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
