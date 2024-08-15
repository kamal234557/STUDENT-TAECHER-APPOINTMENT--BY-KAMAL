document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const studentName = document.getElementById('studentName').value;
    const teacherName = document.getElementById('teacherName').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here, you can send the collected data to a server or process it further
    console.log({
        studentName,
        teacherName,
        date,
        time,
        subject,
        message
    });

    // Display success message
    document.getElementById('successMessage').style.display = 'block';

    // Optionally reset the form after submission
    document.getElementById('appointmentForm').reset();
});
