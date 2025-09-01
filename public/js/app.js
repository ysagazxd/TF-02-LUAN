const ulElement = document.querySelector(".content ul.demo");
const liElementCollection = ulElement.querySelectorAll("li");

liElementCollection.forEach((liElement) => {
    liElement.addEventListener("click", (event) => {
        const liElement = event.currentTarget;

        // Remove selected class from all li elements
        liElementCollection.forEach(li => li.classList.remove('selected'));
        
        // Add selected class to clicked li
        liElement.classList.add('selected');
    });
});

// Remove selection when clicking outside the list
document.addEventListener("click", (event) => {
    if (!ulElement.contains(event.target)) {
        liElementCollection.forEach(li => li.classList.remove('selected'));
    }
});