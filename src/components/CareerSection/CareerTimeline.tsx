import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Code2, GraduationCap, Sparkles } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2026",
      title: "A Google Gemini Initiative: \"Fund My Crazy\"",
      subtitle: "Participant & AI Innovator",
      description:
        "Participating in Google Gemini's flagship 'Fund My Crazy' initiative. Harnessing advanced multimodal Gemini AI capabilities and full-stack web architectures to engineer high-impact, visionary digital products.",
      icon: <Sparkles className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2026",
      title: "IBM AI for Sustainability Virtual Internship",
      subtitle: "IBM & Edunet Foundation",
      description:
        "Selected for the IBM Virtual Internship focusing on AI for Sustainability. Applying artificial intelligence, machine learning concepts, and predictive data modeling to develop innovative, sustainable tech solutions.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024 – 2025",
      title: "Full Stack MERN Developer",
      subtitle: "Healthcare & Event Booking Platforms",
      description:
        "Architected and built full-stack web applications including Doctor Appointment System and Online Event Booking platform. Implemented Redis caching cutting database load by ~60%, integrated Razorpay for real-time payments, and leveraged MongoDB Aggregation for analytics.",
      icon: <Code2 className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023 – 2024",
      title: "MERN Stack Engineering Specialization",
      subtitle: "Webskitters Academy",
      description:
        "Underwent intensive professional full-stack training in React.js, Redux Toolkit, Node.js, Express.js, and MongoDB. Mastered RESTful API design, JWT & Bcrypt authentication, MVC architecture, and SDLC deployment workflows.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023",
      title: "Leadership Skills Certification",
      subtitle: "Indian Institute of Management (IIM Ahmedabad)",
      description:
        "Earned professional certification in Executive Leadership Skills, focusing on strategic problem solving, agile execution, and effective cross-functional team collaboration.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023",
      title: "Frontend Engineering & UI Clones",
      subtitle: "Independent Web Development",
      description:
        "Built responsive web applications and interactive interfaces including a full-featured Spotify Web UI, dynamic CRUD modules, and modern CSS3/Bootstrap layouts.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2019 – 2023",
      title: "Bachelor of Technology (B.Tech)",
      subtitle: "K.K. College of Engineering and Management, Dhanbad",
      description:
        "Graduated with a 7.66 CGPA. Built strong analytical and engineering foundations in Data Structures, Algorithms, Object-Oriented Programming, and Database Management Systems.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career & Experience"
        subtitle="My journey in software engineering, full-stack mastery, and continuous growth"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
