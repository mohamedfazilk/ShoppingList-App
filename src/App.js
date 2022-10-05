import React,{useState} from 'react';
import { Container } from "@mui/system";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddItem from './AddItem';
import Stack from '@mui/material/Stack';


function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([item, ...items]);
  }
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
        <Stack alignItems="center">
        <AddItem addItem={addItem} />
        </Stack>
      </Container>
    </div>
  );
}

export default App;
