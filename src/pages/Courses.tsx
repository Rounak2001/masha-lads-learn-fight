import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const courses: Course[] = [
  {
    id: "girls-defense",
    title: "Girls Specific Defense",
    description: "Learn specialized self-defense techniques designed specifically for women's safety and empowerment.",
    price: 199,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: "street-defense",
    title: "Street Fight Defense",
    description: "Master practical techniques for real-world street situations and conflict avoidance.",
    price: 199,
    thumbnail: "https://images.unsplash.com/photo-1581092162384-8987c1d64718",
  },
  {
    id: "basic-defense",
    title: "Basic Self Defense",
    description: "Learn fundamental self-defense techniques and build a strong foundation in martial arts.",
    price: 199,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    id: "weapon-defense",
    title: "Weapon Defense Techniques",
    description: "Learn how to defend against common weapons and stay safe in threatening situations.",
    price: 199,
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
  },
  {
    id: "fitness-combat",
    title: "Combat Fitness",
    description: "Combine martial arts with fitness training for a complete body and mind workout.",
    price: 199,
    thumbnail: "https://images.unsplash.com/photo-1581092160562-6087ddc18fb9",
  }
];

const Courses = () => {
  const { toast } = useToast();
  const [referralCode, setReferralCode] = useState("");

  const handlePayment = async (course: Course) => {
    try {
      // Initialize Razorpay payment
      const options = {
        key: "rzp_test_your_key", // Replace with actual test key
        amount: course.price * 100, // Amount in paise
        currency: "INR",
        name: "MashaLads",
        description: "Access to All Self Defense Courses",
        handler: function (response: any) {
          console.log("Payment successful:", response);
          handleSuccessfulPayment(course, response.razorpay_payment_id);
        },
        prefill: {
          name: "Student Name",
          email: "student@example.com",
        },
        theme: {
          color: "#DC2626",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment failed:", error);
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment.",
        variant: "destructive",
      });
    }
  };

  const handleSuccessfulPayment = (course: Course, paymentId: string) => {
    // Handle successful payment and referral
    if (referralCode) {
      const commission = 99; // Fixed commission for all courses
      console.log("Processing referral commission:", commission);
      // Here you would typically make an API call to credit the referrer
    }

    toast({
      title: "Enrollment Successful!",
      description: "You now have access to all our self-defense courses!",
    });
  };

  return (
    <div className="min-h-screen bg-martial-dark">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Our Courses</h1>
        
        <div className="mb-8">
          <div className="bg-martial-red/10 p-4 rounded-lg mb-6">
            <p className="text-white text-lg">
              <span className="font-bold">Special Offer:</span> Get access to ALL courses for just ₹199/lifetime!
            </p>
          </div>
          <input
            type="text"
            placeholder="Enter Referral Code (Optional)"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white border border-martial-red focus:outline-none focus:ring-2 focus:ring-martial-red"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="bg-martial-dark border-martial-red">
              <CardHeader>
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle className="text-2xl font-bold text-white">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-martial-red font-bold">
                    Included in ₹199 package
                  </span>
                  <Button
                    onClick={() => handlePayment(course)}
                    className="bg-martial-red hover:bg-red-700"
                  >
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;