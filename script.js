// Step navigation
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// Step 1: Login (accept any username & password)
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();
  let error = document.getElementById("loginError");

  if (user === "" || pass === "") {
    error.textContent = "Username and Password required!";
    return;
  }

  // ✅ Allow any username and password
  error.textContent = "";
  alert(`✅ Welcome, ${user}!`);
  showPage("formPage"); // Go to next page
});

// Step 2: Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let error = document.getElementById("formError");

  if (name === "" || email === "" || subject === "") {
    error.textContent = "All fields are required!";
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    error.textContent = "Enter a valid email!";
    return;
  }

  error.textContent = "";
  alert("✅ Contact form submitted!");
  showPage("todoPage"); // Go to next page
});

// Step 3: To-Do List
document.getElementById("addTaskBtn").addEventListener("click", function() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();
  if (task === "") return;

  let li = document.createElement("li");
  li.textContent = task;

  let completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.onclick = () => {
    li.style.animation = "fadeOut 0.3s ease-out forwards";
    setTimeout(() => li.remove(), 300);
  };

  li.appendChild(completeBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
});
