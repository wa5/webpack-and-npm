const path=require('path')
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

   }
}