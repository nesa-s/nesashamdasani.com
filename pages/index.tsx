import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Head>
        <title>Nesa's Website</title>
        <meta name="description" content="Personal website of Nesa Shamdasani" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Welcome!
          </h1>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <p className="text-xl text-gray-700 leading-relaxed">
              Hey! I'm <span className="font-semibold text-purple-600">Nesa Shamdasani</span>. 
              I'm from NJ, currently studying BME + CS at the University of Michigan.
            </p>

            <div className="mt-8 flex gap-4">
              <a 
                href="#" 
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                My Projects
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors border border-purple-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h2 className="text-xl font-semibold text-purple-600 mb-3">Education</h2>
              <p className="text-gray-700">University of Michigan</p>
              <p className="text-gray-600">Biomedical Engineering & Computer Science</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h2 className="text-xl font-semibold text-purple-600 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'BME'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 