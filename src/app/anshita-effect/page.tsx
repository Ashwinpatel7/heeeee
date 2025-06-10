'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Users, Lightbulb, Smile, HandHeart } from 'lucide-react';
import Link from 'next/link';

export default function AnshitaEffectPage() {

  const effects = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "How I Treat My Family",
      before: "I used to be impatient with my parents, quick to get frustrated when they didn&apos;t understand something.",
      after: "Now I listen with the same patience you showed me. I remember how gently you explained things, and I do the same.",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "How I Handle Friendships",
      before: "I was possessive and demanding, expecting friends to always be available for me.",
      after: &quot;You taught me that real friendship means giving space, respecting boundaries, and being there without suffocating.&quot;,
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "How I Approach Conflicts",
      before: "I would react emotionally, blame others, and never really listen to their side of the story.",
      after: "You showed me the power of pausing, reflecting, and responding with empathy instead of reacting with anger.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "How I Support Others",
      before: "I was so focused on my own problems that I rarely noticed when others were struggling.",
      after: "Your caring nature taught me to check on people, to ask 'how are you really?' and actually listen to the answer.",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "How I Show Kindness",
      before: "Kindness felt forced, something I did because I was supposed to, not because I wanted to.",
      after: "Watching your natural compassion taught me that kindness isn't an act—it's a way of being. Now it flows naturally.",
      color: "from-purple-400 to-violet-400"
    }
  ];

  const rippleEffects = [
    "My sister says I'm a better listener now",
    "My friends feel safer opening up to me",
    "I helped a classmate through a tough time the way you would have",
    "I stopped gossiping because I remembered how you never spoke badly of anyone",
    "I started volunteering because your kindness inspired me to give back",
    "I apologize more genuinely now, the way you taught me accountability matters"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-12 pb-8 px-6 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          <span className="font-handwritten text-purple-600">The Anshita Effect</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          How knowing you changed not just me, but how I treat everyone around me. 
          Your kindness created ripples that touch lives you'll never even know about.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Before/After Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {effects.map((effect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/60"
            >
              <div className={`text-white mb-4 flex justify-center bg-gradient-to-r ${effect.color} w-16 h-16 rounded-full items-center mx-auto`}>
                {effect.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {effect.title}
              </h3>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h4 className="font-semibold text-red-700 mb-2">Before You:</h4>
                  <p className="text-red-600 text-sm leading-relaxed">
                    {effect.before}
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">After You:</h4>
                  <p className="text-green-600 text-sm leading-relaxed">
                    {effect.after}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ripple Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl border border-purple-200"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            The Ripple Effect
          </h2>
          <p className="text-gray-700 text-center mb-8 font-handwritten text-lg">
            Your kindness didn't just change me—it created waves that touched so many others...
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rippleEffects.map((ripple, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                className="bg-white/80 rounded-xl p-4 shadow-md border border-white/60"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">🌊</div>
                  <p className="text-gray-700 text-sm font-handwritten leading-relaxed">
                    {ripple}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-8 text-center"
          >
            <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-gray-800 font-handwritten text-xl leading-relaxed">
                &quot;You probably don&apos;t even realize it, but your kindness lives on in every person I meet,
                every conversation I have, every moment I choose compassion over judgment.
                You made me a better human being, and through me, you&apos;ve touched countless other lives.&quot;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed bottom-8 left-8 z-20"
      >
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
