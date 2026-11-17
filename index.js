fetch('./navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el nav:', error));

const whatsapp = document.getElementById('whatsapp-placeholder');

whatsapp.innerHTML = `
<a
  href="https://api.whatsapp.com/send?phone=5493863691748&text=Hola%2C%20vi%20tu%20p%C3%A1gina%20web%20sobre%20Monteros%20y%20quisiera%20realizar%20una%20consulta."
  target="_blank"
  class="whatsapp-button"
  title="Contactarme por WhatsApp"
>
  <i class="bi bi-whatsapp"></i>
</a>
`;