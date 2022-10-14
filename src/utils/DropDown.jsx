import React, {useState} from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';

const DropDown = ({value, info}) => {

    const [DropOn, setDropOn] = useState(false);
  
  return (
    <div className='DropDown'>
        <div className='DropDownValue' onClick={() => setDropOn(!DropOn)}>{value}<MdKeyboardArrowDown /></div>
        
        <div className='dropDownOptions'>
            {DropOn && info?.map((item) =>(
                <div key={item} className='dropDownOpt'>{item}</div>
            ))}
        </div>
    </div>
  )
}

export default DropDown