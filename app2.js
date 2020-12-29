document.addEventListener('DOMCOntentLoaded', () => {
    const form = document.querySelector('#form_1');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const nama = document.querySelector('input[name="nama"]').value;
        const alamat = document.querySelector('input[name="alamat"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const telepon = document.querySelector('input[name="telepon"]').value;

        const data = { nama, alamat, email, telepon }
        const option = {
            method: 'POST',
            header: {
                'Conten-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }
    })
})