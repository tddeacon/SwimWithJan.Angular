using System;
using System.Collections.Generic;
using System.Linq;

namespace SwimWithJan.Angular.Models
{
    public class OrderDetailModel
    {
        public int OrderDetailId { get; set; }
        public ProductModel Product { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}
