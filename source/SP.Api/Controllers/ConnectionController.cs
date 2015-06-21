using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SA.Api.Controllers
{
    public class ConnectionController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok();
        }
    }
}
