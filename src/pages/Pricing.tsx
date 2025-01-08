import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-martial-dark border-martial-red">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Basic Access</CardTitle>
              <CardDescription className="text-gray-300">Perfect for self-paced learning</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-martial-red mb-4">₹199/month</p>
              <ul className="space-y-2 text-white">
                <li>✓ Full access to recorded courses</li>
                <li>✓ Exercise routines</li>
                <li>✓ Basic training materials</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-martial-red hover:bg-martial-red/90">Get Started</Button>
            </CardFooter>
          </Card>

          <Card className="bg-martial-dark border-martial-red">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Premium Access</CardTitle>
              <CardDescription className="text-gray-300">For serious martial artists</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-martial-red mb-4">₹1999/month</p>
              <ul className="space-y-2 text-white">
                <li>✓ All Basic Access features</li>
                <li>✓ Live one-on-one sessions</li>
                <li>✓ Personal doubt clearing</li>
                <li>✓ Priority support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-martial-red hover:bg-martial-red/90">Get Premium</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;