$(document).ready(function() {

  $('#painel').on('submit', function (e) {
    e.preventDefault();
    
    const escrevaTarefa = $('#escrever-tarefa').val();
    
    // Adicionar novo item ao HTML
    const novoItem = $(`
    <tr>
      <td>
        <input type="checkbox">
      </td>
      <td><p>${escrevaTarefa}</p></td>
      <td>
        <button style="border-radius:90px;"><i class="fas fa-times"></i></button>
      </td>
    </tr>`);
    
    $('tbody').append(novoItem);
    
    $('#escrever-tarefa').val('');

    // Salvar tarefas após adicionar uma nova
    saveTasks();
  })
  
  $('tbody').on('click', 'button', function() {
    $(this).closest('tr').remove();
    saveTasks();
  });
  
  // Mudar o texto para riscado quando seleciona
  $('tbody').on('change', 'input[type="checkbox"]', function() {
    var checkbox = $(this); 
    var paragrafo = checkbox.closest('tr').find('p');
    if (checkbox.prop('checked')) {
      paragrafo.css('text-decoration', 'line-through');
    } else {
      paragrafo.css('text-decoration', 'none');
    }
    saveTasks();
  });
  
  // Remover todas as tarefas adicionadas
  $('#remover-tarefa').on('click', function() {
    $('tbody').empty();
    saveTasks();
  });
  
  // Função para salvar tarefas
  function saveTasks() {
    var tasksHtml = $('tbody').html();
    localStorage.setItem('tasks', tasksHtml);
  }
  
  // Restaurar tarefas salvas ao carregar a página
  var savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    $('tbody').html(savedTasks);
  }
});
