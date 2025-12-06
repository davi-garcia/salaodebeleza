document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Pega os valores dos campos
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    // Número de telefone para onde a mensagem será enviada (ex: 5511999999999)
    const numeroWhatsApp = '5521997629317'; 

    // Monta a mensagem
    const mensagem = `Olá, gostaria de agendar um horário!%0A%0A
        *Detalhes do Agendamento:*%0A
        *Nome:* ${nome}%0A
        *Telefone:* ${telefone}%0A
        *E-mail:* ${email}%0A
        *Serviço:* ${servico}%0A
        *Data:* ${data}%0A
        *Horário:* ${horario}%0A
    `;

    // Cria a URL do WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    // Abre a URL
    window.open(urlWhatsApp, '_blank');
});