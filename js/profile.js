document.querySelectorAll('.profile-sidebar nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.content-block').forEach(block => block.classList.remove('active'));
        const target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
        if (target === 'orders') {
            document.querySelectorAll('.orders-buttons button').forEach(btn => btn.classList.remove('active'));
            document.querySelector('.orders-buttons button[data-target="all-orders"]').classList.add('active');
            document.querySelectorAll('.orders-content').forEach(content => content.style.display = 'none');
            document.getElementById('all-orders').style.display = 'block';
            updateAllOrders();
        } else if (target === 'discounts') {
            document.querySelectorAll('.discounts-buttons button').forEach(btn => btn.classList.remove('active'));
            document.querySelector('.discounts-buttons button[data-target="all-discounts"]').classList.add('active');
            document.querySelectorAll('.discounts-content').forEach(content => content.style.display = 'none');
            document.getElementById('all-discounts').style.display = 'block';
        }
    });
});

document.querySelectorAll('.orders-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.orders-buttons button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.orders-content').forEach(content => content.style.display = 'none');
        document.getElementById(this.getAttribute('data-target')).style.display = 'block';
        if (this.getAttribute('data-target') === 'all-orders') {
            updateAllOrders();
        }
    });
});

function updateAllOrders() {
    const allOrdersTableBody = document.querySelector('#all-orders .orders-table tbody');
    allOrdersTableBody.innerHTML = '';
    document.querySelectorAll('#pending-orders .orders-table tbody tr, #shipped-orders .orders-table tbody tr').forEach(row => {
        const clonedRow = row.cloneNode(true);
        const statusCell = clonedRow.querySelector('td:last-child');
        if (row.closest('#pending-orders')) {
            const currentStatus = row.querySelector('td:last-child').textContent.trim();
            if (currentStatus.includes('Отменен')) {
                statusCell.innerHTML = '<span class="status-canceled">✖ Отменен</span>';
            } else {
                statusCell.innerHTML = '<span class="status-pending">⏳ В ожидании</span>';
            }
        } else if (row.closest('#shipped-orders')) {
            const currentStatus = row.querySelector('td:last-child').textContent.trim();
            if (currentStatus.includes('Принять заказ')) {
                statusCell.innerHTML = '<span class="status-delivered">📦 Доставляется</span>';
            } else {
                statusCell.innerHTML = '<span class="status-accepted">✔ Принят</span>';
            }
        }
        allOrdersTableBody.appendChild(clonedRow);
    });
}

document.querySelectorAll('#shipped-orders .orders-table button.accept').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        row.querySelector('td:last-child').innerHTML = '<span class="status-accepted">✔ Принят</span>'; // Обновляем статус в shipped-orders
        updateAllOrders(); // Синхронизируем изменения с таблицей all-orders
    });
});

document.querySelectorAll('#pending-orders .orders-table button.cancel').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        row.querySelector('td:last-child').innerHTML = '<span class="status-canceled">✖ Отменен</span>';
        updateAllOrders(); // Затем синхронизируем с "all-orders"
    });
});

// Add functionality for discount tabs
document.querySelectorAll('.discounts-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.discounts-buttons button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.discounts-content').forEach(content => content.style.display = 'none');
        document.getElementById(this.getAttribute('data-target')).style.display = 'block';
        if (this.getAttribute('data-target') === 'all-discounts') {
            document.getElementById('all-discounts').style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle displaying all discounts
    function showAllDiscounts() {
        const allDiscountsTableBody = document.querySelector('#all-discounts .discounts-table tbody');
        allDiscountsTableBody.innerHTML = '';
        document.querySelectorAll('#active-discounts .discounts-table tbody tr, #expired-discounts .discounts-table tbody tr').forEach(row => {
            const clonedRow = row.cloneNode(true);
            allDiscountsTableBody.appendChild(clonedRow);
        });
        document.querySelectorAll('.discounts-content').forEach(function(content) {
            content.classList.remove('active');
        });
        document.getElementById('all-discounts').classList.add('active');
    }

    // Event listener for all discounts button
    document.querySelector('button[data-target="all-discounts"]').addEventListener('click', function() {
        showAllDiscounts();
    });

    // Initial call to show all discounts
    showAllDiscounts();

    // Function to remove discount row
    function removeDiscountRow(button) {
        const row = button.closest('tr');
        const rowIndex = Array.from(row.parentNode.children).indexOf(row);

        // Remove the row from all tables
        document.querySelectorAll('.discounts-table tbody').forEach(tbody => {
            const rowToRemove = tbody.children[rowIndex];
            if (rowToRemove) {
                rowToRemove.remove();
            }
        });
    }

    // Event listener for delete buttons in discounts table
    document.querySelectorAll('.discounts-table .delete').forEach(button => {
        button.addEventListener('click', function() {
            removeDiscountRow(this);
        });
    });

    // Add event listeners for dynamically added rows
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete')) {
            removeDiscountRow(event.target);
        }
    });
});
