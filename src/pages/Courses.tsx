import Navigation from "@/components/Navigation";

const Courses = () => {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course cards will be added here later */}
          <div className="bg-martial-dark border border-martial-red rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Self Defense Basics</h2>
            <p className="text-gray-300 mb-4">Learn fundamental self-defense techniques suitable for beginners.</p>
            <span className="text-martial-red font-bold">₹199/month</span>
          </div>
          <div className="bg-martial-dark border border-martial-red rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Advanced Combat</h2>
            <p className="text-gray-300 mb-4">Master advanced fighting techniques and strategies.</p>
            <span className="text-martial-red font-bold">₹1999/month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;