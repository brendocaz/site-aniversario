const elementos = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.16 });

    elementos.forEach((el) => observer.observe(el));
  
  const btnMenu = document.querySelector('.menu');
  const menuFlutuante = document.getElementById('menuFlutuante');

  btnMenu.addEventListener('click', () => {
      menuFlutuante.classList.toggle('ativo');
  });