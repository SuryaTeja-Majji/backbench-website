function orderWhatsApp(product, price) {
  let phone = "917799118600"; // Replace with your WhatsApp number
  let message = `Hello, I want to order: ${product} for ${price}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}
