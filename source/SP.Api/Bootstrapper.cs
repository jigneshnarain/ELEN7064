using Autofac;
using Autofac.Integration.WebApi;
using SA.DataAccess.Sql;
using SA.Repositories;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using System.Web;

namespace SA.Api
{
    internal sealed class Bootstrapper
    {
        internal static IContainer Run()
        {
            var builder = new ContainerBuilder();
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            builder.RegisterType<SurveyRepository>().AsImplementedInterfaces();
            builder.RegisterType<SurveyResponseRepository>().AsImplementedInterfaces();
            builder.RegisterType<SqlConnection>().AsImplementedInterfaces().InstancePerDependency();
            builder.RegisterType<Accessor>().AsImplementedInterfaces();
            return builder.Build();
        }
    }
}