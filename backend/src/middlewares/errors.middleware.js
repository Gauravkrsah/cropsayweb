const { MulterError } = require("multer");


const notFound = (req, res, next) =>{
        next({ status: 404, message: "Resource not found" });
}

const validationErrors = (error, req, res, next) => {
    console.error(error);
    let statusCode = error.status || 500;
    let message = error.message || "server error...";
    let detail = error.detail || null;
  
    if (error.code === 11000) {
      const uniqueFailedKeys = Object.keys(error.keyPattern);
      detail = {};
      message = "validation Failed";
      uniqueFailedKeys.map((field) => {
        detail[field] = field + " Should be unique";
      });
      statusCode = 400;
    }
  
    res.status(statusCode).json({
      result: detail,
      message: message,
      meta: null,
    });
  }

const multerErrors = (req,res,next) => {
    if(error instanceof MulterError){
        if(error.code = "LIMIT_FILE_SIZE"){
            statusCode = 400,
            detail = {
                [error.field] : 'file size too large'
            }
    
        }
    }
    
    
    res.status(statusCode).json({
        result:detail,
        message : message,
        meta : null
    
})
}

  module.exports ={
    notFound,
    validationErrors,
    multerErrors
  }