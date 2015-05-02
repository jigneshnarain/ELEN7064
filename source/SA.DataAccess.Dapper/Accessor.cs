using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SA.DataAccess.Sql
{
    public interface IAccessor : IDisposable
    {
        IDbConnection GetConnection(string connectionStringName);
    }
    public class Accessor : IAccessor
    {
        private IDbConnection connection;

        public IDbConnection GetConnection(string connectionStringName)
        {
            string connectionString = ConfigurationManager.ConnectionStrings[connectionStringName].ConnectionString;
            connection = new SqlConnection(connectionString);
            connection.Open();
            return connection;
        }

        public void Dispose()
        {
            connection.Close();
            connection.Dispose();
        }
    }
}
