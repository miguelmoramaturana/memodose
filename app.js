const takeDose = document.querySelector('#take-dose');
const card = document.querySelector('.due-card');
let taken = false;

takeDose.addEventListener('click', () => {
  taken = !taken;
  card.classList.toggle('is-taken', taken);
  document.querySelector('#dose-count').textContent = taken ? '2/3' : '1/3';
  document.querySelector('#dose-status').textContent = taken ? 'Toma registrada' : 'Toca ahora';
  takeDose.innerHTML = taken ? '<span aria-hidden="true">↶</span> Volver a probar' : '<span aria-hidden="true">✓</span> Marcar como tomada';
  document.querySelector('.ring').style.background = taken
    ? 'conic-gradient(var(--green) 0 66.6%, #303739 66.6%)'
    : '';
  document.querySelector('#demo-message').textContent = taken
    ? 'Así de simple. Esta es solo una demostración.'
    : 'Una vista de tu día. Prueba a marcar la toma.';
});

document.querySelector('#year').textContent = new Date().getFullYear();

const translations = {
  es: {
    nav: ['Cómo funciona', 'Tu día', 'Preguntas'],
    hero: ['Tu rutina, un poco más ligera', 'Un recordatorio <br>menos en<br>tu cabeza.', 'Tu receta se convierte en recordatorios.<br class="desktop-break"> Escanea, revisa y sigue con tu día.<br class="desktop-break"> MemoDose te avisa cuando toca.', 'Así funciona', 'Próximamente para iPhone', 'Tú siempre confirmas los datos antes de guardar.'],
    phone: ['Receta escaneada', 'Revisada por ti. Lista para tu día.', 'Hoy', 'Un día a la vez.', 'tomadas', 'Vas bien.', 'Cada toma cuenta.', 'Tu progreso de hoy', 'Toca ahora', 'Tu medicamento', 'La dosis que confirmaste', 'Marcar como tomada', 'Tu horario', 'Hoy', 'Toma de la mañana', 'Registrada', 'Toma de la noche', 'Más tarde', 'Hoy', 'Recetas', 'Historial', 'Una vista de tu día. Prueba a marcar la toma.'],
    formats: ['Empieza con lo que tienes.', 'Receta impresa', 'Receta manuscrita', 'Caja o envase', 'PDF o captura'],
    how: ['De la receta<br>a tu rutina.', 'Menos datos que escribir.<br>Más claridad para cada día.', 'Tu receta', 'Medicación<br>y horarios', 'Lista para escanear', 'Escanea.', 'Haz una foto de tu receta o envase, o importa un PDF o una captura. La IA extrae los datos de tus medicamentos.', 'Datos de la receta', 'Detectado', 'Por confirmar', 'Duración', 'Revisar', 'Revisar y guardar', 'Revisa.', 'Comprueba el medicamento, la dosis y los horarios. Corrige lo que haga falta: nada se guarda sin tu confirmación.', 'Es hora de tu toma.', 'Tu recordatorio está listo.', 'Sigue con tu día.', 'Recibe el recordatorio, registra tu toma y consulta tu historial. Tu rutina, organizada en un solo lugar.'],
    day: ['«¿Ya me la tomé?»<br>Ahora puedes verlo.', 'Lo que tomaste, lo que toca y lo que viene después. MemoDose te ayuda a llevar el hilo sin tener que recordarlo todo.', 'Consulta tus tomas de un vistazo', 'Lleva un historial de tu rutina', 'Añade medicamentos también a mano', 'Tu día, en orden', 'Hoy', 'Una cosa menos.', 'Toma registrada', 'Tomada', 'Un pequeño recordatorio.', 'Tu siguiente toma', 'Ahora', 'Por ahora, sigue con tu día.', 'Te avisaremos cuando toque'],
    trust: ['Elefante de MemoDose', 'Una ayuda para recordar.<br>La última palabra es tuya.', 'La IA lee la receta; tú revisas el resultado. MemoDose organiza los datos que confirmas y no sustituye las indicaciones de tu profesional de salud.'],
    faq: ['Por si te <br>lo preguntas.', 'Las cosas claras desde el principio.', '¿Tengo que escanear una receta?', 'No. También puedes añadir tus medicamentos a mano y configurar sus horarios. El escaneo es una ayuda para reducir lo que tienes que escribir.', '¿Y si la IA lee algo mal?', 'Siempre revisas el resultado antes de guardarlo. Puedes corregir los datos y completar lo que no se haya podido leer. Confirma la información con tu receta y consulta a tu profesional de salud si tienes dudas.', '¿MemoDose es gratis?', 'MemoDose está pensada con una prueba gratis de 7 días y una suscripción mensual o anual. Podrás consultar el precio y las condiciones en la app antes de suscribirte.', '¿Qué pasa si vence mi suscripción?', 'Los recordatorios que ya configuraste siguen funcionando. Para escanear, añadir o editar medicamentos, necesitas una suscripción activa.', '¿Cómo funciona el escaneo con IA?', 'Con tu consentimiento, el documento que eliges se envía a un servicio en la nube que usa Claude, de Anthropic, para extraer sus datos. Puedes desactivar el escaneo con IA en Ajustes y añadir tus medicamentos manualmente.', '¿Cuándo podré descargarla?', 'Estamos preparando el lanzamiento para iPhone. Aquí encontrarás el enlace de descarga cuando MemoDose esté disponible. También está prevista una versión para Android.'],
    close: ['Tu día tiene más cosas<br>que recordar.', 'Deja que MemoDose te ayude con esta.', 'Próximamente para iPhone', 'Vuelve a conocer cómo funciona ↑'],
    footer: ['Una app de LoneMonkey.', 'Términos de uso']
  },
  en: {
    nav: ['How it works', 'Your day', 'Questions'],
    hero: ['A little less to carry', 'One less reminder<br>to keep<br>in your head.', 'Your prescription becomes reminders.<br class="desktop-break"> Scan, review, and get on with your day.<br class="desktop-break"> MemoDose tells you when it’s time.', 'See how it works', 'Coming soon for iPhone', 'You always confirm the details before saving.'],
    phone: ['Prescription scanned', 'Reviewed by you. Ready for your day.', 'Today', 'One day at a time.', 'taken', 'You’re doing well.', 'Every dose counts.', 'Your progress today', 'Due now', 'Your medication', 'The dose you confirmed', 'Mark as taken', 'Your schedule', 'Today', 'Morning dose', 'Recorded', 'Evening dose', 'Later', 'Today', 'Prescriptions', 'History', 'A view of your day. Try marking the dose.'],
    formats: ['Start with what you have.', 'Printed prescription', 'Handwritten prescription', 'Box or bottle', 'PDF or screenshot'],
    how: ['From prescription<br>to routine.', 'Less to type in.<br>More clarity for every day.', 'Your prescription', 'Medication<br>and timing', 'Ready to scan', 'Scan.', 'Take a photo of your prescription or package, or import a PDF or screenshot. AI extracts your medication details.', 'Prescription details', 'Detected', 'To confirm', 'Duration', 'Review', 'Review and save', 'Review.', 'Check the medication, dose, and timing. Fix anything needed: nothing is saved without your confirmation.', 'Time for your dose.', 'Your reminder is ready.', 'Get on with your day.', 'Get a reminder, log your dose, and check your history. Your routine, in one place.'],
    day: ['“Did I take it?”<br>Now you can see.', 'What you took, what’s due, and what comes next. MemoDose helps you keep the thread without having to remember everything.', 'See your doses at a glance', 'Keep a history of your routine', 'Add medications manually too', 'Your day, in order', 'Today', 'One thing off your mind.', 'Dose recorded', 'Taken', 'A small reminder.', 'Your next dose', 'Now', 'For now, keep going.', 'We’ll let you know when it’s time'],
    trust: ['MemoDose elephant', 'A little help remembering.<br>You have the final word.', 'AI reads the prescription; you review the result. MemoDose organizes the details you confirm and never replaces guidance from your healthcare professional.'],
    faq: ['In case you<br>were wondering.', 'Clear answers from the start.', 'Do I have to scan a prescription?', 'No. You can also add medications by hand and set their schedules. Scanning simply means less to type.', 'What if AI gets something wrong?', 'You always review the result before saving it. Correct details and fill in anything it could not read. Check your prescription and ask your healthcare professional if you have questions.', 'Is MemoDose free?', 'MemoDose starts with a 7-day free trial and a monthly or annual subscription. You can see the price and terms in the app before subscribing.', 'What happens when my subscription ends?', 'Existing reminders keep working. To scan, add, or edit medications, you need an active subscription.', 'How does the AI scan work?', 'With your consent, the document you choose is sent to a cloud service using Anthropic’s Claude to extract its details. You can turn off AI scanning in Settings and add medications manually.', 'When can I download it?', 'We’re preparing the iPhone launch. This is where you’ll find the download link when MemoDose is available. An Android version is also planned.'],
    close: ['Your day has enough<br>to remember.', 'Let MemoDose help with this one.', 'Coming soon for iPhone', 'See how it works again ↑'],
    footer: ['An app by LoneMonkey.', 'Terms of use']
  }
};

