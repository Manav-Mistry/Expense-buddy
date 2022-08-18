import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'


function Form() {
  const [uName, setUName] = useState();  

  const handleUName = (e) => {
    // setUName(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <form>
        <div className='d-flex justify-content-center'>
          <Card>
            <div className='container input-group'>
              <input onChange={(event) => handleUName(event)} type='text' name='name' className='form-control' />
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </Card>
        </div>
      </form>
    </>

  )
}

export default Form