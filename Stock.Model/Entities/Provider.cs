using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Stock.Model.Base;

namespace Stock.Model.Entities
{
    [Table("provider")]
    public class Provider : IEntity
    {

        public string Name { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public List<Product> OfferedProducts { get; set; }

        public string Id { get; set; }
    }
}