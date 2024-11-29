function loadLeafletMap() {
    const map = L.map('map').setView([-12.0, 40.0], 5);

    // Ajouter la couche de tuiles OpenStreetMap
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Liste des emplacements avec image
    const locations = [
        { name: "Pemba", lat: -12.9714, lng: 39.5226, description: "Site historique.", image: "Image_texte_pemba.png" },
        { name: "Shanga", lat: -2.5237, lng: 40.9856, description: "Ruines historiques.", image: "Image_shanga.png" },
        { name: "Aden", lat: 12.7855, lng: 45.0187, description: "Port de commerce.", image: "Image-texte aden1.png" },
        { name: "Mogadiscio", lat: 2.0469, lng: 45.3182, description: "capitale de la Somalie.", image: "textesmogadiscio.png" },
        { name: "Mombasa", lat: -4.0435, lng: 39.6682, description: "Fort Jésus.", image: "textemombasa.png" },
        { name: "Kilwa", lat: -8.9459, lng: 39.5103, description: "Ruines de Kilwa.", image: "texteskilwa.png" },
        { name: "Paté", lat: -2.1089, lng: 41.1306, description: "Site historique.", image: "textepate.png" },
        { name: "Monomotapa", lat: -20.0, lng: 30.0, description: "Ancien royaume.", image: "textezimbabwe.png" },
        { name: "Sofala", lat: -20.1454, lng: 34.5897, description: "Port historique.", image: "textesofala.png" }
    ];

    // Ajout des marqueurs avec popups
    locations.forEach(loc => {
        L.marker([loc.lat, loc.lng]).addTo(map)
            .bindPopup(`
                <div style="text-align: center;">
                    <img src="${loc.image}" alt="${loc.name}" style="width: 100%; border-radius: 5px; margin-bottom: 10px;">
                    <strong>${loc.name}</strong><br>
                    ${loc.description}
                </div>
            `);
    });
}

// Charger la carte une fois le DOM prêt
document.addEventListener('DOMContentLoaded', loadLeafletMap);

// Sélection du bouton
const backToTopButton = document.getElementById("backToTop");

// Affiche le bouton si on défile de 100px vers le bas
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Remonte en haut de la page lors du clic
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Scroll fluide
    });
});

            
