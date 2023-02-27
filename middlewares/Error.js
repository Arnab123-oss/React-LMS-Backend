const ErrorMiddlewar=(err,req,res,next) => {

err.statusCode = err.statusCode || 500;
err.message = err.message ||"Internal server error"
    res.status(err.statusCodde).json({
        success: false,
        message:err.message,
    })
}

export default ErrorMiddlewar