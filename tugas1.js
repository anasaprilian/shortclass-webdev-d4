function check(data) {
    return data
}

function findCountry(name) {
    const countries = ['Indonesia', 'Malaysia', 'Singapura', 'Brunei', 'Filipina', 'Kamboja', 'Amerika Serikat', 'Inggris', 'Timor Leste'];

    const found = countries.find((a) => a === name);
    
    if (found) {
        console.log('Ada');
    }
    else {
        console.log('Tidak Ada');
    }

    return (`Negara Yang Di Cari : ${name}`);
}

console.log(findCountry('Indonesia'));