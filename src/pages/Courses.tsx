import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useSupabaseClient } from '@supabase/auth-helpers-react';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const Courses = () => {
  const { toast } = useToast();
  const [referralCode, setReferralCode] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const supabase = useSupabaseClient();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*');
      
      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
      toast({
        title: "Error",
        description: "Failed to fetch courses",
        variant: "destructive",
      });
    }
  };

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

  const handleSuccessfulPayment = async (course: Course, paymentId: string) => {
    try {
      // Save enrollment in Supabase
      const { error: enrollmentError } = await supabase
        .from('enrollments')
        .insert([{
          user_id: (await supabase.auth.getUser()).data.user?.id,
          course_id: course.id,
          payment_id: paymentId,
          referral_code: referralCode
        }]);

      if (enrollmentError) throw enrollmentError;

      // Handle referral commission
      if (referralCode) {
        const commission = 99; // Fixed commission for all courses
        console.log("Processing referral commission:", commission);
        // Here you would typically make an API call to credit the referrer
        const { error: referralError } = await supabase
          .from('referrals')
          .insert([{
            referral_code: referralCode,
            commission_amount: commission,
            enrollment_id: paymentId
          }]);

        if (referralError) console.error('Error processing referral:', referralError);
      }

      toast({
        title: "Enrollment Successful!",
        description: "You now have access to all our self-defense courses!",
      });
    } catch (error) {
      console.error('Error processing enrollment:', error);
      toast({
        title: "Error",
        description: "There was an error processing your enrollment.",
        variant: "destructive",
      });
    }
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