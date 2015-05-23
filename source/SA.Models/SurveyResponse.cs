using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SA.Models
{
    public class SurveyResponse
    {
        public Guid Id { get; set; }
        public Guid SystemUserId { get; set; }
        public Guid SurveyDataId { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public string LocationLatitude { get; set; }
        public string LocationLogitude { get; set; }
        public byte InstitutionId { get; set; }
        public List<SuveryResponseDetail> SuveryResponseDetails { get; set; }
    }
}
