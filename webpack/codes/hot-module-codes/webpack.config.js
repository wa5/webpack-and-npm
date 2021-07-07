const path=require('path')
const webpack=require('webpack')
module.exports={
     mode:"production",
   // mode:"development"
   entry:'./src/index.js',
output:{

    path:path.resolve(__dirname,'build'),
    filename:'js/main.js',
    publicPath:'/assets/'

},




   devServer:{
       port:1234,
       contentBase: path.resolve(__dirname, "dist"),
       hot:true

   },


   plugins:[
       new webpack.HotModuleReplacementPlugin()
   ]
}
