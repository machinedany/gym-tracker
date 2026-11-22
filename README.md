Gym Tracker: app de treino instalável (PWA)
Sobre o projeto
O Gym Tracker nasceu da necessidade de acompanhar a minha própria rotina de musculação sem depender de planilhas ou de apps pagos. É uma aplicação web responsiva, pensada primeiro para o celular, que pode ser instalada como aplicativo no Android e no iPhone direto pelo navegador, sem loja de apps.

Principais funcionalidades

Rotina de 5 dias, com treinos divididos por grupos musculares (peito, costas, pernas, ombros e braços) e séries × repetições de cada exercício.
Checklist de exercícios com barra de progresso do treino do dia.
Registro de carga (kg) por exercício.
Cronômetro de descanso com atalhos de 60, 90 e 120 segundos.
Histórico de sessões salvas.
Painel de progresso, com total de sessões, exercícios concluídos, média por sessão, treinos por dia e gráfico das sessões dos últimos 7 dias.
Backup, com exportação e importação dos dados.
Contas de usuário, com cadastro, login e recuperação de senha. Cada pessoa vê somente os próprios treinos.
Instalação guiada: botão "Instalar" no Android e instruções passo a passo no iPhone.

Tecnologias

HTML, CSS e JavaScript puro, sem framework
PWA: Web App Manifest e Service Worker para instalação e uso offline
Supabase: autenticação e banco PostgreSQL
Row Level Security (RLS) para isolar os dados de cada usuário
Canvas API para os gráficos
GitHub Pages para hospedagem, com HTTPS

Destaques técnicos

Service Worker com estratégia mista: rede primeiro para a página (recebe atualizações) e cache primeiro para os arquivos estáticos, sem guardar as chamadas da API.
Ícones adaptados para Android (maskable) e iPhone (apple-touch-icon).
Layout mobile-first, com suporte a áreas seguras do iPhone e tema escuro.

Links

Aplicativo: https://machinedany.github.io/gym-tracker/
Código: https://github.com/machinedany/gym-tracker
