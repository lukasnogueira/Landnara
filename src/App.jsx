import React from 'react';
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import cheader from './assets/icons/cimaheade.png';
import bheader from './assets/icons/baixoheader.png';
import { BsWhatsapp } from "react-icons/bs";

function App() {
  return (
    <div className="App" style={{ background: '#000' }}>
      <div id='header'>
        <img src={cheader} alt="" />
        <h1 style={{ color: '#fff' }}>Dom Docciê Confeitaria</h1>
        <img src={bheader} alt="" />
      </div>
      <div id='center' style={{margin:'0 20px 0 20px'}}>
        <p style={{ textAlign: 'center', color: '#fff' }}>Procurando a confeitaria perfeita para fazer da sua próxima
         festa um sucesso? Não procure mais, nossa confeitaria especializada em bolos e sobremesas personalizados para
          todas as ocasiões! De bolos de casamento elegantes a guloseimas de aniversário divertidas e festivas, temos
           uma ampla seleção de opções deliciosas para escolher.</p>
        <p style={{ textAlign: 'center', color: '#fff' }}>Nossos confeiteiros especializados usam apenas os ingredientes
         mais frescos para criar bolos lindos e deliciosos que certamente impressionarão seus convidados. Oferecemos
          uma ampla variedade de sabores, recheios e decorações para escolher, garantindo que seu bolo seja adaptado
           aos seus gostos e preferências específicas.</p>
        <p style={{ textAlign: 'center', color: '#fff' }}>Quer esteja a planear uma pequena reunião ou um grande evento,
         podemos ajudá-lo a tornar a sua celebração inesquecível. Clique no botão abaixo para entre em contato e saber mais sobre nossas
          opções de bolos personalizados e fazer seu pedido!</p>
      </div>
      <div className='butoes' style={{width:'100%', textAlign:'center', height: '100px'}}>        
        <Button href='https://api.WhatsApp.com/send?phone=5599991215170'><BsWhatsapp style={{marginRight: '8px'}}/>Saiba Mais</Button>
      </div>
    </div>
  )
}
export default App
