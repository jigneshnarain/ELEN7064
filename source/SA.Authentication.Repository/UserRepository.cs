using SA.DataAccess.Sql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
namespace SA.Authentication.Repository
{
    public class UserRepository : IUserRepository
    {
        readonly Func<IAccessor> accessor;

        public UserRepository(Func<IAccessor> accessor)
        {
            this.accessor = accessor;
        }
        public Models.User GetUserByUsername(string username)
        {
            using (var db = accessor())
            {
               return db.ExecuteQuery<Models.User>("SurvayDataConnection", query => query.Query<Models.User>(new CommandDefinition("select * from system.[user] where username=@username", new { username = username })).FirstOrDefault());
            }
        }
    }
}
