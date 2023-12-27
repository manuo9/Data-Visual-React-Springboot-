import { useState } from 'react'
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import BarChart from './barcity';
import FifthChart from './endyear';
import Histogram from './barswot';
import LineChart from './region'
import Footer from './components/Social';
import EntityDistributionChart from './piesector'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <>
    <ThemeProvider theme = {darkTheme}> 
  <Container>
    <Navbar></Navbar>
    <EntityDistributionChart/>
    <BarChart/>
    <LineChart/>
    <Histogram/>
    <FifthChart/>
  </Container>
   </ThemeProvider>
   <Footer></Footer>
  
      
    </>
  )
}

export default App
