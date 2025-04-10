// Elementos da interface (Document Object Model - DOM)
const elements = {
    photoGrid: document.getElementById("photoGrid"), // Grade onde as fotos serão exibidas
    uploadModal: document.getElementById("uploadModal"), // Modal para upload de fotos
    addPhotoButton: document.getElementById("addPhotoBtn"), // Botão para abrir o modal de upload
    closeButton: document.querySelector(".close"), // Botão para fechar o modal de upload
    uploadForm: document.getElementById("uploadForm"), // Formulário de upload de fotos
    toast: document.getElementById("toast"), // Elemento para exibir notificações
    nameInput: document.getElementById("name"), // Campo de entrada para o nome da foto
    fileInput: document.getElementById("file"), // Campo de entrada para o arquivo da foto
}

const config = {
    apiUrl: "http://localhost:4000/pictures" //
};

function showNotification(message, type = "success") {
    const { toast } = elements;
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.style.opacity = "1";

    setTimeout(() => {
        toast.style.opacity = "0";
    }, 3000);
};

async function fetchPhotos() {
    try {
        const response = await fetch(config.apiUrl)
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        return data.pictures || [];
    } catch (error) {
        console.error("Falha ao carregar foto", error);
        showNotification("Falha ao carregar fotos", "error");
        return [];
    }
};

function renderPhotoGrid(photos) {
    const { photoGrid } = elements;
    if (photos.length === 0) {
        photoGrid.innerHTML = '<p class="no-photos">Nenhuma foto encontrada</p>';
        return;
    }
    photos.forEach((photo) => {
        const photoCard = createPhotoCardElement(photo);
        photoGrid.appendChild(photoCard);
    });
}
//  Colocar função de elementos HTML

function createPhotoCardElement(photo) {
    const card = document.createElement("div");
    card.className = "photo-card";
    const imageUrl = `${config.apiUrl}/${photo._id}/image`;

    card.innerHTML = `
        <img src="${imageUrl}" alt="${photo.name}" 
            onerror="this.onerror=null;this.src='${config.placeholderImage}'">
        <div class="photo-info">
            <h3>${photo.name}</h3>
            <p>${photo.description || "Sem descrição"}</p>
        </div>
        `;
    
    return card;
}


async function uploadNewPhoto(formData) {
    try {
        const response = await fetch(config.apiUrl, {
            method: "POST",
            body: formData,
        });
        if (!response.ok) {
            throw new Error("Falha no upload da foto");
        }
        showNotification("Foto enviada com sucesso");
        closeUploadModal();
        elements.uploadForm.reset();
        loadAndDisplayPhotos();
    } catch (error) {
        console.error("Erro no upload:", error);
        showNotification("Falha ao enviar foto", "error");
    }
}

function openUploadModal() {
    elements.uploadModal.style.display = "block";
};

function closeUploadModal() {
    elements.uploadModal.style.display = "none";
}

function handleOutsideClick(event) {
    if (event.target === elements.uploadModal) {
        closeUploadModal();
    }
};

function handleFormSubmit(event) {
    event.preventDefault();
    formData.append("name", elements.nameInput.value);
    formData.append("file", elements.fileInput.files[0]);

    uploadNewPhoto(photoData);
}

async function loadAndDisplayPhotos() {
    const photos = await fetchPhotos();
    renderPhotoGrid(photos);
}


function setupEventListeners() {
    elements.addPhotoButton.addEventListener("click", openUploadModal);
    elements.closeButton.addEventListener("click", closeUploadModal);
    window.addEventListener("click", handleOutsideClick);
    elements.uploadForm.addEventListener("submit", handleFormSubmit);
}

document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners();
    loadAndDisplayPhotos();
});