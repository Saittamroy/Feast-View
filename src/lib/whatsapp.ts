export const WHATSAPP_NUMBER = "911234567890";
export const RESTAURANT_NAME = "Food Option";

export function getWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function createOrderMessage(itemName: string, price: number, quantity: number = 1) {
  const total = (price * quantity).toFixed(2);
  return `Hello ${RESTAURANT_NAME}, I would like to order:
${itemName} x${quantity}
Total Price: $${total}

Please confirm my order.`;
}

export function createGeneralMessage() {
  return `Hello ${RESTAURANT_NAME}, I have a query regarding...`;
}
