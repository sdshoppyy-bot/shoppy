import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext.jsx';

function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    // Placeholder: wire API update if available
    setTimeout(() => setSaving(false), 800);
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto' }} className="anim-fade">
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Profile</Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card className="hover-lift">
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ width: 96, height: 96 }}>
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </Avatar>
                <Chip label={user?.email || 'guest@example.com'} variant="outlined" />
                <Button variant="outlined" size="small" disabled>
                  Change Avatar
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }} className="hover-lift">
            <Typography variant="h6" sx={{ mb: 2 }}>Account Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Full Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h6" sx={{ mb: 2 }}>Security</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="New Password" type="password" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Confirm Password" type="password" fullWidth />
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, textAlign: 'right' }}>
              <Button variant="contained" size="large" onClick={handleSave} disabled={saving}>
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;


