import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, ShieldCheck } from "lucide-react";
import DrAdeel from "@/assets/DrAdeel.jpg";
import DrAhsan from "@/assets/DrAhsan.jpg";
import DrMuneeb from "@/assets/DrMuneeb.jpg";
import DrSalman from "@/assets/DrSalman.jpg";
import DrShahab from "@/assets/DrShahab.jpg";
import DrUmer from "@/assets/DrUmer.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-center mb-12">
          About MediLab Diagnostics
        </h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground text-center">
            Established in 2010, MediLab Diagnostics has been serving the
            community with accurate, affordable, and timely diagnostic services.
            Our state-of-the-art laboratory is equipped with the latest
            technology and operated by experienced professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Users, label: "50,000+", desc: "Happy Patients" },
            { icon: Clock, label: "24 Hours", desc: "Result Delivery" },
            { icon: ShieldCheck, label: "100%", desc: "Accuracy Rate" },
          ].map((stat, idx) => (
            <Card key={idx} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold">{stat.label}</h3>
                <p className="text-muted-foreground">{stat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Doctors Section */}
        <section className="py-12">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">
            Our Doctors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { img: DrAdeel, name: "Dr. Adeel", speciality: "ENT Specialist" },
              {
                img: DrAhsan,
                name: "Dr. Ahsan",
                speciality: "(FCPS Dermatologist",
              },
              {
                img: DrMuneeb,
                name: "Dr. Muneeb",
                speciality: "M.D Neurologist",
              },
              {
                img: DrSalman,
                name: "Dr. Salman",
                speciality: "Consultant Cardiologist",
              },
              {
                img: DrShahab,
                name: "Dr. Shahab",
                speciality: "MCPS Psychiatrist",
              },
              { img: DrUmer, name: "Dr. Umer", speciality: "Physician" },
              {
                img: null,
                name: "Dr. Bilawal",
                speciality: "M.D Cardiologist",
              },
            ].map((doc, idx) => (
              <Card key={idx} className="overflow-hidden text-center">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-40 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold">{doc.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {doc.speciality}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
