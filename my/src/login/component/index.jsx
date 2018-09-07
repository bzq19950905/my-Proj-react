import React, { Component } from 'react'
import '../css/index.css';
import axios from 'axios';
import '../mock/index.jsx';
//头部
import Header from './header.jsx';
export default class componentName extends Component {
    constructor(props){
        super(props)
        console.log(props)
        //获取登录信息
        this.user=React.createRef();
        this.pwd=React.createRef();
        this.state={
            userId:null
        }
    }
    onLogin=()=>{
        let {
            history
        }=this.props;
        let obj={}
        obj.user=this.user.current.value;
        obj.pwd=this.pwd.current.value;
        //发送请求
        axios.post('/login',{...obj}).then(res=>{
            if(res.data.code==='-1'){
                alert(res.data.msg)
            }else if(res.data.code==='1'){
                alert(res.data.msg)
            }else if(res.data.code==='0'){
                alert(res.data.msg)
                  //赋值
                this.setState({
                    userId:this.user.current.value
                })
                history.push(`/list/?id=${this.user.current.value}`)
            }
        })
    }
    render() {
        return (
            <div className='wrap'>
                <Header title='登录界面'/>
                <section className='section'>
                    <div className="login">
                        <div className="login_box">
                            <input type="text" placeholder='请输入账号' ref={this.user}/>
                            <input type="password" placeholder='请输入密码' ref={this.pwd}/>
                            <button onClick={this.onLogin}>提交</button>
                        </div>
                    </div>
                </section>
             
            </div>
        )
    }
}
