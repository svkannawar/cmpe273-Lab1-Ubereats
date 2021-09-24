function authenticateToken(req,res,next)
{
  const authHeader =req.headers.authorization;
 
  const token =authHeader.split(' ')[1];
  
  if(token==null)
  {
    res.sendStatus(401);
  }
  jwt.verify(token,secret_jwt_token,(err,user)=>{
    if(err)
      {
       
        res.sendStatus(403);
      }
      
    req.user=user;/// email ayega isme
    
    next();

  })
}

module.exports = authenticateToken;