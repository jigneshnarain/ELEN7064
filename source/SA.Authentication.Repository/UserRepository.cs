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
            //retreive from database

            //using (var db = accessor())
            //{
            //    db.GetConnection("").Query<Models.User>(new CommandDefinition("select * from users where username=@username", new { username = username }));
            //}

            if (username == "test")
                return new Models.User { Password = "test", Name = "Test", Username = username };
            return new Models.User();
        }
    }
}
