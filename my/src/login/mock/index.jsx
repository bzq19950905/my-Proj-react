import Mock from 'mockjs';
//登录验证数据
let LoginData=[{
    user:'zhangsan',
    pwd:'123456'
},{
    user:'lisi',
    pwd:'654321'
},{
    user:'1',
    pwd:'2'
}]
let nameDatas=[
    'zhangsan',
    'lisi'
]
//列表页数据
let listDatas={
    "zhangsan":[{
        nameId:'zhangsan',
        id:'0',
        title:'路飞',
        img:'https://f12.baidu.com/it/u=62466529,3197984907&fm=72',
        time:'2016-1-2'
    },{
        nameId:'zhangsan',
        id:'1',
        title:'草帽海贼团',
        img:'https://f11.baidu.com/it/u=1702154046,3138678857&fm=72',
        time:'2016-10-2'
    },{
        nameId:'zhangsan',
        id:'2',
        title:'帽子的誓言',
        img:'https://f10.baidu.com/it/u=1726574660,189006746&fm=72',
        time:'2016-10-2'
    }],
    "lisi":[{
        nameId:'lisi',
        id:'0',
        title:'唯一打败琦玉老师的东西',
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3658651225,3729237118&fm=27&gp=0.jpg',
        time:'2016-1-2'
    },{
        nameId:'lisi',
        id:'1',
        title:'琦玉老师',
        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1418127811,3984615982&fm=27&gp=0.jpg',
        time:'2017-10-2'
    },{
        nameId:'lisi',
        id:'2',
        title:'你渴望力量吗?!',
        img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2028382043,22959307&fm=27&gp=0.jpg',
        time:'2017-2-2'
    }]
}
Mock.mock('/login',(param)=>{
    let options=JSON.parse(param.body)
    if(options['user']===''||options['pwd']===''){
        return {
            code:'-1',
            msg:'用户名或密码为空'
        }
    }else{
        if(nameDatas.includes(options.user)){
            console.log(1)
            return {
                code:'0',
                msg:'登录成功'
                }
        }else{
            return {
                code:'1',
                msg:'用户名或密码错误'
                }
        }
    }    
        // LoginData.map((item,index)=>{
        //     if(options.user===item.user&&options.pwd===item.pwd){
        //         console.log(1)
        //         return {
        //             code:'1',
        //             msg:'登录成功'
        //         }
        //     }
        // })
})
Mock.mock('/list',(param)=>{
    let nameId= JSON.parse(param.body)
    let Id = nameId.name
    if(listDatas[Id]){
        return {
            code:'0',
            msg:'请求成功',
            data:listDatas[Id]
        }
    }else{
        return {
            code:'1',
            msg:'请求失败',
            data:null
        }
    }
})
Mock.mock('/detail',(param)=>{
     let Data=JSON.parse(param.body)
     console.log(Data)
     if(listDatas[Data.nameid][Data.id]){
        if(listDatas[Data.nameid][Data.id]){
            return {
                code:'0',
                msg:'请求成功',
                data:listDatas[Data.nameid][Data.id]
            }
        }else{
            return {
                code:'1',
                msg:'请求失败',
                data:null
            }
        }        
     }
 
})
export default Mock