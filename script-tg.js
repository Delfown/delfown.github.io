Telegram.WebApp.ready();
const user = Telegram.WebApp.initDataUnsafe.user;
console.log("Данные пользователя:", user);
if (user) {
document.getElementById('name_user').textContent = `Привет, ${user.first_name}`;
} else {
console.error("Не удалось получить данные пользователя.");
}
