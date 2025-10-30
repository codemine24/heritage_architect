import { Box, SxProps, Typography } from "@mui/material";

type Props = {
  title: string;
  subtitle?: string;
  subtitleSx?: SxProps;
};

const SectionHeader = ({ title, subtitle, subtitleSx }: Props) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {title}
      </Typography>
      <Box
        sx={{
          width: 60,
          height: 3,
          backgroundColor: "secondary.main",
          mx: "auto",
          mb: 2,
          borderRadius: 2,
        }}
      />
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            maxWidth: 700,
            mx: "auto",
            mb: 6,
            color: "text.secondary",
            ...subtitleSx,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
