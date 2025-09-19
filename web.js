$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'views/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})

async function loadHTML(id, file) {
      let res = await fetch(file);
      document.getElementById(id).innerHTML = await res.text();
    }
    loadHTML("header", "header.html");
    loadHTML("footer", "footer.html");