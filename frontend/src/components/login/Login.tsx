'use client'


import { Button, TextField, Typography, Link, Box, Container } from '@mui/material';
import './login.css'; // Import the CSS file

function LoginPage() {
  return (
    <Container maxWidth="xs" className="container">
      <Box className="form">
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="form" noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="submit"
          >
            Sign In
          </Button>
          <Typography variant="body2">
            Don't have an account? <a href='/register'>Sign-up</a>
          </Typography>
        </form>
      </Box>
    </Container>
  );
}

export default LoginPage;
