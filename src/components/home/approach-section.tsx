"use client";

import {
  Box,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import SectionHeader from "../section-header";

const steps = [
  {
    title: "Meet and Greet",
    image: "/images/illustration-1.svg", // place your illustration here
    description:
      "You'll meet our expert designers, and they will listen to your requirements. (No payment is required.)",
  },
  {
    title: "Design Development",
    image: "/images/illustration-2.svg",
    description:
      "We develop a detailed design plan, including layout, materials, and finishes, based on your preferences.",
  },
  {
    title: "Place Your Order",
    image: "/images/illustration-3.svg",
    description:
      "Confirm your design and place your order to begin the project execution phase.",
  },
  {
    title: "Installation Process",
    image: "/images/illustration-4.svg",
    description:
      "Our skilled team manages installation with precision, ensuring everything fits perfectly.",
  },
  {
    title: "Moving In",
    image: "/images/illustration-1.svg",
    description:
      "After our final quality check, you can move in and enjoy your newly designed space.",
  },
];

export default function ApproachSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 10 }, textAlign: "center" }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <SectionHeader title="Our Approach" />

        {/* Steps Navigation */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 5, mb: 6 }}
        >
          {steps.map((step, index) => (
            <Stack
              key={index}
              alignItems="center"
              spacing={1}
              sx={{
                minWidth: { xs: "auto", sm: 120 },
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => setActiveStep(index)}
            >
              {/* Step Indicator */}
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  bgcolor:
                    activeStep === index ? "primary.main" : "transparent",
                  transition: "all 0.3s ease",
                  position: "absolute",
                  top: -10,
                  right: -5,
                }}
              />
              {/* Step Title */}
              <Typography
                variant="body2"
                sx={{
                  color:
                    activeStep === index ? "primary.main" : "text.secondary",
                  fontWeight: activeStep === index ? 600 : 400,
                  fontSize: { xs: 14, sm: 16 },
                  position: "relative",
                  "&::after":
                    activeStep === index
                      ? {
                          content: '""',
                          position: "absolute",
                          bottom: -6,
                          left: 0,
                          width: "100%",
                          height: "2px",
                          bgcolor: "primary.main",
                        }
                      : {},
                }}
              >
                {step.title}
              </Typography>
            </Stack>
          ))}
        </Stack>

        {/* Step Image */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Image
            src={steps[activeStep].image}
            alt={steps[activeStep].title}
            width={350}
            height={350}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* Progress Bar */}
        <Box sx={{ width: "80%", mx: "auto", mb: 3 }}>
          <LinearProgress
            variant="determinate"
            value={((activeStep + 1) / steps.length) * 100}
            sx={{
              height: 8,
              borderRadius: 5,
              bgcolor: "#EAEAEA",
              "& .MuiLinearProgress-bar": {
                bgcolor: "secondary.main",
              },
            }}
          />
        </Box>

        {/* Description */}
        <Typography
          align="center"
          sx={{
            color: "text.secondary",
            fontStyle: "italic",
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          {steps[activeStep].description}
        </Typography>
      </Container>
    </Box>
  );
}