function setText(selector, value, index = 0) {
  const node = document.querySelectorAll(selector)[index];
  if (node) node.innerHTML = value;
}

function applyLanguage(language) {
  const t = translations[language];
  document.documentElement.lang = language;
  document.title = language === 'en' ? 'MemoDose — One less reminder to keep in your head' : 'MemoDose — Un recordatorio menos en tu cabeza';
  document.querySelector('meta[name="description"]').content = language === 'en' ? 'Turn prescriptions into reminders. Scan, review, and organize every dose with MemoDose.' : 'De tu receta a tus recordatorios. MemoDose te ayuda a organizar cada toma.';
  t.nav.forEach((v, i) => setText('header nav a', v, i));
  t.hero.forEach((v, i) => setText(['.availability', 'h1', '.intro', '.hero-actions .button', '.coming', '.hero-footnote'][i], v));
  t.phone.forEach((v, i) => setText(['.scan-note strong', '.scan-note div>span', '.app-heading h2', '.app-heading p', '.ring span', '.progress-card>div>strong', '.progress-card p', '.legend', '#dose-status', '.due-card h3', '.due-card p', '#take-dose', '.schedule-heading strong', '.schedule-heading span', '.schedule-row strong', '.schedule-row small', '.schedule-row strong', '.schedule-row small', '.app-tabs span small', '.app-tabs span small', '.app-tabs span small', '#demo-message'][i], v, i > 16 && i < 20 ? i - 17 : i));
  // Repeated labels inside the phone need explicit row indexes.
  const scheduleRows = document.querySelectorAll('.schedule-row');
  [t.phone[14], t.phone[16]].forEach((value, index) => { const node = scheduleRows[index]?.querySelector('strong'); if (node) node.textContent = value; });
  [t.phone[15], t.phone[17]].forEach((value, index) => { const node = scheduleRows[index]?.querySelector('small'); if (node) node.textContent = value; });
  const tabLabels = document.querySelectorAll('.app-tabs small');
  [t.phone[18], t.phone[19], t.phone[20]].forEach((value, index) => { if (tabLabels[index]) tabLabels[index].textContent = value; });
  // Keep the small app mockup explicit: several labels share the same element type.
  const phoneText = {
    '.scan-note strong': t.phone[0],
    '.scan-note div>span': t.phone[1],
    '.app-heading h2': t.phone[2],
    '.app-heading p': t.phone[3],
    '.ring span': t.phone[4],
    '.progress-card>div>strong': t.phone[5],
    '.progress-card p': t.phone[6],
    '.legend': t.phone[7],
    '#dose-status': t.phone[8],
    '.due-card h3': t.phone[9],
    '.due-card p': t.phone[10],
    '#take-dose': t.phone[11],
    '.schedule-heading strong': t.phone[12],
    '.schedule-heading span': t.phone[13],
    '#demo-message': t.phone[21]
  };
  Object.entries(phoneText).forEach(([selector, value]) => { const node = document.querySelector(selector); if (node) node.textContent = value; });
  const headerCta = document.querySelector('.header .button-small');
  if (headerCta) headerCta.innerHTML = `${language === 'en' ? 'Explore MemoDose' : 'Conoce MemoDose'} <span aria-hidden="true">↗</span>`;
  t.formats.forEach((v, i) => setText(i ? '.formats li' : '.formats>span', v, i ? i - 1 : 0));
  t.how.forEach((v, i) => setText(['.section-heading h2', '.section-heading p', '.paper>span', '.handwriting', '.visual-chip', '.step h3', '.step>p', '.review-sheet strong', '.review-sheet p span', '.review-sheet p span', '.review-highlight', '.review-highlight span', '.review-confirm', '.step h3', '.step>p', '.notification strong', '.notification p', '.step h3', '.step>p'][i], v, i === 13 ? 1 : i === 17 ? 2 : i === 18 ? 2 : i === 14 ? 1 : 0));
  t.day.forEach((v, i) => setText(['.daily-copy h2', '.daily-copy>p', '.benefits li', '.benefits li', '.benefits li', '.timeline-date', '.timeline-date span', '.timeline-item h3', '.timeline-item p', '.timeline-pill', '.timeline-item h3', '.timeline-item p', '.timeline-pill', '.timeline-item h3', '.timeline-item p'][i], v, i === 1 ? 0 : i === 2 || i === 3 || i === 4 ? i - 2 : i > 6 && i < 10 ? i - 7 : i > 9 && i < 13 ? i - 10 : i > 12 ? 2 : 0));
  // The timeline has repeated headings and status pills, so translate each row explicitly.
  const timelineRows = document.querySelectorAll('.timeline-item');
  const timelineData = [
    [t.day[7], t.day[8], t.day[9]],
    [t.day[10], t.day[11], t.day[12]],
    [t.day[13], t.day[14], null]
  ];
  timelineData.forEach((row, index) => {
    const node = timelineRows[index];
    if (!node) return;
    const heading = node.querySelector('h3');
    const subtitle = node.querySelector('p');
    const pill = node.querySelector('.timeline-pill');
    if (heading) heading.textContent = row[0];
    if (subtitle) subtitle.textContent = row[1];
    if (pill && row[2]) pill.textContent = row[2];
  });
  const timelineDate = document.querySelector('.timeline-date');
  if (timelineDate) timelineDate.firstChild.textContent = `${t.day[5]} `;
  const timelineDateLabel = document.querySelector('.timeline-date span');
  if (timelineDateLabel) timelineDateLabel.textContent = t.day[6];
  t.trust.forEach((v, i) => setText(['.trust img', '.trust h2', '.trust p'][i], v));
  t.faq.forEach((v, i) => setText(i < 2 ? ['.faq h2', '.faq>div>p'][i] : i % 2 === 0 ? '.questions summary' : '.questions details>p', v, i < 2 ? 0 : Math.floor((i - 2) / 2)));
  t.close.forEach((v, i) => setText(['.closing h2', '.closing>p', '.launch-status', '.closing>a'][i], v));
  t.footer.forEach((v, i) => setText(['.footer>span:not(.copyright)', '.footer>a:not(.brand)'][i], v));
  document.querySelector('#language-switch').textContent = language === 'en' ? 'ES' : 'EN';
  document.querySelector('#language-switch').setAttribute('aria-label', language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés');
  localStorage.setItem('memodose-language', language);
}

const languageSwitch = document.querySelector('#language-switch');
const initialLanguage = localStorage.getItem('memodose-language') || 'es';
languageSwitch.addEventListener('click', () => applyLanguage(document.documentElement.lang === 'es' ? 'en' : 'es'));
if (initialLanguage === 'en') applyLanguage('en');
