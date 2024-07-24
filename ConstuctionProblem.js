const reportForm = document.getElementById('report-submission');
const reportData = document.getElementById('report-data');

// Function to display error message
function displayError(message) {
  alert(message);
}

// Function to submit a new report
function submitReport(event) {
  event.preventDefault();

  const problemDescription = document.getElementById('problem-description').value;
  const imageVideo = document.getElementById('image-video').value;
  const location = document.getElementById('location').value;
  const status = document.getElementById('status').value;

  // Basic validation (can be improved)
  if (!problemDescription || !location) {
    displayError('Please fill in all required fields.');
    return;
  }

  // Simulate sending data to a server (replace with actual database interaction)
  console.log('Report submitted:', {
    problemDescription,
    imageVideo,
    location,
    status,
  });

  // Clear the form after
