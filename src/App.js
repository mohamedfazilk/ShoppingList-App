import React from 'react';
import { Container } from "@mui/system";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <div className="App">
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Shopping List
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}

export default App;
