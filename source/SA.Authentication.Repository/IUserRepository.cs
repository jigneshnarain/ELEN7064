using SA.Authentication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SA.Authentication.Repository
{
    public interface IUserRepository
    {
        User GetUserByUsername(string username);
    }
}
