using Autofac;
using Autofac.Integration.WebApi;
using Microsoft.Owin.Security.OAuth;
using SA.Authentication.Repository;
using SA.DataAccess.Sql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace SA.Authentication.Api
{
    internal sealed class Bootstrapper
    {
        internal static IContainer Run()
        {
            var builder = new ContainerBuilder();
            builder.RegisterApiControllers();
            builder.RegisterType<CustomAuthorizationServerProvider>().As<IOAuthAuthorizationServerProvider>();
            builder.RegisterType<CustomOAuthAuthorizationServerOptions>().AsImplementedInterfaces();
            builder.RegisterType<UserRepository>().AsImplementedInterfaces();
            builder.RegisterType<Accessor>().AsImplementedInterfaces().InstancePerDependency();
            return builder.Build();
        }
    }
}