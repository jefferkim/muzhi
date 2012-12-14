window.Muzhi || (Muzhi = {});
window.application || (application = {});

window.application.init = function () {
    Muzhi.router = new Muzhi.Router();
    Backbone.history.start();
};
