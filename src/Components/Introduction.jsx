import './ShowName.css'
const Introduction = ({name = "unknown" , dob, foods=[]}) => {

  return (
    <div className='output-container'>
        <h2>ฉันชื่อ</h2>
        <h2>{name}</h2>
        {dob ? <h2>ฉันเกิดวันที่ {dob}</h2> : null}
        {foods.length === 0 ? null : <h2>ฉันชอบกิน {
            foods.map((iten,index) => (
                <div>
                    {index+1}.{iten}
                </div> 
            ))
        }</h2>}

    </div>

  )
};

export default Introduction;