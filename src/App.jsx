import { useState } from 'react'

function App() {
   
  const [password, setPassword] = useState(null);
  const [isChar, setIsChar] = useState(true);
  const [isDigit, setIsDigit] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [passLength, setPassLength ] = useState(15);

  const generatePassword =()=>{
    let passwordChar='';
    if (isChar){
      passwordChar='ABCKEFGHIJKLMNOPQRSTUVWXYZabckefghijklmnopqrstuvwxyz';
    }
    if(isDigit){
      passwordChar+='0123456789';
    }
    if(isSymbol){
      passwordChar+='~!@#$%^&*()_+-/\\{}=*":<>?|;,.\'';
    }

    let counter = 0;
    let result=''
    const charactersLength = passwordChar.length
    while (counter <= passLength) {
      result += passwordChar.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    // let arr = result.split(',');
    // const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index); 
    // console.log(uniqueArr);


    setPassword(result);

  }

  return (
    <div className='container mt-2'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='form-group mb-2'>
                    <input type='text' value={password} className='form-control' readOnly/>
                  </div>
                   
                  <div class="d-grid gap-2">
                  <button type="button" className='btn btn-primary btn-sm btn-block' onClick={generatePassword}>Generate Password</button>
                  </div>
                </div>

                
                  <div className='row mt-4'>
                    
                    <div className='col-md-2'>
                        <b>{passLength}</b>
                    </div>
                    <div className='col-md-10'>
                        <input type="range" className="form-range" min="5" max="50"  value={passLength} step="1" id="customRange3" onChange={(e)=>setPassLength(e.target.value)}/> 
                    </div>
                  </div>
                  
                

                <div className='col-md-12'>
                  <div class="form-check">
                    <input className="form-check-input" type="checkbox" value={isChar} id="charChecked" checked={isChar} onChange={(e)=>setIsChar(e.target.checked?true:false)} />
                    <label className="form-check-label" for="charChecked">
                      Characters 
                    </label>
                  </div>
                </div>

                <div className='col-md-12'>
                  <div class="form-check">
                    <input className="form-check-input" type="checkbox" value={isDigit} id="digitChecked" onChange={(e)=>setIsDigit(e.target.checked?true:false)}/>
                    <label className="form-check-label" for="digitChecked">
                      Digits
                    </label>
                  </div>
                </div>

                <div className='col-md-12'>
                  <div class="form-check">
                    <input className="form-check-input" type="checkbox" value={isSymbol} id="specialChecked" onChange={(e)=>setIsSymbol(e.target.checked?true:false)}/>
                    <label className="form-check-label" for="specialChecked">
                      Special Characters
                    </label>
                  </div>
                </div>





              </div>
              
            </div>
          </div>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  )
}

export default App
