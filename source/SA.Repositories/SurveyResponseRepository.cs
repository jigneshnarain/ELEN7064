using  Dapper;
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
    public class SurveyResponseRepository : SA.Repositories.ISurveyResponseRepository
    {
        readonly Func<IAccessor> accessor;
                    private const string ConnectionName = "SurvayDataConnection";
        public SurveyResponseRepository(Func<IAccessor> accessor)
        {
            this.accessor = accessor;
        }

        public void InsertSurveyResponse(SurveyResponse surveyResponse)
        {
            using(var dbAccessor = accessor())
            {
                var parameters = new
                {
                    SystemUserId = surveyResponse.SystemUserId,
                    SurveyDataId = surveyResponse.SurveyDataId,
                    StartDateTime = surveyResponse.StartDateTime,
                    EndDateTime = surveyResponse.EndDateTime,
                    LocationLatitude = surveyResponse.LocationLatitude,
                    LocationLongitude = surveyResponse.LocationLogitude,
                    LookupInstitutionId = surveyResponse.InstitutionId
                };

                var surveyResponseId = dbAccessor.ExecuteQuery<Guid>(ConnectionName, connection => connection.ExecuteScalar<Guid>(new CommandDefinition("[Survey].[InsertResponse]", parameters, commandType: CommandType.StoredProcedure)));

                surveyResponse.SuveryResponseDetails.ForEach(detail =>{
                    dbAccessor.ExecuteCommand(ConnectionName, connection => connection.Execute(new CommandDefinition("[Survey].[InsertResponseDetail]", new { SurveyResponseId = surveyResponseId, SurveyQuestionOptionId = detail.SurveyQuestionOptionId, ResponseData = detail.ResponseData }, commandType: CommandType.StoredProcedure)));
                });
            }
        }
    }
}
