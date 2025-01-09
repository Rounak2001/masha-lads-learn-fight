import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";

const Login = () => {
  const supabase = useSupabaseClient();
  const session = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/courses');
    }
  }, [session, navigate]);

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/courses`
        }
      });
      
      if (error) throw error;
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Login Failed",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <Card className="w-full max-w-md bg-martial-dark border-martial-red">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
            <CardDescription className="text-gray-300">Login to access your courses</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleGoogleLogin}
              className="w-full bg-white hover:bg-gray-100 text-black"
            >
              Continue with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;