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
    public class SurveyRepository : SA.Repositories.ISurveyRepository
    {
        readonly Func<IAccessor> accessor;
        private const string ConnectionName = "SurvayDataConnection";

        public SurveyRepository(Func<IAccessor> accessor)
        {
            this.accessor = accessor;
        }
        public List<Survey> GetSurveys()
        {
            using (var db = accessor())
            {
                var suverys = db.ExecuteQuery<List<Models.Survey>>(ConnectionName, connection => connection.Query<Models.Survey>(new CommandDefinition("[Survey].[GetData]", commandType: CommandType.StoredProcedure)).ToList());

                suverys.ForEach(s =>
                {
                    s.Questions = db.ExecuteQuery<List<Models.SurveyQuestion>>(ConnectionName, connection => connection.Query<Models.SurveyQuestion>(new CommandDefinition("[Survey].[GetQuestions]", new { SurveyDataId = s.Id }, commandType: CommandType.StoredProcedure)).ToList());

                    s.Questions.ForEach(q =>
                    {
                        q.QuestionOptions = db.ExecuteQuery<List<Models.SurveyQuestionOption>>(ConnectionName, connection => connection.Query<Models.SurveyQuestionOption>(new CommandDefinition("[Survey].[GetQuestionOptions]", new { SurveyQuestionId = q.Id }, commandType: CommandType.StoredProcedure)).ToList());
                    });
                });
                return suverys;
            }

            return new List<Survey>();
        }
    }
}
