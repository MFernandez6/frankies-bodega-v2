"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Heart } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-30"
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-yellow-200 rounded-full opacity-25"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>Your Neighborhood&apos;s Favorite Online Bodega</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Frankie&apos;s Bodega
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Your friendly golden retriever&apos;s online convenience store.
              Fresh groceries, household essentials, and everything you need
              delivered with a wagging tail!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Start Shopping
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-3"
              >
                <Heart className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Fresh Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>24/7 Service</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main hero image with Frankie's photo */}
              <motion.div
                className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl relative overflow-hidden"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="w-48 h-48 lg:w-64 lg:h-64 bg-amber-300 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden shadow-lg"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src="/images/frankie.jpg"
                        alt="Frankie the Golden Retriever"
                        width={256}
                        height={256}
                        className="w-full h-full object-cover rounded-full"
                        priority
                      />
                    </motion.div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-amber-800 mb-3">
                      Frankie
                    </h3>
                    <p className="text-lg lg:text-xl text-amber-700">
                      Your friendly neighborhood shopkeeper
                    </p>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-10 right-10 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                  animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-2xl">🛒</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-10 left-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <span className="text-xl">🥕</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-5 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
                  animate={{ y: [0, -8, 0], rotate: [0, 8, -8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <span className="text-lg">🥛</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
