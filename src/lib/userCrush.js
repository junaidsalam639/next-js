const UserCrush = async () => {
  const res = await fetch('https://lazy-puce-narwhal-cuff.cyclic.app/user' , {cache : 'no-cache'});
  if(!res.ok){
      throw new Error('failed to fecth data')
    }
    return res.json(); 
}

export default UserCrush


