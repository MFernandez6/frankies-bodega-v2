"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Truck, Clock, Shield, Heart, Zap, Star } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Lightning Fast Delivery",
    description:
      "Get your groceries delivered in under 30 minutes. Frankie&apos;s got the zoomies for quick service!",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Clock,
    title: "24/7 Convenience",
    description:
      "Shop anytime, day or night. We're always here when you need us, just like a loyal companion.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Shield,
    title: "Fresh & Safe",
    description:
      "All products are carefully selected and stored with the same care Frankie gives to his favorite toys.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Supporting local farmers and businesses. We believe in building a stronger neighborhood together.",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Zap,
    title: "Smart Shopping",
    description:
      "AI-powered recommendations and smart lists that learn your preferences, just like Frankie knows your routine.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: Star,
    title: "Premium Service",
    description:
      "Exceptional customer service with a personal touch. Every order comes with Frankie&apos;s signature wag of approval.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Frankie's Bodega?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine the warmth of a neighborhood bodega with the convenience
            of modern technology, all delivered with the enthusiasm of a golden
            retriever greeting their favorite human.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon
                      className={`w-8 h-8 ${feature.iconColor} fill-current`}
                    />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of happy customers who&apos;ve made Frankie&apos;s
              Bodega their go-to for all their shopping needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Shopping Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
