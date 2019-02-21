const mongodb = require('mongodb');
// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;
function connect(collectionName){
    return new Promise((resolve,reject)=>{
        MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
            if(err){
                reject(err);
                return;
            }
            let db = database.db('icake');// 使用1809数据库
            let col = db.collection(collectionName);// 使用集合
            resolve({col,database});
        });
    });
}
//查
exports.find=(collectionName,query)=>{//集合名，查询条件
    return new Promise(async (resolve,reject)=>{
        let {col,database}=await connect(collectionName);
        col.find(query).toArray((err,result)=>{// 查询全部
            if(err){
                reject({
                    code:0,
                    msg:'fail',
                    data:{}
                });
            }else{
                resolve({
                    code:1,
                    msg:'success',
                    data:result
                });
            }
        });
        database.close();// 关闭数据库，避免资源浪费
    });
}
//分页查询
exports.findfenye=(collectionName,query,num)=>{//集合名，查询条件
    return new Promise(async (resolve,reject)=>{
        let {col,database}=await connect(collectionName);
        col.find(query).skip(num).limit(10).toArray((err,result)=>{// 查询10
            if(err){
                reject({
                    code:0,
                    msg:'fail',
                    data:{}
                });
            }else{
                resolve({
                    code:1,
                    msg:'success',
                    data:result
                });
            }
        });
        database.close();// 关闭数据库，避免资源浪费
    });
}
//排序
exports.Rank=(collectionName,query,rank)=>{//集合名，查询条件，排序条件
    return new Promise(async (resolve,reject)=>{
        let {col,database}=await connect(collectionName);
        col.find(query).sort(rank).toArray((err,result)=>{// 查询全部
            if(err){
                reject({
                    code:0,
                    msg:'fail',
                    data:{}
                });
            }else{
                resolve({
                    code:1,
                    msg:'success',
                    data:result
                });
            }
        });
        database.close();// 关闭数据库，避免资源浪费
    });
}
//增
exports.insert=(collectionName,data)=>{//集合名，数据
    return new Promise(async (resolve,reject)=>{
        let {col,database}=await connect(collectionName);
        col[Array.isArray(data)?'insertMany':'insertOne'](data,(err,result)=>{//插入
            if(err){
                reject({
                    code:0,
                    msg:'fail',
                    data:{}
                });
            }else{
                resolve({
                    code:1,
                    msg:'success',
                    data:result
                });
            }
        });
        database.close();// 关闭数据库，避免资源浪费
    });
}
//删
exports.delete=(collectionName,query)=>{//集合名，查询条件
    return new Promise(async (resolve,reject)=>{
        let {col,database}=await connect(collectionName);
        col['deleteMany'](query,(err,result)=>{
            if(err){
                reject({
                    code:0,
                    msg:'fail',
                    data:{}
                });
            }else{
                resolve({
                    code:1,
                    msg:'success',
                    data:result
                });
            }
        });
        database.close();// 关闭数据库，避免资源浪费
    });
}
//改
exports.update=(collectionName,query,data)=>{//集合名，查询条件,数据
    return new Promise(async (resolve,reject)=>{
        let {col,database}=await connect(collectionName);
        col['updateMany'](query,{$set:data},(err,result)=>{//插入
            if(err){
                reject({
                    code:0,
                    msg:'fail',
                    data:{}
                });
            }else{
                resolve({
                    code:1,
                    msg:'success',
                    data:result
                });
            }
        });
        database.close();// 关闭数据库，避免资源浪费
    });
}