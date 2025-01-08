import { ArrowRight, Shield, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-martial-dark to-black text-white">
      <Navigation />
      
      <main className="animate-fade-in">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Master the Art of Self-Defense
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn martial arts and self-defense from expert instructors. Join our community and start your journey today.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-martial-red hover:bg-red-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 mx-auto mb-4 text-martial-red" />
              <h3 className="text-xl font-semibold mb-2">Self Defense</h3>
              <p className="text-gray-300">
                Learn practical techniques for real-world situations
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-martial-red" />
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-300">
                Train with experienced martial arts masters
              </p>
            </div>
            <div className="text-center p-6">
              <Target className="w-12 h-12 mx-auto mb-4 text-martial-red" />
              <h3 className="text-xl font-semibold mb-2">Structured Learning</h3>
              <p className="text-gray-300">
                Follow a proven curriculum at your own pace
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-martial-red rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
            <p className="text-lg mb-6">
              Start your martial arts journey with our comprehensive courses
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-martial-red bg-white hover:bg-gray-100 transition-colors"
            >
              View Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;