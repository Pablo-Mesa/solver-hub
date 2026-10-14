'use strict';

// JSON Resume es la única fuente de datos personales y profesionales.
// Los textos editoriales de Solver Hub permanecen en index.html.
(async function cargarResume() {
  const status = document.getElementById('contact-status');
  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element && typeof value === 'string' && value.trim()) {
      element.textContent = value.trim();
    }
  };
  const addTags = (list, keywords) => {
    if (!list || !Array.isArray(keywords)) return;
    list.replaceChildren();
    for (const keyword of keywords) {
      if (typeof keyword !== 'string' || !keyword.trim()) continue;
      const li = document.createElement('li');
      li.textContent = keyword;
      list.append(li);
    }
  };

  try {
    const response = await fetch('./data/resume.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const resume = await response.json();
    const basics = resume.basics || {};

    setText('resume-name', basics.name);
    setText('resume-label', basics.label);
    const signature = document.getElementById('profile-signature');
    if (basics.name && basics.label && signature) signature.hidden = false;

    const skills = Array.isArray(resume.skills) ? resume.skills : [];
    document.querySelectorAll('[data-skill-index]').forEach(list => {
      const skill = skills[Number(list.dataset.skillIndex)];
      addTags(list, skill?.keywords);
    });

    const project = (Array.isArray(resume.projects) ? resume.projects : [])
      .find(item => item.name === 'Solver App');
    if (project) {
      setText('project-title', project.name);
      setText('project-description', project.description);
      addTags(document.getElementById('project-keywords'), project.keywords);
    }

    let contactCount = 0;
    const email = typeof basics.email === 'string' ? basics.email.trim() : '';
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const link = document.getElementById('email-link');
      link.href = `mailto:${email}?subject=${encodeURIComponent('Contacto desde Solver Hub')}`;
      link.hidden = false;
      const emailBlock = document.getElementById('email-contact');
      const emailAddress = document.getElementById('email-address');
      const copyButton = document.getElementById('email-copy');
      const feedback = document.getElementById('email-feedback');
      emailAddress.textContent = email;
      emailBlock.hidden = false;
      copyButton.addEventListener('click', async () => {
        try {
          if (!navigator.clipboard?.writeText) throw new Error('Portapapeles no disponible');
          await navigator.clipboard.writeText(email);
          feedback.textContent = 'Correo copiado';
        } catch (error) {
          // Sin permisos de portapapeles, el correo permanece visible y seleccionable.
          feedback.textContent = 'Seleccioná la dirección y copiala manualmente.';
        }
      });
      contactCount++;
    }
    const phone = typeof basics.phone === 'string' ? basics.phone.replace(/[^\d+]/g, '') : '';
    if (/^\+\d{8,15}$/.test(phone)) {
      const call = document.getElementById('phone-link');
      call.href = `tel:${phone}`;
      call.textContent = `Llamar al ${phone}`;
      call.hidden = false;
      const whatsapp = document.getElementById('whatsapp-link');
      whatsapp.href = `https://wa.me/${phone.slice(1)}?text=${encodeURIComponent('Hola Pablo, vi Solver Hub y quisiera conversar con vos.')}`;
      whatsapp.hidden = false;
      contactCount += 2;
    }
    const linkedin = (Array.isArray(basics.profiles) ? basics.profiles : [])
      .find(p => p.network?.toLowerCase() === 'linkedin' && /^https:\/\/(www\.)?linkedin\.com\//i.test(p.url || ''));
    if (linkedin) {
      const link = document.getElementById('linkedin-link');
      link.href = linkedin.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.hidden = false;
      contactCount++;
    }
    status.textContent = contactCount
      ? 'Elegí el canal que te resulte más cómodo.'
      : 'Los canales de contacto no están disponibles por el momento.';
  } catch (error) {
    console.error('No se pudo cargar data/resume.json:', error);
    if (status) status.textContent =
      'No pudimos cargar los contactos. Intentá actualizar la página.';
    const signature = document.getElementById('profile-signature');
    if (signature) signature.hidden = true;
  }
})();
