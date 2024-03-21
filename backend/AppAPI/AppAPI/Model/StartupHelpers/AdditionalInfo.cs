namespace AppAPI.Model.StartupHelpers;

public class AdditionalInfo
{
    public AdditionalInfo(string englishProTest, string englishProLevel, string englishProofPath, string hearAboutStart)
    {
        EnglishProTest = englishProTest;
        EnglishProLevel = englishProLevel;
        EnglishProofPath = englishProofPath;
        HearAboutStart = hearAboutStart;
    }

    public string EnglishProTest { get; set; }
    public string EnglishProLevel { get; set; }
    public string EnglishProofPath { get; set; }
    public string HearAboutStart { get; set; }
}