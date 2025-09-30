import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Button,
  Rating,
  Box,
  Chip,
  Divider,
  IconButton,
  CircularProgress,
  Container,
  Breadcrumbs,
  Skeleton,
} from '@mui/material';
import { ShoppingCart, Add, Remove, NavigateNext } from '@mui/icons-material';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useCart } from '../hooks/useCart.jsx';

function ProductDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity,
    });
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Skeleton width={240} height={28} sx={{ mb: 3 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3 }}>
              <Skeleton variant="rectangular" height={400} />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Skeleton width={140} height={32} sx={{ mb: 2 }} />
            <Skeleton width="60%" height={44} />
            <Skeleton width="40%" height={28} sx={{ mt: 2 }} />
            <Skeleton width="30%" height={56} sx={{ mt: 3 }} />
            <Skeleton width="50%" height={36} sx={{ mt: 2 }} />
          </Grid>
        </Grid>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <Typography variant="h6" textAlign="center" color="error">
          Product not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Breadcrumbs 
        separator={<NavigateNext fontSize="small" />} 
        sx={{ mb: 3 }}
        aria-label="breadcrumb"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>Home</Link>
        <Link to="/shop" style={{ textDecoration: 'none', color: '#1976d2' }}>Shop</Link>
        <Typography color="text.primary" sx={{ textTransform: 'capitalize' }}>
          {product.category}
        </Typography>
        <Typography color="text.primary">
          {product.title}
        </Typography>
      </Breadcrumbs>

      <Grid container spacing={4} className="anim-fade">
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, backgroundColor: '#fafafa' }} className="hover-lift">
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{ 
                width: '100%', 
                height: 400, 
                objectFit: 'contain',
              }}
            />
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>
            <Chip 
              label={product.category}
              sx={{ mb: 2, textTransform: 'capitalize' }}
              color="primary"
              variant="outlined"
            />
            
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
              {product.title}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating
                value={product.rating.rate}
                precision={0.1}
                readOnly
                sx={{ mr: 2 }}
              />
              <Typography variant="body1" color="text.secondary">
                {product.rating.rate} ({product.rating.count} reviews)
              </Typography>
            </Box>
            
            <Typography variant="h3" color="primary" sx={{ mb: 3, fontWeight: 600 }}>
              ${product.price.toFixed(2)}
            </Typography>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h6" gutterBottom>
              Description
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {product.description}
            </Typography>
            
            <Divider sx={{ my: 3 }} />
            
            {user && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Quantity
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <IconButton onClick={decrementQuantity} disabled={quantity <= 1}>
                    <Remove />
                  </IconButton>
                  <Typography variant="h6" sx={{ mx: 2, minWidth: 40, textAlign: 'center' }}>
                    {quantity}
                  </Typography>
                  <IconButton onClick={incrementQuantity}>
                    <Add />
                  </IconButton>
                </Box>
                
                <Button
                  variant="gradient"
                  size="large"
                  startIcon={<ShoppingCart />}
                  onClick={handleAddToCart}
                  sx={{ 
                    py: 2, 
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    width: { xs: '100%', sm: 'auto' }
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            )}
            
            {!user && (
              <Box sx={{ p: 3, backgroundColor: 'grey.100', borderRadius: 2 }}>
                <Typography variant="body1" textAlign="center" gutterBottom>
                  Please log in to add items to your cart
                </Typography>
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  sx={{ display: 'block', mx: 'auto' }}
                >
                  Login
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;