import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import React, { Component } from 'react'
import Index from '../component/index.jsx';
//电影页
import Film from '../component/film/index.jsx';

export default class componentName extends Component {
    render() {
        return (
           <BrowserRouter>
            <Switch>
                <Route path='/' render={()=> {return <Redirect to='/home/shouye'/>}} exact/>
                <Route path='/home' component={Index}/>
               
                <Route path='/film' component={Film}/>
              
                
            </Switch>
                   
                    
             
           </BrowserRouter>
        )
    }
}
// const IndexGo=({match})=>{
//     console.log(match)
//     return(
//         <BrowserRouter>
//     <div>
//                 <Route path={`${match.url}/`} render={()=><Redirect to='/home'/>} exact />
//                 <Route path={`${match.url}home`} component={Index}/>
//                 <Route path={`${match.url}screen`} component={Screen}/>
//                 <Route path={`${match.url}shopping`} component={Shopping}/>
//                 <Route path={`${match.url}my`} component={My}/>
//                 </div>
//         </BrowserRouter>
//     )
// }
