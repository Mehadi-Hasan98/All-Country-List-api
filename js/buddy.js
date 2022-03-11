const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayBuddies(data));
}
loadBuddies();

const displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
      console.log(buddy);
      const p = document.createElement('p');
      p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
      Gender: ${buddy.gender}
      Country: ${buddy.location.country}
      Phone: ${buddy.phone}
      Email: ${buddy.email}
      `;
      buddiesDiv.appendChild(p);  
    }
}