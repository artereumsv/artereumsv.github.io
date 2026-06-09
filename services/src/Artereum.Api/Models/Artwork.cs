namespace Artereum.Api.Models;

public sealed class Artwork
{
    public int Id { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string AuthorName { get; set; } = string.Empty;
    public decimal UsdPrice { get; set; }
    public decimal EthPrice { get; set; }
    public string EditionType { get; set; } = string.Empty;
    public int EditionTotal { get; set; }
    public int EditionAvailable { get; set; }
    public string Format { get; set; } = string.Empty;
    public string Dimensions { get; set; } = string.Empty;
    public string FileSize { get; set; } = string.Empty;
    public string Resolution { get; set; } = string.Empty;
    public string CoverImageUrl { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedAtUtc { get; set; }
    public DateTime UpdatedAtUtc { get; set; }
}
