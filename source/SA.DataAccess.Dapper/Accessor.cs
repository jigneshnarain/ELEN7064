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
        T ExecuteQuery<T>(string connectionStringName, Func<IDbConnection, T> query);
        void ExecuteCommand(string connectionStringName, Action<IDbConnection> command);
    }
    public class Accessor : IAccessor
    {
        private readonly IDbConnection connection;

        public Accessor(IDbConnection connection)
        {
            this.connection = connection;
        }

        public T ExecuteQuery<T>(string connectionStringName, Func<IDbConnection, T> query)
        {
            InitialiseConnection(connectionStringName);
            return query(connection);
        }

        public void ExecuteCommand(string connectionStringName, Action<IDbConnection> command)
        {
            InitialiseConnection(connectionStringName);
            command(connection);
        }


        private void InitialiseConnection(string connectionStringName)
        {
            if (connection.State == ConnectionState.Open) return;
            string connectionString = ConfigurationManager.ConnectionStrings[connectionStringName].ConnectionString;
            connection.ConnectionString = connectionString;
            connection.Open();
        }

        public void Dispose()
        {
            connection.Close();
            connection.Dispose();
        }
    }
}
