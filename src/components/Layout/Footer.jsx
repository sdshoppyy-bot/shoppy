import { Box, Container, Link as MuiLink, Typography, Stack, IconButton, Grid, Divider, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import Store from '@mui/icons-material/Store';

function Footer() {
  const year = new Date().getFullYear();
  const theme = useTheme();

  return (
    <Box 
      component="footer" 
      sx={{ 
        mt: 'auto',
        pt: 6,
        pb: 4,
        borderTop: (t) => `1px solid ${t.palette.divider}`,
        backgroundColor: theme.palette.mode === 'light' 
          ? 'rgba(249, 250, 251, 0.8)' 
          : 'rgba(15, 21, 35, 0.4)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Brand Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Store sx={{ fontSize: 28 }} />
                <Typography variant="h6" fontWeight={700}>
                  ShopCart
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 250 }}>
                Your premier destination for quality products and exceptional shopping experiences.
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton 
                  size="small" 
                  aria-label="github"
                  sx={{ 
                    '&:hover': { 
                      color: 'primary.main',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.2s ease'
                    } 
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
                <IconButton 
                  size="small" 
                  aria-label="linkedin"
                  sx={{ 
                    '&:hover': { 
                      color: 'primary.main',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.2s ease'
                    } 
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton 
                  size="small" 
                  aria-label="twitter"
                  sx={{ 
                    '&:hover': { 
                      color: 'primary.main',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.2s ease'
                    } 
                  }}
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton 
                  size="small" 
                  aria-label="email"
                  sx={{ 
                    '&:hover': { 
                      color: 'primary.main',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.2s ease'
                    } 
                  }}
                >
                  <EmailIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Shop Links */}
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
              Shop
            </Typography>
            <Stack spacing={1.5}>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                All Products
              </MuiLink>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                New Arrivals
              </MuiLink>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                Best Sellers
              </MuiLink>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                Special Offers
              </MuiLink>
            </Stack>
          </Grid>

          {/* Customer Service */}
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
              Customer Service
            </Typography>
            <Stack spacing={1.5}>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                Contact Us
              </MuiLink>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                Shipping Info
              </MuiLink>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                Returns
              </MuiLink>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                FAQ
              </MuiLink>
            </Stack>
          </Grid>

          {/* Company */}
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
              Company
            </Typography>
            <Stack spacing={1.5}>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                About Us
              </MuiLink>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                Careers
              </MuiLink>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                Press
              </MuiLink>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                Blog
              </MuiLink>
            </Stack>
          </Grid>

          {/* Legal */}
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="subtitle2" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
              Legal
            </Typography>
            <Stack spacing={1.5}>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                Privacy Policy
              </MuiLink>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                Terms of Service
              </MuiLink>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                Cookie Policy
              </MuiLink>
              <MuiLink 
                href="#" 
                color="text.secondary" 
                underline="none"
                sx={{ 
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    pl: 0.5
                  } 
                }}
              >
                Accessibility
              </MuiLink>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Bottom Bar */}
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          alignItems="center" 
          justifyContent="space-between" 
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {year} ShopCart. All rights reserved.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Made with ❤️ for the best shopping experience
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;