"use client";

import Grid from "@mui/material/Grid";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/carousel";
import { OptimizeImage } from "@/components/optimize-image";
import { Box, Button, Stack, Typography } from "@mui/material";

export const HeroSection = () => {
  return (
    <Grid size={{ xs: 12, lg: 8 }}>
      <Carousel autoplay pauseOnHover>
        <CarouselContent>
          <CarouselItem>
            <Box sx={{ position: "relative" }}>
              <OptimizeImage
                src="/images/slide-2.webp"
                alt="Hero Carousel"
                height={490}
                sx={{ cursor: "pointer" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: "rgba(0, 0, 0, 0.05)",
                }}
              >
                <Stack
                  sx={{
                    height: "100%",
                    width: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: "auto",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "3rem",
                      lineHeight: "1.2",
                    }}
                  >
                    Transform Your Space Into a Masterpiece
                  </Typography>
                  <Typography sx={{ color: "#fff", fontSize: "1rem", mt: 2 }}>
                    Blending traditional craftsmanship with contemporary design
                    innovation. Blending traditional craftsmanship with
                    contemporary design innovation
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 4,
                      backgroundColor: "primary.main",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#000",
                        color: "#fff",
                      },
                    }}
                  >
                    Schedule Consultation
                  </Button>
                </Stack>
              </Box>
            </Box>
          </CarouselItem>

          {/* Item 2 */}
          <CarouselItem>
            <Box sx={{ position: "relative" }}>
              <OptimizeImage
                src="/images/slide-1.jpg"
                alt="Hero Carousel"
                height={490}
                sx={{ cursor: "pointer" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: "rgba(0, 0, 0, 0.05)",
                }}
              >
                <Stack
                  sx={{
                    height: "100%",
                    width: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: "auto",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "3rem",
                      lineHeight: "1.2",
                    }}
                  >
                    Interior Design Mastery
                  </Typography>
                  <Typography sx={{ color: "#fff", fontSize: "1rem", mt: 2 }}>
                    Creating bespoke interiors that reflect your unique
                    lifestyle and personality
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 4,
                      backgroundColor: "primary.main",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#000",
                        color: "#fff",
                      },
                    }}
                  >
                    Schedule Consultation
                  </Button>
                </Stack>
              </Box>
            </Box>
          </CarouselItem>
        </CarouselContent>
        <CarouselDots
          variant="dot"
          sx={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            p: 1,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(18px)",
            width: "fit-content",
            justifySelf: "center",
          }}
        />
      </Carousel>
    </Grid>
  );
};
