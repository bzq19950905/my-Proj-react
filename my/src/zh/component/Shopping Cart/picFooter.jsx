import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'
export default class Footer extends Component {
    constructor(props){
        super(props)
        this.state={
            visible: false 
        }
    }
    showModal = () => {
        this.setState({
          visible: true
        });
      }
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    render() {
        let{
            Action,
            SPicNum
        }=this.props
        return (
            <div className='pic_footer'>
                <h1>
                    商品总价: <span>{SPicNum.toFixed(2) }</span> 元
                </h1>
                <Button type="primary" onClick={this.showModal}>去买单</Button>
                <Modal
                    title="购物总价"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                   总价:{SPicNum.toFixed(2)}
                </Modal>
            </div>
        )
    }
}
