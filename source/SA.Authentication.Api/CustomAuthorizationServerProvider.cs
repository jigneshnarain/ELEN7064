using Microsoft.Owin.Security.OAuth;
using SA.Authentication.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace SA.Authentication.Api
{
    public class CustomAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        readonly IUserRepository userRepository;
        public CustomAuthorizationServerProvider(IUserRepository userRepository)
        {
            this.userRepository = userRepository; 
        }

        public override async System.Threading.Tasks.Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {            
           context.Validated();
        }

        public override async System.Threading.Tasks.Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

            ///TODO: Validate User
            ///
            var user = userRepository.GetUserByUsername(context.UserName);

            if (context.Password != user.Password)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                return;

            }

            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            identity.AddClaim(new Claim(ClaimTypes.Name, context.UserName));
            identity.AddClaim(new Claim("UserId", user.Id.ToString()));
            identity.AddClaim(new Claim(ClaimTypes.GivenName, user.Name));

            context.Validated(identity);
        }
    }
}