(async () => {
  const { data: { user } } = await supabaseClient.auth.getUser();

  if (!user) {
    window.location.href = "index.html"; // Not logged in → redirect
  } else {
    document.getElementById("welcome").innerText = Welcome, ${user.email};
  }
})();

// Logout
document.getElementById("logoutBtn").addEventListener("click", async () => {
  await supabaseClient.auth.signOut();
  window.location.href = "index.html";
});
