import { useEffect, useState } from "react";
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { useNavigate } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

interface CourseData {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

const Admin = () => {
  const supabase = useSupabaseClient();
  const session = useSession();
  const navigate = useNavigate();
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [newCourse, setNewCourse] = useState<Partial<CourseData>>({});

  useEffect(() => {
    if (!session) {
      navigate('/login');
      return;
    }
    fetchCourses();
  }, [session, navigate]);

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

  const handleAddCourse = async () => {
    try {
      const { error } = await supabase
        .from('courses')
        .insert([{
          ...newCourse,
          price: 199 // All courses are included in the ₹199 package
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Course added successfully",
      });

      setNewCourse({});
      fetchCourses();
    } catch (error) {
      console.error('Error adding course:', error);
      toast({
        title: "Error",
        description: "Failed to add course",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-martial-dark">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Admin Dashboard</h1>

        <Card className="bg-martial-dark border-martial-red mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Add New Course</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title" className="text-white">Course Title</Label>
              <Input
                id="title"
                value={newCourse.title || ''}
                onChange={(e) => setNewCourse(prev => ({ ...prev, title: e.target.value }))}
                className="bg-martial-dark text-white"
              />
            </div>
            <div>
              <Label htmlFor="description" className="text-white">Description</Label>
              <Input
                id="description"
                value={newCourse.description || ''}
                onChange={(e) => setNewCourse(prev => ({ ...prev, description: e.target.value }))}
                className="bg-martial-dark text-white"
              />
            </div>
            <div>
              <Label htmlFor="thumbnail" className="text-white">Thumbnail URL</Label>
              <Input
                id="thumbnail"
                value={newCourse.thumbnail || ''}
                onChange={(e) => setNewCourse(prev => ({ ...prev, thumbnail: e.target.value }))}
                className="bg-martial-dark text-white"
              />
            </div>
            <Button onClick={handleAddCourse} className="bg-martial-red hover:bg-martial-red/90">
              Add Course
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="bg-martial-dark border-martial-red">
              <CardHeader>
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle className="text-xl text-white">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;