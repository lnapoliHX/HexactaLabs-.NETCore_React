using System;

namespace Stock.Repository.Exceptions
{
    public class RepositoryException: Exception
    {
        public RepositoryException(string message): base(message)
        {
        }
    }
}
