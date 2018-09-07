import React, { Component } from 'react'
import {
    Form,
    Input,
    Button
}from 'antd'
const FormItem=Form.Item;
class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            user:'321',
            pwd:'123'
        }
    }
    loginGo=()=>{
        let {
            history
        }=this.props;
        let {
            validateFields
        }=this.props.form
        let{
            user,
            pwd
        }=this.state
        validateFields((error,values)=>{
            console.log(error,'---',values)
            if(error){
                alert('数据错误')
                return;
            }
            console.log(values.userName===user&&values.passWord===pwd)
            if(values.userName===user&&values.passWord===pwd){
                history.push('/list')
            }else{
                alert('登录失败')
                history.push('/register')
            }

        })
    }
    render() {
        const {getFieldDecorator}=this.props.form
        return (
            <div>
                <Form>
                    <FormItem>
                        {getFieldDecorator('userName',{
                            //校验子节点的时机
                            // validateTrigger:'onBlur',
                            //---------设置默认值
                            // initialValue:'张三'
                            //---------校验
                            rules:[
                                {
                                    pattern:/^[A-Z,0-9]{2,5}$/,//正则匹配
                                    message:'5位大写字母或数字'
                                }
                                // {
                                //     max:10,//最大长度
                                //     message:'用户名字过长'
                                // },{
                                //     min:5,//最小长度
                                //     message:'用户名字过短'
                                // }
                            ]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('passWord',{

                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button onClick={this.loginGo}> 
                            登录
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Form.create()(Index)