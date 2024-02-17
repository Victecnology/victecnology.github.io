const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');

document.getElementById('form-modal1').addEventListener('submit', function(event) {
  event.preventDefault();

  btn1.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_wjv86i4';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn1.value = 'Send Email';
      alert('¡Su mensaje ha sido enviado correctamente!');

      // Borrar datos del formulario
      this.reset();

      // Recargar la página
      location.reload();
    })
    .catch((err) => {
      btn1.value = 'Send Email';
      console.log("FAILED...", err);
      alert('¡Error al intentar enviar el mensaje!');
    });
});

document.getElementById('form-modal2').addEventListener('submit', function(event) {
  event.preventDefault();

  btn2.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_wjv86i4';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn2.value = 'Send Email';
      alert('¡Su mensaje ha sido enviado correctamente!');

      // Borrar datos del formulario
      this.reset();

      // Recargar la página
      location.reload();
    })
    .catch((err) => {
      btn2.value = 'Send Email';
      console.log("FAILED...", err);
      alert('¡Error al intentar enviar el mensaje!');
    });
});

document.getElementById('form-modal3').addEventListener('submit', function(event) {
  event.preventDefault();

  btn3.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_wjv86i4';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn3.value = 'Send Email';
      alert('¡Su mensaje ha sido enviado correctamente!');

      // Borrar datos del formulario
      this.reset();

      // Recargar la página
      location.reload();
    })
    .catch((err) => {
      btn3.value = 'Send Email';
      console.log("FAILED...", err);
      alert('¡Error al intentar enviar el mensaje!');
    });
});

document.getElementById('form-modal4').addEventListener('submit', function(event) {
  event.preventDefault();

  btn4.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_wjv86i4';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn4.value = 'Send Email';
      alert('¡Su mensaje ha sido enviado correctamente!');

      // Borrar datos del formulario
      this.reset();

      // Recargar la página
      location.reload();
    })
    .catch((err) => {
      btn4.value = 'Send Email';
      console.log("FAILED...", err);
      alert('¡Error al intentar enviar el mensaje!');
    });
});