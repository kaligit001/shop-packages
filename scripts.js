document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.checkbox');
    const checkSound = document.getElementById('check-sound');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                checkSound.currentTime = 0;
                checkSound.play();
            }
        });
    });
});

function showTotalChecked() {
    const checkboxes = document.querySelectorAll('.checkbox');
    let checkedCount = 0;
    let totalCost = 0;
    const selectedItems = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCount++;
            totalCost += parseFloat(checkbox.getAttribute('data-price'));
            selectedItems.push(checkbox.nextElementSibling.textContent);
        }
    });

    // Display the selected items and total cost on the second page
    const selectedItemsDiv = document.getElementById('selected-items');
    selectedItemsDiv.innerHTML = '';
    selectedItems.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = item;
        selectedItemsDiv.appendChild(itemElement);
    });

    const totalCostText = document.getElementById('total-cost');
    totalCostText.textContent = `Total Cost: Rs. ${totalCost.toFixed(2)}`;

    // Show the second page and hide the first page
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}

function goBack() {
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page1').style.display = 'block';
}

function confirmSelection() {
    alert('Selection confirmed!');
    location.reload();  // Reload the page to reset the form
}
