using SA.Models;
using SA.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace SA.Api.Controllers
{
    public class SurveyController : ApiController
    {
        private readonly ISurveyRepository surveyRepository;
        public SurveyController(ISurveyRepository surveyRepository)
        {
            this.surveyRepository = surveyRepository;
        }
        public List<Survey> Get()
        {
            return surveyRepository.GetSurveys();
        }
    }
}
