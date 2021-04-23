 <!doctype html>
 <html>
 <head>

<?php if($_GET['pixel']): ?>
<img height="1" width="1" src="https://www.facebook.com/tr?id=<?=$_GET['pixel']?>&ev=Lead&noscript=1"/>
<?php endif; ?>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width" />
  <title>Ordine emesso</title> 
  <style>
  body {
    background: #eeeeee url(/_thankyou/pattern.png);
    font-family: Tahoma;
    font-size: 14px;
}
h1 {
    text-align: center;
    color: #ff7200;
    font-size: 50px; 
    text-transform: uppercase;
    line-height: 49px;
    margin-top: 0;
    padding-top: 0;
}
h2 {
    text-transform: none;
    text-align: center;
    font-size: 30px;
    color: black;
}
h3 {
    text-align: center;
    color: #111;
}
#parent {
    padding: 0 20px 0 20px;
}
#content {
    font-size: 1em;
    margin: 0 auto;
    margin-top: 30px;
    background: white; 
    max-width: 650px;
    // min-width: 300px;
    -moz-border-radius: 14px;
    border-radius: 14px;
    padding: 20px;
}
</style>


</head>
<body> 

    <div id="parent">
        <div id="content">
            <h1>Ваш заказ принят!</h1>
			<h2>Наш менеджер свяжется с Вами в ближайшее время, чтобы уточнить данные и подтвердить заказ. </br>Спасибо за заказ! </h2>
                 
        </div>
    </div>



</body>
</html>
