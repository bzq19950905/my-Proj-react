import React, { Component } from 'react'
import {
    Form,
    Input,
    Button
} from 'antd';
const FormItem=Form.Item;
class Register extends Component {
    registerGo=()=>{
        let {
            history
        }=this.props
        let {
            validateFields
        }=this.props.form
        //force对已经校验的表单域 再次校验
        validateFields({force:true},(err,value)=>{
            if(err){
                return
            }
            history.push('/list')
        })
    }
    render() {
        const {getFieldDecorator,getFieldValue}=this.props.form
        //getFieldValue获取一组输入控件的值,如果不传入参数,则获取全部组件的值
        return (
            <div>
            <Form>
                <FormItem label='账号'>
                    {getFieldDecorator('userName',{
                 
                        rules:[
                            {
                                required:true,//必填项
                                message:'此项为必填项'
                            },
                            {
                                pattern:/^[A-Z,0-9]{2,5}$/,
                                message:'5位大写字母或数字'
                            }
                        ]
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label='密码' extra={
                    <em>此项只能为数字*********额外的提升信息</em>
                }>
                    {getFieldDecorator('passWord',{
                        rules:[
                            {
                                required:true,//必填项
                                message:'此项为必填项'
                            }
                        ]
                    })(
                        <Input type='password'/>
                    )}
                </FormItem>
                <FormItem label='再次输入密码'>
                    {getFieldDecorator('againpassWord',{
                        rules:[
                            {
                                required:true,//必填项
                                message:'此项为必填项'
                            },{
                                validator:(rule,value,callback)=>{
                                    //value 获取当前组件的value值
                                    //callback 回调函数
                                    let againPwd=getFieldValue('passWord')
                                    if(againPwd!==value){
                                        callback('两次输入密码不一致')
                                    }else{
                                        callback()
                                    }
                                }
                            }
                        ]
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem>
                    <Button onClick={this.registerGo}> 
                        注册
                    </Button>
                </FormItem>
            </Form>
        </div>
        )
    }
}
export default Form.create()(Register);
