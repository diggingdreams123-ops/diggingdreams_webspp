// TODO: replace with real links
const CONFIG = {
  bookingUrl: "#visit",
  waiverUrl: "#visit",
  // Paste your Google Apps Script Web App URL here (see README)
  scriptUrl: "https://script.google.com/macros/s/AKfycbz4Pwgwi_2P7sUg9uOFTjGgmTbfVxyr_iSlB_vHSEgQddmaqyCZpmAbZlYMgRP1-Lt9/exec"
};

document.querySelectorAll("[data-book]").forEach(a => a.href = CONFIG.bookingUrl);
document.querySelectorAll("[data-waiver]").forEach(a => a.href = CONFIG.waiverUrl);

// Contact form: posts to a Google Apps Script web app, which emails the owner.
// The destination email lives in the owner's Google account, never in this code.
const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");
form.addEventListener("submit", async e => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  if (!CONFIG.scriptUrl) { status.textContent = "The enquiry form isn't connected yet. Please check back soon."; return; }
  const button = form.querySelector("button");
  button.disabled = true; status.textContent = "Sending…";
  try {
    // no-cors: Google's response is opaque, so we can only detect network failures
    await fetch(CONFIG.scriptUrl, { method: "POST", mode: "no-cors", body: new URLSearchParams(new FormData(form)) });
    form.reset(); status.textContent = "Thank you! We'll be in touch soon.";
  } catch (err) {
    status.textContent = "Sorry, something went wrong. Please try again.";
  }
  button.disabled = false;
});

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector("#nav");
btn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", false); }
});
document.querySelector("#year").textContent = new Date().getFullYear();
