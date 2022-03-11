const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();
// Country Details
const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h2>${country.name}</h2>
        <h5>Capital: ${country.capital}</h5>
        <a href ="#"><button id="btn" onclick="loadCountryByName('${country.name}')">Details</button></a>
        `;

        // const h1 = document.createElement('h1');
        // h1.innerText = country.name;
        // div.appendChild(h1);
        // const h5 = document.createElement('h5');
        // h5.innerText = country.capital;
        // div.appendChild(h5);
        // const p = document.createElement('p');
        // p.innerText = country.area;
        // div.appendChild(p);
        // const p = document.createElement('p');
        // p.innerText = country.population;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
}
// Single Country Details
const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h2>${country.name}</h2>
    <h4>SubRegion: ${country.subregion}</h4>
    <h5>Capital: ${country.capital}</h5>
    <h6>Area: ${country.area}</h6>
    <h6>Population: ${country.population}</h6>
    <h6>Currency: ${country.currencies[0].name}</h6>
    <h6>Language: ${country.languages[0].name}</h6>
    <img width="100px" src="${country.flag}">
    `;
}

