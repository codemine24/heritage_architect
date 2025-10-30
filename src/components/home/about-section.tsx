"use client";

import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SectionHeader from "../section-header";

const facts = [
  {
    icon: <EmojiEmotionsIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    text: "We Helped 1,000+ Homes Create New Memories",
  },
  {
    icon: <HeadsetMicIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    text: "Consulted 100+ Corporate Companies",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    text: "100% In-house Team",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 48, color: "primary.main" }} />,
    text: "Partnered with 50+ Premium Brands",
  },
];

export default function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "secondary.main",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <SectionHeader
          title="Interesting Facts About Us"
          subtitle="Our achievements speak for themselves."
        />

        {/* Fact Cards */}
        <Grid container spacing={4} justifyContent="center">
          {facts.map((fact, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: 3 }}
              display="flex"
              justifyContent="center"
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  width: "100%",
                  maxWidth: 260,
                  backgroundColor: "secondary.light",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(0,0,0,0.1)",
                  "&:hover": {
                    boxShadow: 4,
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <Stack alignItems="center" spacing={2}>
                  {fact.icon}
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {fact.text}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
