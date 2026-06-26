// ==========================================================================
// 1. MODAL DISPLAY LOGIC
// ==========================================================================

// Function to open the booking modal
function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'flex';

    // Auto-set the date picker minimum to today's date so clients can't book the past
    const dateInput = document.getElementById('booking-date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

// Function to close the booking modal
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
}

// Close the modal if the client clicks anywhere outside the white box
window.onclick = function (event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ==========================================================================
// 2. FORM SUBMISSION & CLIENT NOTIFICATION LOGIC
// ==========================================================================
document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the page from refreshing

    // Grab the inputs chosen by the client
    const serviceSelect = document.getElementById('service-select');
    const selectedService = serviceSelect.options[serviceSelect.selectedIndex].text;
    const selectedDate = document.getElementById('booking-date').value;
    const selectedTime = document.getElementById('booking-time').value;

    // Build a clean, professional summary alert
    alert(`🎉 Booking Requested!\n\nService: ${selectedService}\nDate: ${selectedDate}\nTime: ${selectedTime}\n\nNext, the system would process a deposit payment or route this reservation layout instantly to the business manager's portal!`);

    // Close the modal cleanly after submission
    closeBookingModal();

    // Clear the form fields for the next interaction
    document.getElementById('bookingForm').reset();
});