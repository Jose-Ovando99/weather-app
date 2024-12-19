// console.log(import.meta.env.VITE_API_KEY);

import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function App() {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  }

  const [city, setCity] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <Container 
    maxWidth="xs" 
    sx={{ mt: 2 }}>
      <Typography 
      variant="h3" 
      component="h1" 
      align="center" 
      gutterBottom>
        Weather App
      </Typography>
      <Box 
      sx={{display: "grid", gap: 2}}
      component="form"
      autoComplete="off"
      onSubmit={onSubmit}>
        <TextField 
        id="city"
        label="Ciudad"
        variant="outlined"
        size="small"
        required
        fullWidth
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />

        <LoadingButton
        type="submit"
        variant="contained"
        loading={loading}
        loadingIndicator="Cargando..."
        >
          Buscar
        </LoadingButton>
      </Box>

      <Typography
        textAlign="center"
        sx={{ mt: 2, fontSize: "10px" }}
      >
        Powered by:{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Weather API"
        >
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
}
