var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function() {
    return {
        request: function (config) {
            config.headers = {'X-Parse-Application-Id': 'VsqVkGqyFwq3xLMEo1UFNsSQil8NpHiyJ0ZlreFw', 'X-Parse-REST-API-Key': 'GR23Vm01W8WllrWiYWMY4mCieVfLzSw3RuAE2Dqw'};
            return config;
        }
    };
});