/*global <%= classifyAppName %>, Backbone*/

<%= classifyAppName %>.Collections = <%= classifyAppName %>.Collections || {};

(function () {
    'use strict';

    <%= classifyAppName %>.Collections.<%= classifyClassName %> = Backbone.Collection.extend({

        model: <%= classifyAppName %>.Models.<%= classifyClassName %>

    });

})();
