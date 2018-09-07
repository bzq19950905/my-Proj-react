import React ,{Component} from 'react';
import TableButton from './TableButton.jsx';
class TableData extends Component {
    
    render() { 
        let{
            data,
            btns,
            defaultData,
            getNewData
        }=this.props;
        return ( 
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                名字
                            </td>
                            <td>
                                性别
                            </td>
                            <td>
                                年龄
                            </td>
                            <td>
                                操作
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length>0&&data.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.sex}
                                        </td>
                                        <td>
                                            {item.age}
                                        </td>
                                        <td>
                                          <TableButton btns={btns} add={index}  defaultData={defaultData} getNewData={getNewData}/>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default TableData;