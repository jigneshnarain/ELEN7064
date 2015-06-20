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
    public class ReportSummaryController : ApiController
    {
        private readonly IReportRepository reportRepository;
        public ReportSummaryController(IReportRepository reportRepository)
        {
            this.reportRepository = reportRepository;
        }

        public object Get(Guid id)
        {
            List<ReportSummary> summary = reportRepository.GetReportSummaryByQuestionId(id);
            return new { Labels = summary.Select(x => x.QuestionOption).ToArray(), Data = summary.Select(x => x.Count).ToList() };
        }
    }
}
