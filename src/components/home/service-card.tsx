import { Box, Grid, Paper, Typography } from "@mui/material";
import { JSX } from "react";

type Props = {
  service: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
};

const ServiceCard = ({ service }: Props) => {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 4,
          backgroundColor: "#f5f5f5",
          height: "100%",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: 4,
            transform: "translateY(-5px)",
          },
        }}
      >
        <Box sx={{ mb: 2 }}>{service.icon}</Box>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default ServiceCard;
