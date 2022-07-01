TO="120363039911875621@g.us"
BOT_WPP_HOST="https://miranha-bot.herokuapp.com/sendMessageToDeploy"
CI_PROJECT_NAME="power-management-app"
DEPLOY_VERSION=$(git describe --abbrev=0)
BOT_WPP_TOKEN="miranha-bot"

sendMessage=$(curl -d '{"to":"'${TO}'","app":"'${CI_PROJECT_NAME}'","version": "'${DEPLOY_VERSION}'"}' -H "Content-Type: application/json" ${BOT_WPP_HOST})

result=`$sendMessage | grep "Erro ao enviar mensagem!"`

echo $result