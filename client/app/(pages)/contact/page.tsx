import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="card-team">
                <img src="su.png" alt="Avatar" className="avatar"/>
                <div className="container-team">
                    <h5><b>Sudha Madhuri Poojari</b></h5> 
                    <p>Full stack developer</p> 
                    <Link href={"https://github.com/sudhamadhuripoojari"}> Git hub</Link> 
                </div>
                </div>
                <div className="card-team">
                <img src="img1-modified.png" alt="Avatar" className="avatar"/>
                <div className="container-team">
                    <h5><b>Tim Hansson Meng</b></h5> 
                    <p>Full stack developer</p> 
                    <Link href={"https://github.com/Slipzter"}> Git hub</Link> 
                </div>
                </div>
                <div className="card-team">
                <img src="Ilija.png" alt="Avatar" className="avatar"/>
                <div className="container-team">
                    <h5><b>Ilija Krilovic</b></h5>          
                    <p>Full stack developer</p> 
                    <Link href={"https://github.com/ica1130"}> Git hub</Link> 
                </div>
                </div>
    </div>
  )
}
