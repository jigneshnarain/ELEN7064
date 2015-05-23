using System;
namespace SA.Repositories
{
    public interface ISurveyRepository
    {
        System.Collections.Generic.List<SA.Models.Survey> GetSurveys();
    }
}
