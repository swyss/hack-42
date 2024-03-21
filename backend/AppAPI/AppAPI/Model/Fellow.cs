namespace AppAPI.Model;

public class Fellow(int fellowId, string name, string expertise, string educationBackground, string contactInfo)
{
    public int FellowId { get; set; } = fellowId;
    public string Name { get; set; } = name;
    public string Expertise { get; set; } = expertise;
    public string EducationBackground { get; set; } = educationBackground;
    public string ContactInfo { get; set; } = contactInfo;
}