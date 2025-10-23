
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <main>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Member Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, User!</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button>Account Settings</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Resources</CardTitle>
                <CardDescription>Available documents</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">12</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Consultations</CardTitle>
                <CardDescription>Upcoming sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">2</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Projects</CardTitle>
                <CardDescription>Active engagements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">3</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Messages</CardTitle>
                <CardDescription>Unread notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">5</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest interactions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="flex items-start pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                      <div className="w-2 h-2 mt-2 rounded-full bg-consulting-blue mr-3"></div>
                      <div>
                        <p className="font-medium">Resource Downloaded</p>
                        <p className="text-sm text-gray-500">You downloaded "5G Network Planning Guide"</p>
                        <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
                <CardDescription>Frequently used resources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  Resource Library
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Support Tickets
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Billing & Invoices
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Project Management
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-500">
              Not seeing what you need? <Link to="/contact" className="text-consulting-blue hover:underline">Contact support</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
