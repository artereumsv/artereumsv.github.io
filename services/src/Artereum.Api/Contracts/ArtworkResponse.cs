namespace Artereum.Api.Contracts;

public sealed class ArtworkResponse
{
    public int Id { get; init; }
    public string Slug { get; init; } = string.Empty;
    public string Title { get; init; } = string.Empty;
    public string Description { get; init; } = string.Empty;
    public string AuthorName { get; init; } = string.Empty;
    public decimal UsdPrice { get; init; }
    public decimal EthPrice { get; init; }
    public string EditionType { get; init; } = string.Empty;
    public int EditionTotal { get; init; }
    public int EditionAvailable { get; init; }
    public string Format { get; init; } = string.Empty;
    public string Dimensions { get; init; } = string.Empty;
    public string FileSize { get; init; } = string.Empty;
    public string Resolution { get; init; } = string.Empty;
    public string CoverImageUrl { get; init; } = string.Empty;
    public string Status { get; init; } = string.Empty;
    public DateTime CreatedAtUtc { get; init; }
    public DateTime UpdatedAtUtc { get; init; }
}
