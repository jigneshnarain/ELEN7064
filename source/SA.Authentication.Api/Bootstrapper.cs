using Autofac;
using Autofac.Integration.WebApi;
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
            return builder.Build();
        }
    }
}