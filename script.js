// ==========================
// Part 1: Date Display
// ==========================

var date = new Date();

var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();

if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}

var dateString = "Today is " + month + "/" + day + "/" + year;

document.getElementById("dateOutput").textContent = dateString;
// ==========================
// Part 2: Number Conversion
// ==========================

// Step 1: variables
var num1 = "37";
var num2 = "100";
var decimal1 = "16.50";
var text1 = "hello";

// Steps 2 & 3: convert, check, and build a sentence for each
var converted1 = Number(num1);
var nan1 = Number.isNaN(converted1);
var int1 = Number.isInteger(converted1);
var result1 = "Original: '" + num1 + "' -> Converted: " + converted1 +
              " -> isNaN: " + nan1 + " -> isInteger: " + int1;

var converted2 = Number(num2);
var nan2 = Number.isNaN(converted2);
var int2 = Number.isInteger(converted2);
var result2 = "Original: '" + num2 + "' -> Converted: " + converted2 +
              " -> isNaN: " + nan2 + " -> isInteger: " + int2;

var converted3 = Number(decimal1);
var nan3 = Number.isNaN(converted3);
var int3 = Number.isInteger(converted3);
var result3 = "Original: '" + decimal1 + "' -> Converted: " + converted3 +
              " -> isNaN: " + nan3 + " -> isInteger: " + int3;

var converted4 = Number(text1);
var nan4 = Number.isNaN(converted4);
var int4 = Number.isInteger(converted4);
var result4 = "Original: '" + text1 + "' -> Converted: " + converted4 +
              " -> isNaN: " + nan4 + " -> isInteger: " + int4;

// PART 4: CONDITIONAL MESSAGE 1
var nanMessage;
    if (Number.isNaN(converted4)) {
      nanMessage = "'" + text1 + "' is not a valid number.";
    } else {
      nanMessage = "'" + text1 + "' is a valid number.";
    }

var intMessage;
    if (Number.isInteger(converted3)) {
      intMessage = "'" + decimal1 + "' is an integer.";
    } else {
      intMessage = "'" + decimal1 + "' is not an integer.";
    }

// Step 4: combine into one string
var finalResult = result1 + "<br>" + result2 + "<br>" + result3 + "<br>" + result4 +
                  "<br><br>" + nanMessage + "<br>" + intMessage;

// Step 5: display it
document.getElementById("numberConversionOutput").innerHTML = finalResult;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Values
var itemPrice = 24.99;
var quantity = 3;
var taxRate = 0.0975;     // 9.75% sales tax

// Calculations
var subtotal = itemPrice * quantity;          // multiplication
var taxAmount = subtotal * taxRate;           // multiplication
var shipping;

// PART 4: CONDITIONAL MESSAGE 2
var shippingMessage;
    if (subtotal >= 100) {
        shipping = 0;
        shippingMessage = "You qualify for free shipping!";
    } else {
            shipping = 5.5;
            shippingMessage = "Spend $100 or more for free shipping.";
    }
var total = subtotal + taxAmount + shipping;  // addition

// Formatting with toFixed(2)
var subtotalFormatted = subtotal.toFixed(2);
var taxFormatted = taxAmount.toFixed(2);
var shippingFormatted = shipping.toFixed(2);
var totalFormatted = total.toFixed(2);

// Build the output
var mathResult =
  "Item price: $" + itemPrice.toFixed(2) + "<br>" +
  "Quantity: " + quantity + "<br>" +
  "Subtotal: $" + subtotalFormatted + "<br>" +
  "Tax (9.75%): $" + taxFormatted + "<br>" +
  "Shipping: $" + shippingFormatted + "<br>" +
  "Total: $" + totalFormatted + "<br>" +
  shippingMessage;

// Display it
document.getElementById("mathOutput").innerHTML = mathResult;