import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FlaskConical, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  Shield,
  Activity,
  ArrowRight,
  Star
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              ISO Certified Laboratory
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Complete Blood Test at <span className="text-accent-light">Minimum Price</span> with Maximum Accuracy
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Latest machines, experienced technologists, and results within 24 hours. 
              Save up to 60% on all laboratory tests.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="medical" size="lg" asChild>
                <Link to="/book-test">Book Test Online</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/services">View All Tests</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "50,000+", label: "Happy Patients" },
              { icon: CheckCircle, value: "100+", label: "Tests Available" },
              { icon: Clock, value: "24 hrs", label: "Result Delivery" },
              { icon: DollarSign, value: "60%", label: "Cost Savings" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tests */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Popular Health Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Complete Blood Count", price: 299, mrp: 500, time: "4 hours" },
              { name: "Thyroid Profile", price: 899, mrp: 1400, time: "8 hours" },
              { name: "Full Body Checkup", price: 3999, mrp: 6500, time: "24 hours" }
            ].map((test, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <FlaskConical className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{test.name}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-primary">PKR {test.price}</span>
                    <span className="text-sm line-through text-muted-foreground">PKR {test.mrp}</span>
                  </div>
                  <Badge variant="secondary" className="mb-4">{test.time} delivery</Badge>
                  <Button variant="medical" className="w-full" asChild>
                    <Link to="/book-test">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-primary-light to-accent-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Choose MMC?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Latest Technology",
                desc: "Automated analyzers and PCR machines for accurate results"
              },
              {
                icon: Activity,
                title: "Expert Team",
                desc: "Experienced pathologists and certified technologists"
              },
              {
                icon: DollarSign,
                title: "Affordable Pricing",
                desc: "Lowest prices with no compromise on quality"
              }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex p-4 rounded-full bg-white mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Book Your Test?</h2>
          <p className="text-xl mb-8 opacity-90">Get accurate results at unbeatable prices</p>
          <Button variant="medical" size="lg" asChild>
            <Link to="/book-test">
              Book Test Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;