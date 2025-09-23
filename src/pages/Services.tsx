import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  FlaskConical,
  Heart,
  ShieldCheck,
  Activity,
  Baby,
  Users,
  DollarSign,
  TrendingDown,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tests = [
    {
      id: 1,
      name: "CBC",
      category: "blood",
      price: 250,
      marketPrice: 500,
      description: "Complete blood count",
      turnaround: "4 hours",
    },
    {
      id: 2,
      name: "LFTs",
      category: "blood",
      price: 400,
      marketPrice: 800,
      description: "Liver function tests",
      turnaround: "8 hours",
    },
    {
      id: 3,
      name: "RFTs",
      category: "blood",
      price: 400,
      marketPrice: 800,
      description: "Renal/kidney function tests",
      turnaround: "8 hours",
    },
    {
      id: 4,
      name: "Lipid Profile",
      category: "blood",
      price: 500,
      marketPrice: 1000,
      description: "Cholesterol and triglycerides",
      turnaround: "6 hours",
    },
    {
      id: 5,
      name: "Sugar",
      category: "blood",
      price: 200,
      marketPrice: 300,
      description: "Random/fasting blood sugar",
      turnaround: "2 hours",
    },
    {
      id: 6,
      name: "Uric Acid",
      category: "blood",
      price: 200,
      marketPrice: 400,
      description: "Serum uric acid",
      turnaround: "4 hours",
    },
    {
      id: 7,
      name: "HBsAg",
      category: "infectious",
      price: 200,
      marketPrice: 300,
      description: "Hepatitis B surface antigen",
      turnaround: "24 hours",
    },
    {
      id: 8,
      name: "HCV",
      category: "infectious",
      price: 250,
      marketPrice: 450,
      description: "Hepatitis C screening",
      turnaround: "24 hours",
    },
    {
      id: 9,
      name: "H. pylori",
      category: "infectious",
      price: 250,
      marketPrice: 450,
      description: "Helicobacter pylori screening",
      turnaround: "24 hours",
    },
    {
      id: 10,
      name: "HbA1c",
      category: "blood",
      price: 600,
      marketPrice: 1000,
      description: "3-month average blood sugar",
      turnaround: "6 hours",
    },
    {
      id: 11,
      name: "S/Electrolytes",
      category: "blood",
      price: 700,
      marketPrice: 1200,
      description: "Serum electrolytes",
      turnaround: "6 hours",
    },
    {
      id: 12,
      name: "TB. Screening",
      category: "infectious",
      price: 250,
      marketPrice: 450,
      description: "Tuberculosis screening",
      turnaround: "24 hours",
    },
    {
      id: 13,
      name: "Sputum AFB",
      category: "infectious",
      price: 0,
      marketPrice: 450,
      description: "Acid-fast bacilli (sputum)",
      turnaround: "24 hours",
    },
    {
      id: 14,
      name: "VDRL Screening",
      category: "infectious",
      price: 250,
      marketPrice: 450,
      description: "Syphilis screening (VDRL)",
      turnaround: "24 hours",
    },
    {
      id: 15,
      name: "HIV Screening",
      category: "infectious",
      price: 250,
      marketPrice: 450,
      description: "HIV screening",
      turnaround: "24 hours",
    },
    {
      id: 16,
      name: "Urine/DR",
      category: "urine",
      price: 250,
      marketPrice: 450,
      description: "Urine DR (routine) examination",
      turnaround: "2 hours",
    },
  ];

  const packages = [
    {
      id: 1,
      name: "Package #1",
      icon: Heart,
      tests: [
        "CBC",
        "LFTs",
        "RFTs",
        "Lipid Profile",
        "Sugar",
        "Uric Acid",
        "HBsAg",
        "HCV",
        "H. pylori",
        "HbA1c",
        "S/Electrolytes",
        "TB. Screening",
        "Sputum AFB",
        "VDRL Screening",
        "HIV Screening",
        "Urine/DR",
      ],
      price: 6500,
      marketPrice: 9300,
      popular: true,
    },
    {
      id: 2,
      name: "Package #2 (Basic)",
      icon: ShieldCheck,
      tests: [
        "CBC",
        "Sugar",
        "TG",
        "Cholesterol",
        "Uric Acid",
        "ALT",
        "H. pylori",
        "HBsAg",
        "HCV",
        "Bilirubin",
      ],
      price: 2000,
      marketPrice: 3150,
      popular: false,
    },
    {
      id: 3,
      name: "Package #3",
      icon: Activity,
      tests: ["CBC", "Sugar", "RFTs", "Lipid Profile", "HbA1c"],
      price: 2900,
      marketPrice: 4200,
      popular: false,
    },
    {
      id: 4,
      name: "Package #4 (Pregnancy)",
      icon: Users,
      tests: ["CBC", "Sugar", "Group", "HBsAg", "HCV", "Urine/DR"],
      price: 1300,
      marketPrice: 1750,
      popular: false,
    },
    {
      id: 5,
      name: "Package #5 (Liver Special)",
      icon: Users,
      tests: ["CBC", "LFTs", "RFTs", "PCR (QN)"],
      price: 4500,
      marketPrice: 6400,
      popular: false,
    },
    {
      id: 6,
      name: "Package #6 (Temporary / Travel)",
      icon: Users,
      tests: [
        "Sugar",
        "ALT",
        "AST",
        "Bilirubin",
        "HBsAg",
        "HCV",
        "HIV",
        "VDRL",
      ],
      price: 1800,
      marketPrice: 2500,
      popular: false,
    },
    {
      id: 7,
      name: "Package #7 (Heart Special)",
      icon: Users,
      tests: ["CBC", "Lipid Profile", "Uric Acid", "RFTs"],
      price: 1700,
      marketPrice: 2400,
      popular: false,
    },
  ];

  const filteredTests = tests.filter(
    (test) =>
      test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [
    { value: "all", label: "All Tests" },
    { value: "blood", label: "Blood Tests" },
    { value: "hormone", label: "Hormones" },
    { value: "vitamin", label: "Vitamins" },
    { value: "urine", label: "Urine Tests" },
    { value: "infectious", label: "Infectious Diseases" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Tests & Health Packages
          </h1>
          <p className="text-xl opacity-90 mb-8">
            100+ Laboratory Tests Available at Unbeatable Prices
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>ISO Certified Lab</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Results in 24 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Home Collection Available</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for tests... (e.g., CBC, Thyroid, Vitamin)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        <Tabs defaultValue="tests" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="tests">Individual Tests</TabsTrigger>
            <TabsTrigger value="packages">Health Packages</TabsTrigger>
          </TabsList>

          {/* Individual Tests */}
          <TabsContent value="tests" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTests.map((test) => (
                <Card
                  key={test.id}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{test.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {test.description}
                        </CardDescription>
                      </div>
                      <FlaskConical className="h-5 w-5 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{test.turnaround}</Badge>
                        <Badge variant="outline" className="capitalize">
                          {test.category}
                        </Badge>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-bold text-primary">
                          PKR {test.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          PKR {test.marketPrice}
                        </span>
                        <Badge variant="destructive" className="ml-auto">
                          <TrendingDown className="h-3 w-3 mr-1" />
                          {Math.round(
                            ((test.marketPrice - test.price) /
                              test.marketPrice) *
                              100
                          )}
                          % OFF
                        </Badge>
                      </div>
                      <Button variant="medical" className="w-full" asChild>
                        <Link to="/book-test">Book Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Health Packages */}
          <TabsContent value="packages" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`relative hover:shadow-xl transition-all duration-300 ${
                    pkg.popular ? "border-primary border-2" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge
                        variant="default"
                        className="bg-gradient-to-r from-primary to-accent"
                      >
                        MOST POPULAR
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pt-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary-light">
                        <pkg.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Includes:
                        </p>
                        <div className="space-y-1">
                          {pkg.tests.slice(0, 4).map((test, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle className="h-4 w-4 text-success" />
                              <span>{test}</span>
                            </div>
                          ))}
                          {pkg.tests.length > 4 && (
                            <p className="text-sm text-muted-foreground ml-6">
                              +{pkg.tests.length - 4} more tests
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex items-baseline gap-3 mb-4">
                          <span className="text-3xl font-bold text-primary">
                            PKR {pkg.price}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            PKR {pkg.marketPrice}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge className="bg-success/10 text-success border-success">
                            <DollarSign className="h-3 w-3 mr-1" />
                            Save PKR {pkg.marketPrice - pkg.price}
                          </Badge>
                        </div>
                        <Button
                          variant={pkg.popular ? "hero" : "medical"}
                          className="w-full"
                          asChild
                        >
                          <Link to="/book-test">Book Package</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Price Comparison Section */}
        <section className="bg-gradient-to-r from-primary-light to-accent-light rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Why Choose Our Lab?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6">
              <TrendingDown className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                40-60% Lower Prices
              </h3>
              <p className="text-sm text-muted-foreground">
                Compared to other diagnostic centers
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                100% Accurate Results
              </h3>
              <p className="text-sm text-muted-foreground">
                Latest machines with quality control
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Quick Turnaround</h3>
              <p className="text-sm text-muted-foreground">
                Most results within 24 hours
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
