// Example data arrays containing script information for different categories
const scriptsDataMats = [
    {
        title: "WW2 Materials Pack",
        imageSrc: "images/ww2_duffy_thumbnail.png",
        imageAlt: "WW2 Duffy",
        description: "This pack includes a variety of World War II materials set up for use in Black Ops 3.",
        author: "Gordan Freeman (duffy)",
        downloadLink: "https://drive.google.com/file/d/1kH-P-sTddw6W1_CKUX2wPGExGXCuK1lM/view?usp=drive_link",
        releaseDate: "2023-08-01"
    },
    {
        title: "PBR Pack",
        imageSrc: "https://freepbr.com/wp-content/uploads/2017/07/sandstonecliff-preview2.jpg",
        imageAlt: "Verk0 PBR",
        description: "This pack includes a variety of PBR materials set up for use in Black Ops 3.",
        author: "Verk0",
        downloadLink: "https://mega.nz/file/cjpVwSjZ#KXH3Su3VwujtzyKvFNQpn_lfsutac093SljrDH3a0Aw",
        releaseDate: "2023-07-01"
    },
    // Add more objects for additional script cards as needed
];

const scriptsDataUI = [
    {
        title: "Improved BO3 HUD",
        imageSrc: "https://avatarfiles.alphacoders.com/717/71754.jpg",
        imageAlt: "CBRUD BO3 Hud",
        description: "This pack includes custom UI elements for Black Ops 3.",
        author: "ChefBoyRUDumb",
        downloadLink: "https://cdn.discordapp.com/attachments/1173893595686768661/1187636461193920584/Chefs_BO3_HUD.zip?ex=669ca4a5&is=669b5325&hm=07ae77d1d29e230aa196e3d055baa72fb2899ccf2e648feb2983219c2abee38d&",
        releaseDate: "2024-07-20"
    }
    // Add more objects for additional script cards as needed
];

const scriptsDataModels = [
    {
        title: "Unused",
        imageSrc: "https://ccia.ugr.es/cvg/CG/images/base/9.gif",
        imageAlt: "WW2 Weapons",
        description: "This pack includes a variety of World War II weapons.",
        author: "Weapon Master",
        downloadLink: "https://example.com/download2",
        releaseDate: "2024-07-01"
    }
    // Add more objects for additional script cards as needed
];

const scriptsDataCharacters = [
    {
        title: "Victis Character Crew",
        imageSrc: "images/emox_victis_thumbnail.png",
        imageAlt: "Victis Emox",
        description: "This pack includes the 4 victis characters set up for use in Black Ops 3.",
        author: "eMox Manga",
        downloadLink: "https://mega.nz/file/QtgTQALT#ZoMW_n8E9XjXT6yLVVtyP17X-RsYWyUYgmU5tTUed-I",
        releaseDate: "2024-07-01"
    }
];

const scriptsDataWeapons = [
    {
        title: "Victis Character Crew",
        imageSrc: "images/emox_victis_thumbnail.png",
        imageAlt: "Victis Emox",
        description: "This pack includes the 4 victis characters set up for use in Black Ops 3.",
        author: "eMox Manga",
        downloadLink: "https://mega.nz/file/QtgTQALT#ZoMW_n8E9XjXT6yLVVtyP17X-RsYWyUYgmU5tTUed-I",
        releaseDate: "2024-07-01"
    }
];

const scriptsDataPerks = [
    {
        title: "Victis Character Crew",
        imageSrc: "images/emox_victis_thumbnail.png",
        imageAlt: "Victis Emox",
        description: "This pack includes the 4 victis characters set up for use in Black Ops 3.",
        author: "eMox Manga",
        downloadLink: "https://mega.nz/file/QtgTQALT#ZoMW_n8E9XjXT6yLVVtyP17X-RsYWyUYgmU5tTUed-I",
        releaseDate: "2024-07-01"
    }
];

// Attach data arrays to the window object for access
window.scriptsDataMats = scriptsDataMats;
window.scriptsDataUI = scriptsDataUI;
window.scriptsDataModels = scriptsDataModels;
window.scriptsDataCharacters = scriptsDataCharacters;
window.scriptsDataWeapons = scriptsDataWeapons;
window.scriptsDataPerks = scriptsDataPerks;

