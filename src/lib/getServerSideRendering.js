
export async function getServerSideRendering() {
   const res = await fetch('https://lazy-puce-narwhal-cuff.cyclic.app/user')
   const jsonUser = await res.json();
     console.log('server side Rendering------>',jsonUser.user);
    return jsonUser
}

