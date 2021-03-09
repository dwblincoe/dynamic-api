import User from './models/user';
import jwt from 'jsonwebtoken';

export const saveCurrentUser = async({req}) => {
    let authToken = null;
    let currentUser = null;

    try{
      authToken = req.headers.authorization;

      if(authToken){
        const verified = await jwt.verify(authToken, 'secret');
        if(verified){
            currentUser = await User.findOne({where: {id: verified.id}});
        }else{
            throw new Error("Could not authenticate")
        }
      }


    }catch(error){
      console.warn(`Could not authenticate with token ${authToken}`)
    }

    return {
      authToken,
      currentUser
    }
}

export const authenticated = next => (root, args, context, info) => {
    console.log(context.currentUser)
    if(!context.currentUser){
        throw new Error('Unathenticated')
    };

    return next(root, args, context, info);
}

export const tradeTokenForUser = (token) => {
    console.log(token)
}