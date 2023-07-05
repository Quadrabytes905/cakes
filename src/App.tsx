import { Box, Typography } from "@mui/material";
import logo from "./assets/logo.jpg";
import AppBar from "./components/AppBar";

function App() {
  return (
    <div>
      <AppBar
        pages={["Products", "Pricing", "Blog"]}
        settings={["Profile", "Account", "Dashboard", "Logout"]}
      />
      <Box display="flex" justifyContent="center">
        <img src={logo} alt="logo" width="500px" height="500px" />
      </Box>
      <Box p={2} display="flex" justifyContent="center">
        <Typography variant="h4">
          This is Jewel's Cake & Pastries website!
        </Typography>
      </Box>
    </div>
  );
}

export default App;
