
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.agreeTerms) {
      toast({
        title: "Terms and Conditions",
        description: "You must agree to the terms and conditions.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration request
    setTimeout(() => {
      console.log('Registration attempt:', formData.email);
      
      // For demo purposes, show success toast
      toast({
        title: "Registration successful",
        description: "Your account has been created.",
      });
      
      setIsLoading(false);
      // In a real app, you would redirect to dashboard or login here
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="name@example.com"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="text-sm font-medium">
          Confirm Password
        </label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
          required
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="agreeTerms" 
          checked={formData.agreeTerms}
          onCheckedChange={handleCheckboxChange}
        />
        <label htmlFor="agreeTerms" className="text-sm">
          I agree to the{" "}
          <a href="#" className="text-consulting-blue hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-consulting-blue hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>
      
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Signing Up...' : 'Create Account'}
      </Button>
      
      <div className="text-center text-sm">
        Already have an account?{' '}
        <Link to="/login" className="text-consulting-blue hover:underline font-medium">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
