import './App.css'
import Card from "./cards.jsx"

function App() {
  

  return (
    <div className="container">
    <Card
    image="https://i.pravatar.cc/150?img=1"
    name="Vikrant Sharma"
    profession="AI Engineer"
    bio="Loves building AI tools"
    />

    <Card
    image="https://i.pravatar.cc/150?img=4"
    name="Virat shastri"
    profession="Frontend Developer"
    bio="Passionate about building beautiful user interfaces."
    />
    <Card
    image="https://i.pravatar.cc/150?img=8"
    name="Shawn mess"
    profession="Cloud Engineer"
    bio="Works with cloud infrastructure and deployment pipelines."
    />
    <Card
    image="https://i.pravatar.cc/150?img=5"
    name="Antonio ramsom"
    profession="Backend Developer"
    bio="Enjoys designing scalable server architectures."
    />
    <Card
    image="https://i.pravatar.cc/150?img=7"
    name="Antalo Shafrd"
    profession="Full Stack Developer"
    bio="Builds complete web applications from frontend to backend."
    />
    </div>
  )
}

export default App
