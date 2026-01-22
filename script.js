
    
        let selectedCar = 'sedan';

        // Car selection
        document.querySelectorAll('.car-card').forEach(card => {
            card.addEventListener('click', function() {
                document.querySelectorAll('.car-card').forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                selectedCar = this.dataset.car;
            });
        });

        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').setAttribute('min', today);
        document.getElementById('date').value = today;

        // Set default time
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        document.getElementById('time').value = `${hours}:${minutes}`;

        function bookRide() {
            const pickup = document.getElementById('pickup').value;
            const dropoff = document.getElementById('dropoff').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const passengers = document.getElementById('passengers').value;

            if (!pickup || !dropoff || !date || !time || !name || !phone) {
                alert('Please fill in all required fields');
                return;
            }

            // Show confirmation modal
            document.getElementById('confirmPickup').textContent = pickup;
            document.getElementById('confirmDropoff').textContent = dropoff;
            document.getElementById('confirmDate').textContent = date;
            document.getElementById('confirmTime').textContent = time;
            document.getElementById('confirmCar').textContent = selectedCar.charAt(0).toUpperCase() + selectedCar.slice(1);
            document.getElementById('confirmPassengers').textContent = passengers;

            const modal = document.getElementById('confirmationModal');
            modal.style.display = 'flex';

            // Auto close after 5 seconds
            setTimeout(() => {
                closeModal();
            }, 5000);
        }

        function closeModal() {
            document.getElementById('confirmationModal').style.display = 'none';
            // Reset form
            document.getElementById('pickup').value = '';
            document.getElementById('dropoff').value = '';
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('passengers').value = '1';
        }
    
