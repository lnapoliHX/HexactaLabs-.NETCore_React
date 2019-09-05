using AutoMapper;
using Stock.Api.DTOs;
using Stock.Model.Entities;

namespace Stock.Api.MapperProfiles
{
    public class ModelProfile : Profile
    {
        public ModelProfile()
        {
            CreateMap<ProductType, ProductTypeDTO>()
                //.IgnoreAllNonExisting()
                .ReverseMap()
                .ForMember(s => s.Id, opt => opt.Ignore());

            CreateMap<Product, ProductDTO>()
                .ForMember(d => d.ProductTypeId, opt => opt.MapFrom(o => o.ProductTypeId))
                .ForMember(d => d.ProductTypeDesc, opt => opt.Ignore())
                .ReverseMap()
                .ForMember(s => s.Id, opt => opt.Ignore())
                .ForMember(s => s.ProductTypeId, opt => opt.Ignore());       

            CreateMap<Provider, ProviderDTO>()
                .ReverseMap();         
        }        
    }


}
