using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SA.Models
{
    public class Report
    {
        public Guid Id { get; set; }
        public string Description { get; set; }
        public string ChartType { get; set; }
        public bool RequiresNestedArray { get; set; }
    }
}
