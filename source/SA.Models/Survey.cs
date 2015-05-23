using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SA.Models
{
    public class Survey
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public DateTime ValidStartDate { get; set; }
        public DateTime ValidateEndDate { get; set; }
        public List<SurveyQuestion> Questions { get; set; }
    }
}
