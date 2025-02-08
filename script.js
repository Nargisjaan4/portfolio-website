document.getElementById("showMoreBtn").addEventListener("click", function() {
    const moreInfo = document.getElementById("moreInfo");
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        this.textContent = "Show Less";
    } else {
        moreInfo.style.display = "none";
        this.textContent = "Show More";
    }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
});

