using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SA.Models
{
    public class SurveyQuestion
    {
        public Guid Id { get; set; }
        public byte Order { get; set; }
        public byte Type { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<SurveyQuestionOption> QuestionOptions { get; set; }
    }
}
