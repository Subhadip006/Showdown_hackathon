"use client"
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  LineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import {
  CircleDollarSign,
  FileText,
  BarChart3,
  Send,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for charts
  const monthlyData = [
    { month: 'Jan', requests: 4, approved: 3, value: 50000 },
    { month: 'Feb', requests: 6, approved: 4, value: 75000 },
    { month: 'Mar', requests: 5, approved: 3, value: 60000 },
  ];

  // Sample applications data
  const applications = [
    {
      id: 1,
      type: 'Invoice Financing',
      amount: 50000,
      status: 'Pending',
      date: '2025-01-15',
      institution: 'ABC Bank'
    },
    {
      id: 2,
      type: 'Purchase Order Finance',
      amount: 75000,
      status: 'Approved',
      date: '2025-01-10',
      institution: 'XYZ Finance'
    },
  ];

  // Sample offers data
  const offers = [
    {
      id: 1,
      institution: 'ABC Bank',
      product: 'Invoice Financing',
      interestRate: '5.5%',
      maxAmount: 100000,
      tenure: '90 days'
    },
    {
      id: 2,
      institution: 'XYZ Finance',
      product: 'Trade Credit',
      interestRate: '6.0%',
      maxAmount: 150000,
      tenure: '120 days'
    },
  ];

  const getStatusColor = (status: any) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      case 'rejected':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Trade Finance Dashboard</h1>
            <p className="text-gray-500">Manage your trade finance applications and analytics</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Send className="mr-2 h-4 w-4" /> New Application
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Total Requests', value: '15', icon: FileText, color: 'bg-blue-500' },
            { title: 'Approved', value: '10', icon: CheckCircle, color: 'bg-green-500' },
            { title: 'Pending', value: '3', icon: Clock, color: 'bg-yellow-500' },
            { title: 'Total Value', value: '$185,000', icon: CircleDollarSign, color: 'bg-purple-500' }
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex items-center p-6">
                <div className={`${stat.color} p-3 rounded-lg mr-4`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="offers">Available Offers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
                <CardDescription>Your trade finance activity over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Track your trade finance applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="divide-y">
                  {applications.map((app) => (
                    <div key={app.id} className="py-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{app.type}</h4>
                        <p className="text-sm text-gray-500">{app.institution} • {app.date}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-medium">${app.amount.toLocaleString()}</span>
                        <span className={`${getStatusColor(app.status)} font-medium`}>
                          {app.status}
                        </span>
                        <Button variant="outline">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="offers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Available Finance Offers</CardTitle>
                <CardDescription>Current offers from financial institutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {offers.map((offer) => (
                    <Card key={offer.id}>
                      <CardContent className="p-6">
                        <h4 className="font-bold text-lg mb-2">{offer.institution}</h4>
                        <div className="space-y-2">
                          <p><span className="text-gray-500">Product:</span> {offer.product}</p>
                          <p><span className="text-gray-500">Interest Rate:</span> {offer.interestRate}</p>
                          <p><span className="text-gray-500">Maximum Amount:</span> ${offer.maxAmount.toLocaleString()}</p>
                          <p><span className="text-gray-500">Tenure:</span> {offer.tenure}</p>
                        </div>
                        <Button className="w-full mt-4">Apply Now</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Application Analytics</CardTitle>
                <CardDescription>Your application success metrics</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="requests" fill="#8884d8" name="Total Requests" />
                    <Bar dataKey="approved" fill="#82ca9d" name="Approved" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;