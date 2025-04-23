import './App.css'
import TeamMemberCardComponent from './components/TeamMemberCard'


function App() {
  const members = [
    {
      id:1,
      Name:"Sahith",
      Job:"Software Engineer"
    },
    {
      id:2,
      Name:"Koushik",
      Job:"Developer"
    },
    {
      id:3,
      Name:"Dhananjai",
      Job:"Full stack web development"
    }
  ]

  return(
    <div>
      <h1 className='text center'>Members</h1>
      <div className='flex justify-center align-center'>
        {members.map((props)=>(
          <TeamMemberCardComponent key={props.id} Name={props.Name} Job={props.Job}/>
        ))}
      </div>
    </div>
  )
}

export default App
