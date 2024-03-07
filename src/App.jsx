import { useState } from 'react'
import './App.css'
import Introduction from './Components/Introduction'


function App() { 
  const [name,setName] = useState('')
  const [data,setData] = useState({name:undefined,dob:undefined,foods:[]})
  const [dob,setDob] = useState('')
  const [foods,setFoods] = useState([""])

  return (
    <div className='container'>
      <div className='input-container'>
        <div>
          <label htmlFor='name'>ชื่อ: </label>
          <input id='name' value={name} style={{ padding: "12px 16px", margin: "8px 0" }}
          onChange={event =>{
            setName(event.target.value);
          }} />
        </div>
        <div style={{ padding: "12px" }}>
            <label htmlFor="dob">คุณพรี่เกิดวันที่เท่าไหร่ </label>
            <input
              id="dob" value={dob} style={{ padding: "12px 16px", margin: "8px 0" }}
              onChange={event => {
                setDob(event.target.value)
              }} />
          </div>
          <div style={{ padding: "12px 16px" }}>
            <div style={{ fontWeight: "bold", textDecoration: "underline" }}>อาหารที่ชื่นชอบ</div>
            {foods.map((item, index) => (
              <div key={index} style={{ padding: "12px" }}>
                <label htmlFor={`foods-${index}`} >อร่อยดีบอกต่อ </label>
                <input
                  id={`foods-${index}`}
                  value={item}
                  style={{ padding: "12px 16px" }}
                  onChange={event => {
                    const newValue = event.target.value
                    const newFood = foods.map((food, foodIndex) =>
                      foodIndex === index ? newValue : food
                    )
                    setFoods(newFood)
                  }} />
                <button
                  style={{ borderRadius: 50 , backgroundColor: 'rgb(255, 93, 93)' , margin : "4px",color:'white'}}
                
                onClick={() => {
                  setFoods(foods.filter((food, foodIndex) => {
                    if (foodIndex === index) {
                      return false
                    }
                    return true
                  }))
                }}><p style={{fontSize:"12px"}}>x</p></button>
              </div>
            ))}
            <button onClick={() => {
              setFoods([...foods, ""])
            }}
              style={{ backgroundColor: "#F99640" }}>เพิ่มอาหารเมนูอื่น</button>
          </div>
          <button style={{ backgroundColor: "#CE96FF" }} onClick={() => {
            if (name === "" || dob === "") {
              alert("กรุณากรอกชื่อและวันเกิด");
            } else if (foods.every(food => food === "")) {
              alert("กรุณากรอกอาหาร");
            } else {
              setData({ name, dob, foods });
              setName("");
              setDob("");
              setFoods([""]);
            }
          }}>บันทึก</button>
        </div>
      <div style={{ width: "50%" }}>
        <Introduction name = {data.name} dob ={data.dob} foods = {data.foods}/>
      </div>
    </div>
  )
}

export default App
