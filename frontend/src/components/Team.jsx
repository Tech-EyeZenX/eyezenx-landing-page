import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";


const team = [
    {
        "desigination": "Founder",
        "about": "Healthcare innovator using medical expertise to drive evidence-based R&D and transformative solutions at EyeZenX. Leads product architecture and long-term strategy to shape the future of whole-person care.",
        "name": "Keerthi Easwar",
        "image": "./keerti-profile-pic.jpg",
        "linkedin": "https://www.linkedin.com/in/keerthi-easwar-915124233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
    },
    {
        "desigination": "Founder",
        "about": "Forward thinking Health-tech entrepreneur with a strong foundation in clinical workflows, operational strategy & Business development . Oversees implementation, partner onboarding, and execution across EyeZenX deployments, ensuring a seamless interface between innovation and real-world impact.",
        "name": "Selvamuthukumar",
        "image": "./selvam-profile-pic.jpg",
        "linkedin": "https://www.linkedin.com/in/smkashok/"
    },
    {
        "desigination": "Head of Medical Research",
        "about": "Medical research lead overseeing clinical validation and disease model development. Spearheads translational research across neurological, systemic, and ocular conditions.",
        "name": "Dr. Oveyaa ",
        "image": "Oveyaa-profile-pic.jpg",
        "linkedin": "https://www.linkedin.com/in/oveyaa-eswaran-349469199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
    },
    {
        "desigination": "Consultant Cardiologist & Strategic Advisor",
        "about": "Practicing cardiologist and healthcare strategist contributing clinical insight and roadmap advisory. Guides EyeZenX’s systemic diagnostics with a focus on cardiovascular relevance.",
        "name": "Dr. Sugan ",
        "image": "./sugan-profile-pic.jpg",
        "linkedin": "https://www.linkedin.com/in/leo-tan"
    },
    {
        "desigination": "Founding Engineer ",
        "about": "Core engineering force behind EyeZenX’s platforms.Leads Product integration, and performance optimization across Connect and Next modules",
        "name": "Mr. Surendra Kumar ",
        "image": "./Surendra-profile-pic.jpg",
        "linkedin": "https://www.linkedin.com/in/surendra-kumar-c"
    },
    {
         "desigination": "Interim CTO ",
        "about": "Entrepreneur and early-stage investor with a strong track record in scaling tech startups. Advises EyeZenX on market positioning, business model refinement, and global expansion.",
        "name": "Mr. Govind Kumar",
        "image": "./govind-profile.jpg",
        "linkedin": "https://www.linkedin.com/in/aigovindkumar/"
    },
    {
         "desigination": "Software Engineer",
         "about" : "Software engineer with a strong background in AI, machine learning, and DevOps. Specialised in building intelligent systems and deploying scalable, reliable infrastructure to support Eyezen’s modern software solutions.",
         "name":"Aakarsh Yohaan Ravi",
         "image":"./akarsh-profile.jpg",
         "linkedin": "https://www.linkedin.com/in/aakarsh-yohaan-54642b253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
          "desigination":"Full Stack Developer",
          "about":"Full Stack Developer with expertise in building scalable web applications. Specializes in creating user-friendly interfaces and robust backend systems to enhance EyeZenX’s digital health solutions.",
          "name":"Nilesh Tiwari",
          "image":"./nilesh-profile-pic.png",
          "linkedin": "https://www.linkedin.com/in/nilesh-tiwari-bbb685215/"

    }
];

export function Team() {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-[#0F1B50] to-[#1E2A78] text-white  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Visionary Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-muted font-light max-w-2xl mx-auto"
          >
            The brilliant minds revolutionizing healthcare through technology.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="h-full p-6 bg-background/80 backdrop-blur-sm hover:bg-background transition-all group">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative mb-6"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary/10" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.desigination}
                  </p>
                  <p className="text-muted-foreground mb-6">{member.about}</p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute -right-20 -top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute -left-20 -bottom-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}