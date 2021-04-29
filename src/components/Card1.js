import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import './Card1.css';
// let [varsad,sadas]= s
class Card1 extends Component {
    render() {
        const {type1,question1,answer1,color1} = this.props
        return (
            <div>
                <Card style={{ width: 300 ,marginLeft:'475px',fontSize:'25px',backgroundColor:`${color1}` }}>
    <div>
                       <div>
                         <h5>{type1}</h5>
                         <div>
                           <div>
                             <h6>{question1}</h6>
                           </div>
                           <div>
                           </div>
                           <div>
                             <h6>{answer1}</h6>
                           </div>
                         </div>
                       </div>
                     </div>
    </Card>
            </div>
        )
    }
}

export default Card1