// Function to create and append script-card elements for a specific category
function createScriptCards(categoryId, categoryData) {
    const container = document.getElementById(`scripts-container-${categoryId}`);
    
    // Clear previous content in the container
    container.innerHTML = '';

    categoryData.forEach((script) => {
        // Create elements
        const card = document.createElement("div");
        card.classList.add("script-card");
        card.setAttribute('data-title', script.title.toLowerCase()); // Set data-title attribute
        card.setAttribute('data-author', script.author.toLowerCase()); // Set data-author attribute

        const title = document.createElement("h2");
        title.textContent = script.title;

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("script-image");
        const image = document.createElement("img");
        image.src = script.imageSrc;
        image.alt = script.imageAlt;
        image.width = 512;
        image.height = 512;
        imageDiv.appendChild(image);

        const description = document.createElement("p");
        description.textContent = script.description;

        const author = document.createElement("h3");
        author.textContent = "By " + script.author;
        author.classList.add("author-background");

        const downloadLink = document.createElement("a");
        downloadLink.href = script.downloadLink;
        downloadLink.textContent = "Download";
        downloadLink.setAttribute("download", "");
        downloadLink.setAttribute("target", "_top");

        // Append elements to card
        card.appendChild(title);
        card.appendChild(imageDiv);
        card.appendChild(description);
        card.appendChild(author);
        card.appendChild(downloadLink);

        // Append card to container
        container.appendChild(card);
    });
}

// Function to show a specific category and hide others
function showCategory(categoryId) {
    var categories = document.getElementsByClassName("category");
    for (var i = 0; i < categories.length; i++) {
        categories[i].classList.add("hidden");
    }
    document.getElementById(categoryId).classList.remove("hidden");

    // Determine which category data to use
    let categoryData;
    if (categoryId === "category1") {
        categoryData = window.scriptsDataMats;
    } else if (categoryId === "category2") {
        categoryData = window.scriptsDataUI;
    } else if (categoryId === "category3") {
        categoryData = window.scriptsDataModels;
    } else if (categoryId === "category4") {
        categoryData = window.scriptsDataCharacters;
    } else if (categoryId === "category5") {
        categoryData = window.scriptsDataWeapons;
    } else if (categoryId == "category6") {
        categoryData = window.scriptsDataPerks;
    }
    // Initial rendering of script cards
    createScriptCards(categoryId, categoryData);
}

// Function to sort script cards
function sortItems() {
    const sortBy = document.getElementById('sort-by').value;
    const categoryId = document.querySelector('.category:not(.hidden)').id;
    let categoryData;

    if (categoryId === "category1") {
        categoryData = window.scriptsDataMats;
    } else if (categoryId === "category2") {
        categoryData = window.scriptsDataUI;
    } else if (categoryId === "category3") {
        categoryData = window.scriptsDataModels;
    } else if (categoryId === "category4") {
        categoryData = window.scriptsDataCharacters;
    } else if (categoryId == "category5") {
        categoryData = window.scriptsDataWeapons;
    } else if (categoryId == "category6" ) {
        categoryData = window.scriptsDataPerks;
    }

    if (sortBy === 'az') {
        categoryData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'date') {
        categoryData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }

    createScriptCards(categoryId, categoryData);
}

// Initial call to display default category and sort items
window.onload = () => {
    const defaultCategoryId = "category1"; // Set default category ID
    showCategory(defaultCategoryId); // Display default category initially
    document.getElementById('sort-by').addEventListener('change', sortItems);
    
    // Automatically sort items on load based on the default sort option
    sortItems();
};

// Function to filter script cards based on search input
function filterCards() {
    // Get the search input value and convert it to lowercase
    const searchInput = document.getElementById('search-bar');
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Split the search term into individual keywords
    const keywords = searchTerm.split(/\s+/); // Splits by spaces

    // Get the currently visible category
    const categoryId = document.querySelector('.category:not(.hidden)').id;
    const scriptCards = document.querySelectorAll(`#scripts-container-${categoryId} .script-card`);

    // Iterate over each script card
    scriptCards.forEach(card => {
        // Get the title and author from data attributes
        const title = card.getAttribute('data-title') || '';
        const author = card.getAttribute('data-author') || '';

        // Check if all keywords are present in either the title or the author
        const matches = keywords.every(keyword => 
            title.includes(keyword) || author.includes(keyword)
        );

        // Show or hide the card based on the match
        card.style.display = matches ? 'flex' : 'none';
    });
}

// Add event listener to the search input to call filterCards on input change
document.getElementById('search-bar').addEventListener('input', filterCards);
