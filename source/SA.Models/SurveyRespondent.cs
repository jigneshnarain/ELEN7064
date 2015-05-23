using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SA.Models
{
    public class SurveyRespondent
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string MobileNumber { get; set; }
        public byte GenderId { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}
