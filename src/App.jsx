import './App.css'


import Hero from './Hero.jsx'
import Content1 from './Content1.jsx'
import Content2 from './Content2.jsx'
import Content3 from './Content3.jsx'
import Content4 from './Content4.jsx'
import Content5 from './Content5.jsx'
import LuxuryCarousel from './LuxuryCarousel.jsx'
import Content6 from './Content6.jsx'
function App() { 


  return (
    <div className="min-h-screen relative overflow-x-hidden">
      
      <Hero />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      {/* <LuxuryCarousel /> */}
      <Content6 />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laboriosam mollitia, quam eveniet, dolorum dolor velit quibusdam optio asperiores inventore itaque modi tempore fuga. Vel, suscipit. Adipisci ab nihil autem.
      </p>
    </div>
  )
}

export default App
