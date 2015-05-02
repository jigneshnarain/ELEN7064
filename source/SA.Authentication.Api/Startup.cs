using Autofac;
using Autofac.Integration.WebApi;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace SA.Authentication.Api
{
    [assembly: OwinStartup(typeof(SA.Authentication.Api.Startup))]
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var container = Bootstrapper.Run();
            HttpConfiguration config = new HttpConfiguration { DependencyResolver = new AutofacWebApiDependencyResolver(container) };
          
            ConfigureOAuth(app, container);

            app.UseAutofacMiddleware(container);
            app.UseAutofacWebApi(config);

            WebApiConfig.Register(config);
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            app.UseWebApi(config);
        }

        public void ConfigureOAuth(IAppBuilder app, IContainer container)
        {
            // Token Generation
            app.UseOAuthAuthorizationServer(container.Resolve<IOAuthAuthorizationServerOptions>().GetOptions());
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

        }
    }
}