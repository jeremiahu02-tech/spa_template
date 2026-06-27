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

    // Close the modal cleanly after submission
    closeBookingModal();

    // Clear the form fields for the next interaction
    document.getElementById('bookingForm').reset();
    /* Premium WhatsApp Button Styling */
});
function sendWhatsAppOrder(event) {
    event.preventDefault();
    // Add this small validation check inside your sendWhatsAppOrder function
    if (!service || service === "") {
        alert("Please select what service you care for!");
        return;

    }
    const nameElement = document.getElementById('clientName');
    const serviceElement = document.getElementById('serviceSelected');
    const dateElement = document.getElementById('bookingDate');
    const timeElement = document.getElementById('bookingTime');

    const name = nameElement ? nameElement.value : "Valued Client";
    const service = serviceElement ? serviceElement.value : "Not selected";
    const date = dateElement ? dateElement.value : "Not specified";
    const time = timeElement ? timeElement.value : "Not specified";

    // 2. Target WhatsApp number (Use international format, no plus sign)
    // Replace with your real testing number!
    const businessPhone = "2349130860225";

    // 3. Build the professional template text
    const message = `Hello Richie Prime Designs, I would like to book a session!%0A%0A` +
        `*Client Name:* ${encodeURIComponent(name)}%0A` +
        `*Service Selected:* ${encodeURIComponent(service)}%0A` +
        `*Preferred Date:* ${encodeURIComponent(date)}%0A` +
        `*Preferred Time:* ${encodeURIComponent(time)}%0A%0A` +
        `Please let me know if this booking is confirmed.`;
    // 4. Fire the URL link
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${businessPhone}&text=${message}`;

    // 7. Open official WhatsApp interface
    window.open(whatsappUrl, '_blank');
}