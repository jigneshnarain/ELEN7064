'use strict'
app.factory("reportsService", function ($resource, ngSettings) {
    return {
        getSurveys: function () {
            return $resource(ngSettings.apiBaseUri + 'Survey').query();
        },
        getReportsBySurvey: function(id)
        {
            return $resource(ngSettings.apiBaseUri + 'Report', { id: id }).query();
        },
        getReportDataBySuveryQuestion: function (id) {
            return $resource(ngSettings.apiBaseUri + 'ReportSummary', {id: id}).get();
        }
    }

});