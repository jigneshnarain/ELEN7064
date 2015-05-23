using System;
namespace SA.Repositories
{
    public interface ISurveyResponseRepository
    {
        void InsertSurveyResponse(SA.Models.SurveyResponse surveyResponse);
    }
}
