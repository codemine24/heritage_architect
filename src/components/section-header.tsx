import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  subtitle?: string;
};

const SectionHeader = ({ title, subtitle }: Props) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {title}
      </Typography>
      <Box
        sx={{
          width: 60,
          height: 3,
          backgroundColor: "#d4af37",
          mx: "auto",
          mb: 2,
          borderRadius: 2,
        }}
      />
      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
