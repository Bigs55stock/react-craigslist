import React, {Component} from 'react';
import dataInfo from './Data';


function Cards () {
    return(
            <div className='Card'>
                <div className='Cardbox'> 
                   <p> {`${dataInfo[0].image}`}</p>
                  <div className= "saless"> 
                  <p> {`${dataInfo[0].title}`}</p>
                  <p> {`${dataInfo[0].cost}`}</p>
                 </div>
            </div>
                <div className ='Cardbox'>
                <p> {`${dataInfo[1].image}`}</p>
                   <div className= "saless"> 
                <p> {`${dataInfo[1].title}`}</p>
                  <p> {`${dataInfo[1].cost}`}</p>
                    </div>
            </div>
                <div className ='Cardbox'>
                <p> {`${dataInfo[2].image}`}</p>
                <div className= "saless"> 
                <p> {`${dataInfo[2].title}`}</p>
                <p> {`${dataInfo[2].cost}`}</p>
                </div>
            </div>
            <div className ='Cardbox'>
            <p> {`${dataInfo[3].image}`}</p>
                <div className= "saless"> 
                <p> {`${dataInfo[3].title}`}</p>
                <p> {`${dataInfo[3].cost}`}</p>
                </div>
            </div>
            <div className ='Cardbox'>
            <p> {`${dataInfo[4].image}`}</p>
                <div className= "saless"> 
                <p> {`${dataInfo[4].title}`}</p>
                <p> {`${dataInfo[4].cost}`}</p>
                </div>
            </div>
            
            <div className ='Cardbox'>
            <p> {`${dataInfo[5].image}`}</p>
                <div className= "saless"> 
                <p> {`${dataInfo[5].title}`}</p>
                <p> {`${dataInfo[5].cost}`}</p>
                </div>
            </div>
            <div className ='Cardbox'>
            <p> {`${dataInfo[6].image}`}</p>
                <div className= "saless"> 
                <p> {`${dataInfo[6].title}`}</p>
                <p> {`${dataInfo[6].cost}`}</p>
                </div>
            </div>
            <div className ='Cardbox'>
            <p> {`${dataInfo[7].image}`}</p>
                <div className= "saless"> 
                <p> {`${dataInfo[7].title}`}</p>
                <p> {`${dataInfo[7].cost}`}</p>
                </div>
            </div>
            <div className ='Cardbox'>
            <p> {`${dataInfo[8].image}`}</p>
                <div className= "saless"> 
                <p> {`${dataInfo[8].title}`}</p>
                <p> {`${dataInfo[8].cost}`}</p>
                </div>
            </div>
            <div className ='Cardbox'>
            <p> {`${dataInfo[9].image}`}</p>
                <div className= "saless"> 
                <p> {`${dataInfo[9].title}`}</p>
                <p> {`${dataInfo[9].cost}`}</p>
                </div>
            </div>
            <div className ='Cardbox'>
            <p> {`${dataInfo[10].image}`}</p>
                <div className= "saless"> 
                <p> {`${dataInfo[10].title}`}</p>
                <p> {`${dataInfo[10].cost}`}</p>
                </div>
           
             </div>
            
            
            </div>
                

           
        )
    }


export default Cards;