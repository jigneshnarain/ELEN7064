using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SA.Models
{
    public class SuveryResponseDetail
    {
        public Guid SurveyResponseId { get; set; }
        public Guid SurveyQuestionOptionId { get; set; }
        public string ResponseData { get; set; }
    }
}
