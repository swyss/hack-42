namespace AppAPI.Model;

public class Partner(int partnerId, string name, string type, string industry, string contactInfo)
{
    public int PartnerId { get; set; } = partnerId;
    public string Name { get; set; } = name;
    public string Type { get; set; } = type;
    public string Industry { get; set; } = industry;
    public string ContactInfo { get; set; } = contactInfo;
}