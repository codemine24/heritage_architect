"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BuildIcon from "@mui/icons-material/Build";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SectionHeader from "../section-header";

const features = [
  {
    icon: <AutorenewIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
    title: "Flexible Budget & Personalized Design",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
    title: "2-Year Free Service Warranty",
  },
  {
    icon: <EmojiEmotionsIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
    title: "50-Day Move-In Guarantee",
  },
  {
    icon: <CheckCircleIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
    title: "Design & Build Quality Checks",
  },
];

export default function WhyChooseSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "primary.main",
        py: { xs: 8, md: 10 },
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          title="Why Choose Us"
          subtitle="We stand out with our commitment to excellence, quality, and customer
          satisfaction."
          subtitleSx={{ color: "#fff" }}
        />

        <Grid container spacing={3} justifyContent="center">
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 3 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: "center",
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <Stack spacing={2} alignItems="center">
                  {feature.icon}
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, color: "#fff" }}
                  >
                    {feature.title}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Stack alignItems="center" sx={{ mt: 6 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "secondary.light",
              color: "primary.main",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 999,
              "&:hover": {
                bgcolor: "secondary.main",
              },
            }}
          >
            BOOK A CONSULTATION
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
