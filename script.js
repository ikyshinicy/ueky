
async function loadData() {
    const res = await fetch('data.json');
    const data = await res.json();
    
    // Render Profile
    document.getElementById('hero-name').innerText = data.profile.name;
    document.getElementById('hero-bio').innerText = data.profile.bio;

    // Render Project Preview (limit 3)
    const projectBox = document.getElementById('project-preview');
    data.projects.slice(0, 3).forEach(p => {
        projectBox.innerHTML += `
            <div class="card" onclick="window.location='${p.link}'">
                <img src="${p.image}" alt="${p.title}">
                <h3>${p.title}</h3>
            </div>
        `;
    });

    // Render Services
    const serviceBox = document.getElementById('services-list');
    data.services.forEach(s => {
        serviceBox.innerHTML += `
            <div class="service-item">
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
            </div>
        `;
    });
}
loadData();
