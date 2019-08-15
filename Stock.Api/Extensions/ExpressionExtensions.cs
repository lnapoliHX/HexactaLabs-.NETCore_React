using System;
using System.Linq.Expressions;

namespace Stock.Api.Extensions
{
    public static class ExpressionExtensions
    {
        public static Expression<Func<T, bool>> AndCustom<T>(
        this Expression<Func<T, bool>> expr1,
        Expression<Func<T, bool>> expr2, bool isAndAlso = true)
        {
            var parameter = Expression.Parameter(typeof(T));

            var leftVisitor = new ReplaceExpressionVisitor(expr1.Parameters[0], parameter);
            var left = leftVisitor.Visit(expr1.Body);

            var rightVisitor = new ReplaceExpressionVisitor(expr2.Parameters[0], parameter);
            var right = rightVisitor.Visit(expr2.Body);
 
            if (isAndAlso)
            {
                return Expression.Lambda<Func<T, bool>>(
                    Expression.AndAlso(left, right), parameter);
            }
            else
            {
                 return Expression.Lambda<Func<T, bool>>(
                    Expression.And(left, right), parameter);

            }
          
        }
        

         private class  ReplaceExpressionVisitor : ExpressionVisitor
        {
            private readonly Expression oldValue;
            private readonly Expression newValue;

            public ReplaceExpressionVisitor(Expression oldvalue, Expression newvalue)
            {
                oldValue = oldvalue;
                newValue = newvalue;
            }

            public override Expression Visit(Expression node)
            {
                if (node == oldValue)
                    return newValue;
                return base.Visit(node);
            }
        }
    }  
}