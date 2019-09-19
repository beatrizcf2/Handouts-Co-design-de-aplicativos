document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let db = coDesConnect('https://projeto-1-cdesign.firebaseio.com/')

  db.download('/', function(data) {

    context = {'portfolio':data['Portifolio']}
    coDesReplace('.main-menu', context)
    coDesReplace('.category-title', context)

    context = {'projeto':data['biblioteca'][value]}
    coDesReplace('.projects-menu-item', context)

    context = {'descricao':data['biblioteca'][value]}
    coDesReplace('.projects-menu-item', context)
  })
})
