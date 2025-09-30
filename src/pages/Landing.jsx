import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Button, Stack, Grid, Card, CardContent, Chip, useTheme } from '@mui/material';
import { useAuth } from '../contexts/AuthContext.jsx';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useReveal } from '../hooks/useReveal.jsx';

function Landing() {
  const theme = useTheme();
  const { user } = useAuth();
  const heroRef = useReveal();
  const valuesRef = useReveal();
  const ctaRef = useReveal();

  return (
    <Box>
      {/* Hero */}
      <Box ref={heroRef} sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        background: `radial-gradient(1200px 600px at 10% -10%, ${theme.palette.primary.main}22, transparent), radial-gradient(800px 400px at 90% -20%, ${theme.palette.secondary.main}22, transparent)`,
        position: 'relative',
      }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" spacing={6}>
            <Box sx={{ flex: 1 }}>
              {user ? (
                <>
                  <Chip label="Welcome back" color="primary" variant="outlined" sx={{ mb: 2, fontWeight: 600 }} />
                  <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.1, mb: 2 }}>
                    Pick up where you left off
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                    Head back to the catalog or review your cart and recent orders.
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button component={RouterLink} to="/shop" variant="gradient" size="large" startIcon={<ShoppingBagIcon />} sx={{ py: 1.5, px: 3 }}>
                      Continue Shopping
                    </Button>
                    <Button component={RouterLink} to="/cart" variant="outlined" size="large" sx={{ py: 1.5, px: 3 }}>
                      View Cart
                    </Button>
                    <Button component={RouterLink} to="/orders" variant="text" size="large" sx={{ py: 1.5, px: 3 }}>
                      Orders
                    </Button>
                  </Stack>
                </>
              ) : (
                <>
                  <Chip label="Premium marketplace" color="primary" variant="outlined" sx={{ mb: 2, fontWeight: 600 }} />
                  <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.1, mb: 2 }}>
                    Discover products you love, delivered with care
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                    Curated selection, fast shipping, and delightful experiences. Shop smarter with a modern, secure cart flow.
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button component={RouterLink} to="/shop" variant="gradient" size="large" startIcon={<ShoppingBagIcon />} sx={{ py: 1.5, px: 3 }}>
                      Start Shopping
                    </Button>
                    <Button component={RouterLink} to="/register" variant="outlined" size="large" sx={{ py: 1.5, px: 3 }}>
                      Create Account
                    </Button>
                  </Stack>
                </>
              )}
            </Box>
            <Box sx={{ flex: 1, width: '100%', position: 'relative' }}>
              {/* Parallax blobs */}
              <Box className="anim-float" sx={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', filter: 'blur(40px)', opacity: 0.3, background: theme.palette.mode === 'light' ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'linear-gradient(135deg, #4facfe, #00f2fe)' }} />
              <Box className="anim-float" sx={{ position: 'absolute', bottom: -30, left: -30, width: 160, height: 160, borderRadius: '50%', filter: 'blur(40px)', opacity: 0.25, background: 'linear-gradient(135deg, #fa709a, #fee140)' }} />
              <Card sx={{ p: 2, background: theme.palette.mode === 'light' ? '#f6f9ff' : 'rgba(255,255,255,0.03)' }}>
                <Box sx={{ aspectRatio: '16/10', borderRadius: 2, background: `linear-gradient(135deg, ${theme.palette.primary.main}33, ${theme.palette.secondary.main}33)` }} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Modern UI powered by MUI. Responsive, accessible, and theme-aware by default.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Value props */}
      <Container ref={valuesRef} maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={3}>
          {[{
            icon: <LocalShippingIcon color="primary" />, title: 'Fast, free shipping', desc: 'Free shipping on all orders with reliable, tracked delivery.'
          }, {
            icon: <CreditScoreIcon color="primary" />, title: 'Secure checkout', desc: 'Industry-grade security for safe and seamless purchases.'
          }, {
            icon: <SupportAgentIcon color="primary" />, title: '24/7 support', desc: 'We are here for you anytime via chat and email.'
          }].map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card className="hover-lift shine">
                <CardContent>
                  <Stack spacing={1.5} direction="row" alignItems="flex-start">
                    {item.icon}
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }} className="gradient-text">{item.title}</Typography>
                      <Typography color="text.secondary">{item.desc}</Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA band */}
      <Box ref={ctaRef} sx={{ py: { xs: 6, md: 8 }, background: theme.palette.mode === 'light' ? '#0b57d0' : theme.palette.primary.dark, color: '#fff' }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="space-between" spacing={2}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>Ready to upgrade your shopping?</Typography>
            <Button component={RouterLink} to="/shop" size="large" variant="contained" color="secondary" sx={{ color: '#fff', fontWeight: 700 }}>
              Browse Catalog
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Landing;


