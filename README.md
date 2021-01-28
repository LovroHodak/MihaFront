Simple shop front-end only RFC

HOME 
-default Maping through all products
-each product name is a Link to that product Detail
-each product also has a AddToBasket button and once you added something 
new DeleteFromBasket button appears

NAVBAR
-default 3 links
a) info is irelevant
b) home - Link to Home
c) 2 states: cartItems by default 0 and cartTotal by default 0
-each time someone presses AddToBuTTon or DeleteFromButton both states change

DETAIL
-default info about 1 product and AddToCart button
-after pressing addToCart new button DeleteFromCart appears

CART
-default empty
-items you added in Home or Detail appear in Cart 
-you can increase or decrease number of items in Cart as well
-sum of same items is calculated and total sum is calculated
-Order Button is a Link to client details

ORDER
-default you see your ordered products and there is a email input
-note that at this very last step in Navbar there is still BasketItems and Total
-after you fill in email and press Send you get redirected to OrderSucces
-Send also changes Navbar states to 0, and changes state of all products to new amount
so without of those products that have been sold... so if you go back to Home page
you will see that Stock of all products has changed


ORDERSUCCESS
-default shows email of client who ordered