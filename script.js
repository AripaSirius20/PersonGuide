// Kişi listesini depolamak için bir dizi
let personList = [];

// Form gönderildiğinde çalıştırılacak fonksiyon
document.getElementById("personForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Form input değerlerini al
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  // Yeni kişi nesnesi oluştur
  const person = { name, phone, email };

  // Kişiyi listeye ekle
  personList.push(person);

  // Listeyi güncelle
  updatePersonList();

  // Formu sıfırla
  document.getElementById("personForm").reset();
});

// Kişi listesini güncellemek için fonksiyon
function updatePersonList() {
  const personListContainer = document.getElementById("personList");

  // Listeyi temizle
  personListContainer.innerHTML = "";

  // Her bir kişiyi render et
  personList.forEach((person, index) => {
    const personItem = document.createElement("div");
    personItem.classList.add("person-item");
    personItem.innerHTML = `
      <div>
        <strong>${person.name}</strong>
        <p>${person.phone}</p>
        <p>${person.email}</p>
      </div>
      <button onclick="removePerson(${index})">Sil</button>
    `;
    personListContainer.appendChild(personItem);
  });
}

// Kişiyi silmek için fonksiyon
function removePerson(index) {
  // İlgili kişiyi listeden çıkar
  personList.splice(index, 1);

  // Listeyi güncelle
  updatePersonList();
}
