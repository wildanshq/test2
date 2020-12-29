getData();
async function getData() {
    const response = await fetch('http://127.0.0.1:5000/user')
    const data = await response.json();
    const tbody = document.querySelector('tbody')
    for (item of data) {
        const tr = document.createElement('tr');
        const id = document.createElement('td');
        const nama = document.createElement('td');
        const alamat = document.createElement('td');
        
        id.innerHTML = `${item.id}`;
        nama.innerHTML = `${item.nama}`;
        alamat.innerHTML = `${item.alamat}`;

        tr.append(id, nama, alamat);
        tbody.appendChild(tr)
    }
    console.log(data)
}