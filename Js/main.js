$(document).ready(function() {
  
  $('#painel').on('submit', function (e) {
    e.preventDefault();
    
    const escrevaTarefa = $('#escrever-tarefa').val();
    
    const novoItem = $(`
    <tr>
      <td>
        <input type="checkbox">
      </td>
      <td><p>${escrevaTarefa}</p></td>
      <td>
        <button style="border-radius:90px;"><i class="fa-solid fa-xmark"></i></button>
      </td>
    </tr>`);
    
    $('tbody').append(novoItem);
    
    $('#escrever-tarefa').val('');
  })
  
  $('tbody').on('click', 'button', function() {
    $(this).closest('tr').remove();
  });
  
  $('tbody').on('change', 'input[type="checkbox"]', function() {
    
    var checkbox = $(this); 
    var paragrafo = checkbox.closest('tr').find('p');
    if (checkbox.prop('checked')) {
      paragrafo.css('text-decoration', 'line-through');
    } else {
      paragrafo.css('text-decoration', 'none');
    }
  });
  $('#remover-tarefa').on('click', function() {
    $('tbody').empty();
  });
})
