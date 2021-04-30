import React ,{useState} from 'react'
import axios from 'axios';
import { Typography } from 'antd';
import { Form, Input, Button} from 'antd';
import { UserOutlined} from '@ant-design/icons';
import Card2 from './Card2'


const { Title } = Typography;

function Search1() {
    const [username,setUsername]=useState("");
    const [type,setType]=useState("");
    const [answer,setAnswer]=useState("");
    const [question,setQuestion]=useState("");
    const [loading,setLoading]=useState(true);

const submitValue=(event)=>{
        console.log("ValueSubmit")
     axios.get(`https://8ball.delegator.com/magic/JSON/${username}`)
     .then(response =>{
        console.log(response.data)
        var  metrices = response.data.magic
        //   loading :false,
        //   type1:metrices.type,
        //   question1:metrices.question,
        //   answer1:metrices.answer,
        setType(metrices.type)
        setAnswer(metrices.answer);
        setQuestion(metrices.question);
        setLoading(false);
        console.log(type)
    })
    .catch(error => {
                alert('Invalid Inputs')
                setLoading(false);
            })
      }
     const onFinishFailed=()=>{
        console.log("Plz try again")
      }
    return (
        <div>
            <Title >Enter Question</Title>
            <Form onFinish={submitValue}
            onFinishFailed={onFinishFailed}>
  <Form.Item style={{ width: 300 ,marginLeft:'475px',fontSize:'25px' }}>
      <Input prefix={<UserOutlined className="site-form-item-icon"/>} value={username} placeholder="Question Here" onChange={(event)=>setUsername(event.target.value)}/>
  </Form.Item>
<br/>
<Button type="primary" htmlType="submit"  style={{marginLeft:'-10px'}}>Click Me</Button>
           <br/><br/>
    </Form>
    {type==="Contrary"?
    <Card2 type={type} answer={answer}  question={question} color1="Blue" font="monospace" loading={loading}/>:''}
    {type==="Affirmative"?
    <Card2 type={type} answer={answer}  question={question} color1="pink" font="cursive" loading={loading} />:''}
    {type==="Neutral"?
    <Card2 type={type} answer={answer}  question={question} color1="Purple" font="bold" loading={loading}/>:''}
        </div>
    )
}

export default Search1
