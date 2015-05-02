using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SA.Authentication.Api
{
    public interface IOAuthAuthorizationServerOptions
    {
        OAuthAuthorizationServerOptions GetOptions();
    };

    public class CustomOAuthAuthorizationServerOptions : IOAuthAuthorizationServerOptions
    {
        readonly IOAuthAuthorizationServerProvider oauthAuthorizationServerProvider;

        public CustomOAuthAuthorizationServerOptions(IOAuthAuthorizationServerProvider oauthAuthorizationServerProvider)
        {
            this.oauthAuthorizationServerProvider = oauthAuthorizationServerProvider;
        }


        public OAuthAuthorizationServerOptions GetOptions()
        {
            return new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                Provider = oauthAuthorizationServerProvider
            };
        }
    }
}