import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as  CreateReduxAction from '../store/saveFruit.action.jsx';
import {bindActionCreators} from 'redux'
class CreateRedux extends Component {

    constructor(props){
        super(props)
        this.input=React.createRef()
    }
    saveData=()=>{
        let{
            openDor
        }=this.props
        let text=this.input.current.value
        openDor(text)
    }
    render() {
        console.log(this.props.apple)
        return (
            <div>
                <input type="text" ref={this.input}/>
                <button onClick={this.saveData}>存数据</button>
            </div>
        )
    }
}
const mapStateToProps=(store)=>({...store.SaveFruit})
const mapDispatchToProps=(dispatch)=>bindActionCreators({...CreateReduxAction},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(CreateRedux);

