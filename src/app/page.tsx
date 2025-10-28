"use client";

import { Typography, Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ py: 10, textAlign: "center" }}>
      <Stack spacing={3}>
        <Typography variant="h4" color="primary">
          Welcome to Next.js + Material UI 🚀
        </Typography>
      </Stack>
    </Container>
  );
}
