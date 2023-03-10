$(document).ready(function() {
	// Adicionar tarefa ao submeter o formulário
	$('#form-tarefa').submit(function(event) {
		event.preventDefault();
		let nomeTarefa = $('#nome-tarefa').val();
		if (nomeTarefa) {
			$('#lista-tarefas').append('<li>' + nomeTarefa + '</li>');
			$('#nome-tarefa').val('');
		}
	});

	// Marcar tarefa como concluída ao clicar nela
	$('#lista-tarefas').on('click', 'li', function() {
		$(this).toggleClass('concluida'); // toggleClass é um método que alterna o conteúdo li para a estilização da classe 'concluída' quando clicado.
	});
});