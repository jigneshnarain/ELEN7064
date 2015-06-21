using System;
namespace SA.Repositories
{
    public interface IReportRepository
    {
        System.Collections.Generic.List<SA.Models.Report> GetReportsBySurveyId(Guid surveyId);
        System.Collections.Generic.List<SA.Models.ReportSummary> GetReportSummaryByQuestionId(Guid questionId);
    }
}
