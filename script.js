window.onload = () => {
  document.getElementById("dashboard").style.display = "none";
};

document.getElementById("togglePassword").addEventListener("change", () => {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
});

function loginUser(event) {
    event.preventDefault(); // Prevent form submission
    // Add logic for user login
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  }
  
  function forgotPassword() {
    // Logic to handle password recovery
    alert("Password recovery requested.");
  }
  
  function showSection(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.style.display = 'none');
    
    const activeSection = document.getElementById(section);
    if (activeSection) {
      activeSection.style.display = 'block';
    }
}

function forgotPassword() {
  alert("Please contact ICTO to reset your password.");
}

document.querySelectorAll(".section-btn").forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-section");

    document.querySelectorAll(".section-content").forEach(section => {
      section.style.display = "none";
    });

    document.getElementById(target).style.display = "block";
  });
});

document.getElementById("logoutBtn").addEventListener("click", logout);

function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("login-screen").style.display = "block";
  }
  