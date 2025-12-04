(function(){
  const form = document.getElementById('demo-form');
  const nameInput = document.getElementById('name');
  const colorInput = document.getElementById('color');
  const previewName = document.getElementById('preview-name');
  const root = document.documentElement;

  function apply(){
    const name = (nameInput.value || 'friend').trim();
    const color = colorInput.value || '#4F46E5';
    previewName.textContent = name;
    root.style.setProperty('--accent', color);
  }

  form.addEventListener('input', apply);
  form.addEventListener('submit', function(e){
    e.preventDefault();
    apply();
  });

  // Initial paint
  apply();
})();
