import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { options_RunCovid } from '../assets/data'

export default function RunCovid() {
  const [optionsList, setOptionsList] = useState()
  const [optionsItem, setOptionsItem] = useState()
  function getOptionsList() {
    setOptionsList(options_RunCovid)
  }
  function getRandomItem(){
    var totaloptions = optionsList.length
    var random = Math.random() * totaloptions;
    var round = Math.round(random);
    return round
  }
  function getOptionsItem() {
      var interval = setInterval(() => {
        setOptionsItem(optionsList[getRandomItem()])
      }, 80);
      setTimeout(() =>{
        clearInterval(interval);
      }, 2000)
  } 
  useEffect(() => {
    getOptionsList()
  }, [])
  
  return (
    <Layout title="Run Covid">
    <div id="urHeader">
      <h4>Camino Covid</h4>
    </div>
    <div id="urContent" className='p-1'>
      <div className="card-covid" style={optionsItem ? {backgroundColor:optionsItem.color} : {backgroundColor:'#247bad'}} onClick={() => getOptionsItem()}>
        <h1>{optionsItem && optionsItem.title || 'Presiona para jugar'}</h1>
      </div>
    </div>
    </Layout>
  )
}
