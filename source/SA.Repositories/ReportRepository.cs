using Dapper;
using SA.DataAccess.Sql;
using SA.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SA.Repositories
{
    public class ReportRepository : SA.Repositories.IReportRepository
    {
        readonly Func<IAccessor> accessor;
        private const string ConnectionName = "SurvayDataConnection";

        public ReportRepository(Func<IAccessor> accessor)
        {
            this.accessor = accessor;
        }

        public List<Report> GetReportsBySurveyId(Guid surveyId)
        {
            using (var db = accessor())
            {
                var reports = db.ExecuteQuery<List<Models.Report>>(ConnectionName, connection => connection.Query<Models.Report>(new CommandDefinition("[Lookup].[GetReportBySurveyId]", new { SurveyDataId = surveyId }, commandType: CommandType.StoredProcedure)).ToList());

                return reports;
            }
        }

        public List<ReportSummary> GetReportSummaryByQuestionId(Guid questionId)
        {
            using (var db = accessor())
            {
                var reports = db.ExecuteQuery<List<Models.ReportSummary>>(ConnectionName, connection => connection.Query<Models.ReportSummary>(new CommandDefinition("[Lookup].[GetSummaryBySurveyQuestionId]", new { SurveyQuestionId = questionId }, commandType: CommandType.StoredProcedure)).ToList());

                return reports;
            }
        }
    }
}
