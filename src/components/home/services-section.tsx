"use client";

import { Box, Container, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ServiceCard from "./service-card";
import SectionHeader from "../section-header";

const services = [
  {
    icon: <HomeIcon sx={{ fontSize: 50, color: "#8B4A4A" }} />,
    title: "Residential Design",
    description:
      "We'll create a personalized living space that reflects your taste and lifestyle.",
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 50, color: "#8B4A4A" }} />,
    title: "Commercial Spaces",
    description:
      "Designing functional and inspiring workplaces that boost productivity and creativity.",
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 50, color: "#8B4A4A" }} />,
    title: "Architectural Consultancy",
    description:
      "Our experts will bring your vision to life with innovative design solutions.",
  },
];

export default function ServicesSection() {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 10 }, textAlign: "center" }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <SectionHeader
          title="Our Services"
          subtitle="Whether it's your home, office, or an entire complex, we'll
          deliver from consultation to installation with unmatched quality."
        />
        {/* Service Cards */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
