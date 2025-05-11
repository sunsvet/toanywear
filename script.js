function addDestination() {
    const destinations = document.getElementById('destinations');
    const row = document.createElement('div');
    row.classList.add('destination-row');
  
    row.innerHTML = `
      <input type="text" class="city-input" placeholder="Enter a city" />
      <input type="date" class="date-input" />
      <input type="date" class="date-input" />
      <button class="remove-btn" onclick="removeRow(this)">✕</button>
    `;
  
    destinations.appendChild(row);
  }
  
  function removeRow(btn) {
    const row = btn.parentNode;
    row.remove();
  }
  