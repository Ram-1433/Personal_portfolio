// // Smooth Scrolling for Navigation
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         document.getElementById(targetId).scrollIntoView({
//             behavior: "smooth"
//         });
//     });
// });




// Contact Popup Functions
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Resume Download Button
document.querySelector(".download-button").addEventListener("click", function() {
    window.open("https://drive.google.com/file/d/1fcHyyIyH_AkNfUh-D-VKy3IC75ju9soe/view?usp=drive_link", "resume.pdf");
});

// Contact Icons Hover Effect
document.querySelectorAll('.icons a img').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.transform = "scale(1.2)";
        this.style.transition = "0.3s";
    });

    icon.addEventListener('mouseleave', function() {
        this.style.transform = "scale(1)";
    });
});
