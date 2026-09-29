let currentProduct = null;
let selectedSize = null;
let selectedAdditives = [];

export function initModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;

  const overlay = modal.querySelector(".modal__overlay");
  const submitBtn = modal.querySelector(".modal__submit");

  function closeModal() {
    modal.classList.remove("modal--open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    currentProduct = null;
    selectedSize = null;
    selectedAdditives = [];
  }

  overlay.addEventListener("click", closeModal);
  submitBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal--open")) {
      closeModal();
    }
  });

  modal.querySelector(".modal__content").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card && card.dataset.productId) {
      openModal(card.dataset.productId);
    }
  });
}

function openModal(productId) {
  const modal = document.getElementById("modal");
  if (!modal) return;

  const product = window.productsData?.find((p) => p.name === productId);
  if (!product) return;

  currentProduct = product;
  selectedSize = "s";
  selectedAdditives = [];

  document.getElementById("modal-img").src = `./images/${product.image}`;
  document.getElementById("modal-img").alt = product.name;
  document.getElementById("modal-title").textContent = product.name;
  document.getElementById("modal-desc").textContent = product.description;

  const sizesContainer = document.getElementById("modal-sizes");
  sizesContainer.innerHTML = "";
  Object.entries(product.sizes).forEach(([key, value]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "modal__option";
    if (key === selectedSize) btn.classList.add("modal__option--active");
    btn.dataset.size = key;
    btn.innerHTML = `
      <span class="modal__option-num">${key.toUpperCase()}</span>
      <span class="modal__option-text">${value.size}</span>
    `;
    btn.addEventListener("click", () => selectSize(key));
    sizesContainer.appendChild(btn);
  });

  const additivesContainer = document.getElementById("modal-additives");
  additivesContainer.innerHTML = "";
  product.additives.forEach((additive, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "modal__option";
    btn.dataset.additive = additive.name;
    btn.innerHTML = `
      <span class="modal__option-num">${i + 1}</span>
      <span class="modal__option-text">${additive.name}</span>
    `;
    btn.addEventListener("click", () => toggleAdditive(additive.name));
    additivesContainer.appendChild(btn);
  });

  updateTotal();

  modal.classList.add("modal--open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function selectSize(size) {
  selectedSize = size;
  document.querySelectorAll("#modal-sizes .modal__option").forEach((btn) => {
    btn.classList.toggle("modal__option--active", btn.dataset.size === size);
  });
  updateTotal();
}

function toggleAdditive(name) {
  const index = selectedAdditives.indexOf(name);
  if (index > -1) {
    selectedAdditives.splice(index, 1);
  } else {
    selectedAdditives.push(name);
  }

  document
    .querySelectorAll("#modal-additives .modal__option")
    .forEach((btn) => {
      btn.classList.toggle(
        "modal__option--active",
        selectedAdditives.includes(btn.dataset.additive),
      );
    });

  updateTotal();
}

function updateTotal() {
  if (!currentProduct) return;

  let total = parseFloat(currentProduct.price);

  if (selectedSize && currentProduct.sizes[selectedSize]) {
    total += parseFloat(currentProduct.sizes[selectedSize]["add-price"]);
  }

  selectedAdditives.forEach((name) => {
    const additive = currentProduct.additives.find((a) => a.name === name);
    if (additive) {
      total += parseFloat(additive["add-price"]);
    }
  });

  document.getElementById("modal-total").textContent = `$${total.toFixed(2)}`;
}
