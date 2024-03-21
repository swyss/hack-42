namespace AppAPI.Model.StartupHelpers;

public class AcademiaInfo
{
    public AcademiaInfo(string university, string degree, string fieldOfStudy, string graduationDate, string uniStartDate, string universityCountry, string universityCity)
    {
        University = university;
        Degree = degree;
        FieldOfStudy = fieldOfStudy;
        GraduationDate = graduationDate;
        UniStartDate = uniStartDate;
        UniversityCountry = universityCountry;
        UniversityCity = universityCity;
    }

    public string University { get; set; }
    public string Degree { get; set; }
    public string FieldOfStudy { get; set; }
    public string GraduationDate { get; set; }
    public string UniStartDate { get; set; }
    public string UniversityCountry { get; set; }
    public string UniversityCity { get; set; }
}