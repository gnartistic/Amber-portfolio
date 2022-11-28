import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

function App ()
{
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />}/>
        </Route>
      </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
