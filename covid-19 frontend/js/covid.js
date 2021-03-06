let url = 'http://localhost:4000/';
let cases = [];
let totalCases = 0
let totalRecovered = 0
let totalActive = 0
let totalDeaths = 0
let country = 'world'
window.onload = async () => {
    await allCases()
    await getTotalCases()
    await getTotalRecovered()
    await getTotalActive()
    await getTotalDeaths()
    
    document.querySelector('#total-cases').innerHTML = totalCases
    document.querySelector('#total-recovered').innerHTML = totalRecovered
    document.querySelector('#total-active').innerHTML = totalActive
    document.querySelector('#total-deaths').innerHTML = totalDeaths
    
    let tbody = document.querySelector('#tbd');
    for(let elem of cases){
        if(elem.country !== 'World'){
            let tr = tbody.appendChild(document.createElement('tr'))
            tr.setAttribute('class', 'ntr');
            tr.appendChild(document.createElement('td')).innerHTML = elem.Country_Region
            tr.appendChild(document.createElement('td')).innerHTML = elem.Confirmed
            tr.appendChild(document.createElement('td')).innerHTML = elem.Deaths
            tr.appendChild(document.createElement('td')).innerHTML = elem.Recovered
            tr.appendChild(document.createElement('td')).innerHTML = elem.Active
            document.querySelector('#loading').style.display = 'none'
        }
    }
}
let allCases = () => {
    return fetch(url + 'cases')
    .then((response) => {
        return response.json()
    }).then((res) => {
        cases = res
    }).catch((err) => {
        console.log(err)
    })
}
let getTotalCases = () => {
    return fetch(url  + 'total-cases')
    .then((response) => {
        return response.json();
    }).then((res) => {
        totalCases = res
    }).catch((err) => {
        console.log(err)
    })
}
let getTotalRecovered = () => {
    return fetch(url  + 'total-recovered')
        .then((response) => {
            return response.json();
        }).then((res) => {
            totalRecovered = res
        }).catch((err) => {
            console.log(err)
        })
}
let getTotalActive = () => {
    return fetch(url + 'total-active')
        .then((response) => {
            return response.json();
        }).then((res) => {
            totalActive = res
        }).catch((err) => {
            console.log(err)
        })
}
let getTotalDeaths = () => {
    return fetch(url + 'total-deaths')
        .then((response) => {
            return response.json();
        }).then((res) => {
            totalDeaths = res
        }).catch((err) => {
            console.log(err)
        })
}








// console.log('covid loaded...')

// let cases = [];
// let url = 'http://localhost:5000/';
// let totalCases = 0
// let totalCases = 0
// let totalCases = 0
// let totalCases = 0
// let country = 'world'


// window.onload = async () => {
//     await allCases()
//     await getTotalCases(country)


//     let tbody = document.querySelector('#tbd');
//     for(let elem of cases){
//         console.log(elem.active)
//         let tr = tbody.appendChild(document.createElement('tr'))
//         tr.setAttribute('class', 'ntr');
//         tr.appendChild(document.createElement('td')).innerHTML = elem.country
//         tr.appendChild(document.createElement('td')).innerHTML = elem.active
//         tr.appendChild(document.createElement('td')).innerHTML = elem.recovered
//         tr.appendChild(document.createElement('td')).innerHTML = elem.deaths
//         tr.appendChild(document.createElement('td')).innerHTML = elem.cases
        
//     }
// }

// let allCases = () => {
//     return fetch(url + 'get-all-cases')
//     .then((response) => {
//         return response.json()
//     }).then((res) => {
//         cases = res
//     }).catch((err) => {
//         console.log(err)
//     })
// }

// let getTotalCases = (country) => {
//     return fetch(url + country + '/cases')
//     .then((response) => {
//         return 
//     })
// }