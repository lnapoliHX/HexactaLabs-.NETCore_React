using System.Collections.Generic;

namespace Stock.Api.DTOs
{
    public class ProviderDTO
    {
        public string Name { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string Id { get; set; }

        public List<ProductDTO> OfferedProducts { get; set; }
    }
}