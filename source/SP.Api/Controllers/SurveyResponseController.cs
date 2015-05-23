using SA.Models;
using SA.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SA.Api.Controllers
{
    public class SurveyResponseController : ApiController
    {
        private readonly ISurveyResponseRepository surveyResponseRepository;

        public SurveyResponseController(ISurveyResponseRepository surveyResponseRepository)
        {
            surveyResponseRepository = surveyResponseRepository;
        }

        public IHttpActionResult Post(SurveyResponse surveyResponse)
        {
            if (ModelState.IsValid)
            {
                surveyResponseRepository.InsertSurveyResponse(surveyResponse);
                return Ok();
            }

            return BadRequest(ModelState);
        }
     }
}
