import React from 'react'
import {useState,useEffect}from 'react'
import { Header,Feed,Buttons } from '../userComponent'
const NewWord = () => {
  const [changeWord, setChangeWord] = useState('');
  const [description, setDescription] = useState('');
  const [example, setExample] = useState('');

  const handleChangeWord = (e) =>{
setChangeWord(e.target.value)
  }

  const handleChangeDescription = (e) =>{
    setDescription(e.target.value)
      }

      const handleExample = (e) =>{
        setExample(e.target.value)
          }

  return (
    <>

    <div className='section__padding' >
   <Header/>
 </div>

 <div className="feed__container" style={{padding:'20px'}}>
   <h3>Request for new  word</h3>
 <div className="feed__container-content-box">
   <form onSubmit={()=>{}}>
    <div style={{display:'flex',flexDirection:'column',margin:'10px 0'}}>
     <label>Word</label>
     <input type='text' placeholder="input the word" onChange={handleChangeWord} value={changeWord} style={{paddingLeft:'10px',border:'1px solid #F5F5F5'}}/>
    </div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <label>Description</label>
     <input type='text' placeholder="input the Meaning" onChange={handleChangeDescription} value={description} style={{minHeight:'100px',paddingLeft:'10px',border:'1px solid #F5F5F5'}}/>
    </div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <label>Example</label>
     <input type='text' placeholder="input Examples" onChange={handleExample} value={example} style={{minHeight:'50px',paddingLeft:'10px',border:'1px solid #F5F5F5'}}/>
    </div>
    <button type="submit" style={{width:'100%',textAlign:'center',backgroundColor:' #F5F5F5',marginTop:'10px'}}>Submit</button>
   </form>
 </div>

 </div>


   </>
  )
}

export default NewWord
