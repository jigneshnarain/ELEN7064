using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SA.Models
{
    public class SurveyResponse
    {
        public Guid SystemUserId { get { return Guid.Parse("0FD76CD9-2868-4C7C-91F9-6B56F1B5C1AD"); } }
        public Guid SurveyDataId { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public string LocationLatitude { get; set; }
        public string LocationLogitude { get; set; }
        public Guid? InstitutionId { get; set; }
        public List<SuveryResponseDetail> SuveryResponseDetails { get; set; }
    }
}
