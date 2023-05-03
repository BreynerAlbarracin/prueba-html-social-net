var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/:id', function(req, res) {
  title = [
    'Inmueble en Alquiler por $0.0 hermoso con excelentes vistas en el centro de la ciudad.',
    'Inmueble en venta por $100.0 hermoso con excelentes vistas en el centro de la ciudad.',
    'Se permuta inmuble en $50.0 hermoso con excelentes vistas en el centro de la ciudad.',
    'Inmueble en venta $0.0 hermoso con excelentes vistas en el centro de la ciudad.',
    'Inmueble en venta $2.0 hermoso con excelentes vistas en el centro de la ciudad.',
    'Inmueble en venta $3.0 hermoso con excelentes vistas en el centro de la ciudad.'
  ]

  description = [
    'Inmueble en Cali,Valle 1',
    'Inmueble en Cali,Valle 2',
    'Inmueble en Cali,Valle 3',
    'Inmueble en Cali,Valle 4',
    'Inmueble en Cali,Valle 5',
    'Inmueble en Cali,Valle 6'
  ]

  images = [
    'https://images.freeimages.com/images/large-previews/c99/pink-blossom-tree-1638841.jpg',
    'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
    'https://images.adsttc.com/media/images/5efe/1f7f/b357/6540/5400/01d7/newsletter/archdaily-houses-104.jpg?1593712501',
    'https://charlotte.axios.com/wp-content/uploads/2022/11/1216-Pinecrest-Dr-feature-image.jpg',
    'https://i.natgeofe.com/k/ef406556-cfda-4e59-973c-7167c3246b10/a-8-wacky-houses-hobbit-home_3x4.jpg',
    'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
  ]


  let htmlString = '<html>'
  + '<head>'
  + '<meta name="twitter:card" content="summary"></meta>'
  // + '<meta name="twitter:card" content="summary_large_image"></meta>'
  // + '<meta name="twitter:card" content="app"></meta>'
  // + '<meta name="twitter:card" content="player"></meta>'
  + '<meta property="og:type" content="article" />'
  // + '<meta property="og:type" content="website" />'
  // + '<meta property="og:type" content="book" />'
  // + '<meta property="og:type" content="profile" />'
  + '<meta property="og:title" content="{TITLE}" />'
  + '<meta property="og:description" content="{DESCRIPTION}" />'
  + '<meta property="og:image" content="{IMAGE}" />'
  + '<meta property="og:url" content="http://www.google.com" />'
  + '</head>'
  + '<body>'
  + '</body>'
  + '</html>'

  htmlString = htmlString.replace('{TITLE}', title[req.params.id])
  htmlString = htmlString.replace('{DESCRIPTION}', description[req.params.id])
  htmlString = htmlString.replace('{IMAGE}', images[req.params.id])

  res.send(htmlString);
});

app.listen(8081, () => {
  console.log(`Test app listening at http://localhost:${8081}`)
})