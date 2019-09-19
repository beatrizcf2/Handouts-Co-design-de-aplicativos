document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://projeto-1-cdesign.firebaseio.com/')

  db.download('/', function(data) {
    context = {'portfolio':data['Portifolio']}
    coDesReplace('.main-menu', context)
    coDesReplace('.sections-menu-item', context)
  })
})
