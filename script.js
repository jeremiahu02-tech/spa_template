// ==========================================================================
// 1. MODAL DISPLAY LOGIC
// ==========================================================================

// Function to open the booking modal
function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'flex';

    // Auto-set the date picker minimum to today's date so clients can't book the past
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
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
// 2. FORM SUBMISSION & WHATSAPP ORDER LOGIC
// ==========================================================================
function sendWhatsAppOrder(event) {
    if (event) event.preventDefault(); // Prevents the page from reloading

    // 1. Grab the inputs matching your HTML IDs exactly
    const nameElement = document.getElementById('clientName');
    const serviceElement = document.getElementById('serviceSelected');
    const dateElement = document.getElementById('bookingDate');
    const timeElement = document.getElementById('bookingTime');

    const name = nameElement ? nameElement.value.trim() : "";
    const service = serviceElement ? serviceElement.value : "";
    const date = dateElement ? dateElement.value : "";
    const time = timeElement ? timeElement.value : "";

    // 2. Validation Check: Ensure no empty values go through
    if (!name || !service || !date || !time) {
        alert("Please fill in all details before sending your order!");
        return; // Stops execution if something is missing
    }

    // 3. Target WhatsApp number
    const businessPhone = "2347065410524";

    // 4. Build the clean, professional text layout
    const message = `Hello Richie Prime Designs, I would like to book a session!%0A%0A` +
        `*Client Name:* ${encodeURIComponent(name)}%0A` +
        `*Service Selected:* ${encodeURIComponent(service)}%0A` +
        `*Preferred Date:* ${encodeURIComponent(date)}%0A` +
        `*Preferred Time:* ${encodeURIComponent(time)}%0A%0A` +
        `Please let me know if this booking is confirmed.`;

    // 5. Fire the URL link
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${businessPhone}&text=${message}`;

    // 6. Open official WhatsApp interface
    window.open(whatsappUrl, '_blank');

    // 7. Clean up the interface after launching WhatsApp
    closeBookingModal();
    document.getElementById('bookingForm').reset();
}