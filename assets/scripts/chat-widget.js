var chatWidget = function () {
    this.toggleFrame = function () {
        var chatWrapper = document.querySelector('.js-chat-widget-wrap');
        var welcomeText = document.querySelector('.js-cht-welcome-text');

        chatWrapper.classList.toggle('frame-opened');

        if (welcomeText.classList.contains('welcome-opened')) {
            welcomeText.classList.remove('welcome-opened');
        }
    };

    this.toggleWelcomeText = function () {
        var welcomeText = document.querySelector('.js-cht-welcome-text');

        welcomeText.classList.add('welcome-opened');

        setTimeout(function () {
            welcomeText.classList.remove('welcome-opened');
        }, 7000);

        setInterval(function () {
            if (!document.querySelector('.js-chat-widget-wrap').classList.contains('frame-opened')) {
                welcomeText.classList.add('welcome-opened');
                setTimeout(function () {
                    welcomeText.classList.remove('welcome-opened');
                }, 7000);
            }
        }, 25000);
    };
};

var chatWidgetItem = new chatWidget();

document.addEventListener("DOMContentLoaded", function(event) {
    chatWidgetItem.toggleWelcomeText();
});