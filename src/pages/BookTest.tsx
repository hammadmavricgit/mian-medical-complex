import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { 
  Calendar,
  Clock,
  Home,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  CheckCircle
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().min(1, "Age is required"),
  gender: z.string().min(1, "Please select gender"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  address: z.string().min(10, "Please enter complete address"),
  collectionType: z.string().min(1, "Please select collection type"),
  preferredDate: z.string().min(1, "Please select preferred date"),
  preferredTime: z.string().min(1, "Please select preferred time"),
  tests: z.array(z.string()).min(1, "Please select at least one test"),
});

const BookTest = () => {
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      collectionType: "home",
      preferredDate: "",
      preferredTime: "",
      tests: [],
    },
  });

  const availableTests = [
    { id: "cbc", name: "Complete Blood Count (CBC)", price: 299 },
    { id: "lipid", name: "Lipid Profile", price: 599 },
    { id: "thyroid", name: "Thyroid Profile", price: 899 },
    { id: "hba1c", name: "HbA1c (Diabetes)", price: 449 },
    { id: "lft", name: "Liver Function Test", price: 699 },
    { id: "kft", name: "Kidney Function Test", price: 649 },
    { id: "vitd", name: "Vitamin D", price: 899 },
    { id: "vitb12", name: "Vitamin B12", price: 749 },
  ];

  const timeSlots = [
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
  ];

  const handleTestSelection = (testId: string, checked: boolean) => {
    let newSelectedTests = [...selectedTests];
    if (checked) {
      newSelectedTests.push(testId);
    } else {
      newSelectedTests = newSelectedTests.filter(id => id !== testId);
    }
    setSelectedTests(newSelectedTests);
    
    const newTotal = newSelectedTests.reduce((sum, id) => {
      const test = availableTests.find(t => t.id === id);
      return sum + (test?.price || 0);
    }, 0);
    setTotalPrice(newTotal);
    
    form.setValue("tests", newSelectedTests);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Booking Confirmed!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-heading font-bold mb-4">Book Your Test Online</h1>
            <p className="text-xl text-muted-foreground">
              Simple booking process with home collection option
            </p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Personal Information
                </CardTitle>
                <CardDescription>Please provide your basic details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      {...form.register("name")}
                      className="mt-1"
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Age"
                        {...form.register("age")}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select onValueChange={(value) => form.setValue("gender", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...form.register("phone")}
                        className="pl-9"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        {...form.register("email")}
                        className="pl-9"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Test Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Select Tests
                </CardTitle>
                <CardDescription>Choose the tests you want to book</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableTests.map(test => (
                    <div key={test.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted">
                      <Checkbox
                        id={test.id}
                        checked={selectedTests.includes(test.id)}
                        onCheckedChange={(checked) => handleTestSelection(test.id, checked as boolean)}
                      />
                      <Label
                        htmlFor={test.id}
                        className="flex-1 cursor-pointer flex justify-between items-center"
                      >
                        <span>{test.name}</span>
                        <span className="font-semibold text-primary">PKR {test.price}</span>
                      </Label>
                    </div>
                  ))}
                </div>
                {totalPrice > 0 && (
                  <div className="mt-6 p-4 bg-primary-light rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total Amount:</span>
                      <span className="text-2xl font-bold text-primary">PKR {totalPrice}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Collection Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Collection Details
                </CardTitle>
                <CardDescription>Choose how you'd like to give your sample</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Collection Type *</Label>
                  <RadioGroup
                    defaultValue="home"
                    onValueChange={(value) => form.setValue("collectionType", value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <RadioGroupItem value="home" id="home" />
                      <Label htmlFor="home" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4 text-primary" />
                          <span className="font-medium">Home Collection</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Our phlebotomist will visit your home</p>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <RadioGroupItem value="lab" id="lab" />
                      <Label htmlFor="lab" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-primary" />
                          <span className="font-medium">Visit Lab</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Visit our lab for sample collection</p>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {form.watch("collectionType") === "home" && (
                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <textarea
                      id="address"
                      className="w-full mt-1 p-3 border rounded-lg resize-none"
                      rows={3}
                      placeholder="Enter your complete address for home collection"
                      {...form.register("address")}
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <div className="relative mt-1">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="date"
                        type="date"
                        {...form.register("preferredDate")}
                        className="pl-9"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time Slot *</Label>
                    <Select onValueChange={(value) => form.setValue("preferredTime", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(slot => (
                          <SelectItem key={slot} value={slot}>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {slot}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Method
                </CardTitle>
                <CardDescription>Choose your preferred payment option</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="cash" className="space-y-3">
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex-1 cursor-pointer">
                      <span className="font-medium">Cash on Collection</span>
                      <p className="text-sm text-muted-foreground">Pay when our phlebotomist arrives</p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="flex-1 cursor-pointer">
                      <span className="font-medium">Online Payment</span>
                      <p className="text-sm text-muted-foreground">Pay now using UPI/Card/NetBanking</p>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button type="submit" variant="hero" size="lg" className="px-8">
                Confirm Booking
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTest;