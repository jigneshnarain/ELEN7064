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
    public class ReportController : ApiController
    {
        private readonly IReportRepository reportRepository;
        public ReportController(IReportRepository reportRepository)
        {
            this.reportRepository = reportRepository;
        }
        public List<Report> Get(Guid id)
        {
            return reportRepository.GetReportsBySurveyId(id);
        }

    }
}
