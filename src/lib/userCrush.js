const UserCrush = async () => {
  const res = await fetch('http://localhost:8000/user' , {cache : 'no-cache'});
  if(!res.ok){
      throw new Error('failed to fecth data')
    }
    return res.json(); 
}

export default UserCrush


