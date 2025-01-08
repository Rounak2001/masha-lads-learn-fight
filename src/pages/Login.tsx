import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";

const Login = () => {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <Card className="w-full max-w-md bg-martial-dark border-martial-red">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
            <CardDescription className="text-gray-300">Login to access your courses</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="bg-martial-dark text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" className="bg-martial-dark text-white" />
              </div>
              <Button type="submit" className="w-full bg-martial-red hover:bg-martial-red/90">
                Sign In
              </Button>
              <div className="text-center">
                <a href="#" className="text-martial-red hover:underline text-sm">Forgot password?</a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;