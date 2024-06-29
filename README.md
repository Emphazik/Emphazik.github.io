# Emphazik.github.io
 Настройка системы 
Добавление пользователя в группу sudoers: 
sudo usermod -aG sudo ваш_пользователь 
 
Установка основных утилит: 
sudo apt-get update 
sudo apt-get install neofetch git curl wget -y 
 
Установка Visual Studio Code (VSCode): 
sudo snap install --classic code 
 
Установка Docker: 
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common -y 
 
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - 
 
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" 
 
sudo apt-get update 
 
sudo apt-get install docker-ce -y 
 
Установка MariaDB: 
sudo apt-get install mariadb-server -y 
 
 
 
 Настройка сервера баз данных MariaDB 
 
sudo systemctl start mariadb 
sudo mysql_secure_installation 
 
В процессе выполнения последней команды система попросит вас установить пароль для пользователя root, введите P@ssw0rd. 
 
Создание базы данных и пользователя: 
sudo mysql -u root -p 
 
CREATE DATABASE Database1; 
GRANT ALL PRIVILEGES ON Database1.* TO 'root'@'localhost' IDENTIFIED BY 'P@ssw0rd'; 
FLUSH PRIVILEGES; 
EXIT;