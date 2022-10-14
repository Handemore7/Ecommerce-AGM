import React, {useState} from 'react'

const DropDown = ({value, info}) => {

    const [DropOn, setDropOn] = useState(false);
  
  return (
    <div className='DropDown'>
        <div onClick={() => setDropOn(!DropOn)}>{value}</div>
        <div className='dropDownOptions'>
            {DropOn && info?.map((item) =>(
                <div key={item} className='dropDownOpt'>{item}</div>
            ))}
        </div>
    </div>
  )
}

export default DropDown