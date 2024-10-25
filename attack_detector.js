document.getElementById('start-button').addEventListener('click', function() {
    const status = document.getElementById('status');
    const results = document.getElementById('results');
    const attackList = document.getElementById('attack-list');
    status.classList.remove('hidden');
    results.classList.add('hidden');
    attackList.innerHTML = '';

    setTimeout(() => {
        status.classList.add('hidden');
        results.classList.remove('hidden');
        const attacks = [
            'Deauth Attack from MAC: 00:11:22:33:44:55',
            'Deauth Attack from MAC: 66:77:88:99:AA:BB'
        ];
        attacks.forEach(attack => {
            const listItem = document.createElement('li');
            listItem.textContent = attack;
            attackList.appendChild(listItem);
        });
    }, 2000); // Simulate detection delay
});
