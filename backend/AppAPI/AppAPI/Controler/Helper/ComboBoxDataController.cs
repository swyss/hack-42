using AppAPI.Model.Helper;
using Microsoft.AspNetCore.Mvc;

namespace AppAPI.Controler.Helper;

[Route("api/[controller]")]
[ApiController]
public class ComboBoxDataController : ControllerBase
{
    // GET: api/ComboBoxData
    [HttpGet]
    public IEnumerable<EnglishTestComboBox> GetItems()
    {
        return new List<EnglishTestComboBox>
        {
            new EnglishTestComboBox { Id = 1, Name = "Option 1" },
            new EnglishTestComboBox { Id = 2, Name = "Option 2" },
            new EnglishTestComboBox { Id = 3, Name = "Option 3" },
        };
    }
}