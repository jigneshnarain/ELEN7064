using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SA.Models
{
    public class SurveyQuestionOption
    {
        public Guid Id { get; set; }
        public byte Order { get; set; }
        public string Description { get; set; }
    }
}
