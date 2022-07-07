const calcularPrecioConDescuento = (precio, descuento) => {
  const porcentajePrecioDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
  return precioConDescuento;
};

const onClickButtonPriceDiscount = () => {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = parseInt(inputCoupon.value);
  const coupon = [
    1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90,
  ];
  let descuento;
  switch (couponValue) {
    case coupon[0]:
      descuento = 1;
      break;
    case coupon[1]:
      descuento = 5;
      break;
    case coupon[2]:
      descuento = 10;
      break;
    case coupon[3]:
      descuento = 15;
      break;
    case coupon[4]:
      descuento = 20;
      break;
    case coupon[5]:
      descuento = 25;
      break;
    case coupon[6]:
      descuento = 30;
      break;
    case coupon[7]:
      descuento = 35;
      break;
    case coupon[8]:
      descuento = 40;
      break;
    case coupon[9]:
      descuento = 45;
      break;
    case coupon[10]:
      descuento = 50;
      break;
    case coupon[11]:
      descuento = 60;
      break;
    case coupon[12]:
      descuento = 70;
      break;
    case coupon[13]:
      descuento = 80;
      break;
    case coupon[14]:
      descuento = 90;
      break;
  }

  const precio = calcularPrecioConDescuento(priceValue, descuento);
  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precio;
};

const limpiar = () => {
  document.getElementById("inputPrice").value = "";  
  document.getElementById("inputCoupon").value = "";  
  document.getElementById("ResultP").innerText = "";
}