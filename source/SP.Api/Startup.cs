using Autofac;
using Autofac.Integration.WebApi;
using Microsoft.Owin;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace SA.Api
{
    [assembly: OwinStartup(typeof(SA.Api.Startup))]
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var container = Bootstrapper.Run();
            HttpConfiguration config = new HttpConfiguration { DependencyResolver = new AutofacWebApiDependencyResolver(container) };

            app.UseAutofacMiddleware(container);
            app.UseAutofacWebApi(config);

            WebApiConfig.Register(config);
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            app.UseWebApi(config);
        }
    }
}