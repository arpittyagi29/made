import React, { Component } from 'react';
import axios from 'axios';
import { Typography } from 'antd';
import { Form, Input, Button} from 'antd';
import { UserOutlined} from '@ant-design/icons';
import Card2 from './Card2'

const { Title } = Typography;
// var Loader = require('react-loader');
export class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            loading :true,
            type1:'',
            question1:'',
            answer1:'',
            color1:'',
            
        }
    }
    changeValue=(event)=>{
        this.setState({
     username:event.target.value,
        })
        console.log("changed")
    }

submitValue=(event)=>{
        console.log("ValueSubmit")
     axios.get(`https://8ball.delegator.com/magic/JSON/${this.state.username}`)
     .then(response =>{
        console.log(response.data)
        var  metrices = response.data.magic
        this.setState({
          loading :false,
          type1:metrices.type,
          question1:metrices.question,
          answer1:metrices.answer,
        })

    })
    .catch(error => {
                alert('Invalid Inputs')
                this.setState({
                    loading:true
                })
            })
      }
      onFinishFailed=()=>{
        console.log("Plz try again")
      }
   
    
    render() {
        const {username,loading,type1,question1,answer1} = this.state;
        return (
            <div className="Heading">
            <Title >Enter Question</Title>
            <Form onFinish={this.submitValue}
            onFinishFailed={this.onFinishFailed}>
  <Form.Item style={{ width: 300 ,marginLeft:'475px',fontSize:'25px' }}>
      <Input prefix={<UserOutlined className="site-form-item-icon"/>} value={username} placeholder="Question Here" onChange={this.changeValue}/>
  </Form.Item>
<br/>
<Button type="primary" htmlType="submit"  style={{marginLeft:'-10px'}}>Click Me</Button>
           <br/> <br/>
    </Form>
    {type1==="Contrary"?
    <Card2 type1={type1} answer1={answer1}  question1={question1} color1="Blue" font="monospace" loading={loading}/>:''}
    {type1==="Affirmative"?
    <Card2 type1={type1} answer1={answer1}  question1={question1} color1="green" font="cursive" loading={loading}/>:''}
    {type1==="Neutral"?
    <Card2 type1={type1} answer1={answer1}  question1={question1} color1="Purple" font="bold" loading={loading}/>:''}
    </div>
        )
    }
}

export default Search
