using System.ComponentModel.DataAnnotations;

namespace Artereum.Api.Contracts;

public sealed class ArtworkRequest
{
    [Required]
    [MaxLength(150)]
    public string Slug { get; set; } = string.Empty;

    [Required]
    [MaxLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(4000)]
    public string Description { get; set; } = string.Empty;

    [Required]
    [MaxLength(150)]
    public string AuthorName { get; set; } = string.Empty;

    [Range(0, 999999999)]
    public decimal UsdPrice { get; set; }

    [Range(0, 999999999)]
    public decimal EthPrice { get; set; }

    [Required]
    [MaxLength(50)]
    public string EditionType { get; set; } = string.Empty;

    [Range(0, int.MaxValue)]
    public int EditionTotal { get; set; }

    [Range(0, int.MaxValue)]
    public int EditionAvailable { get; set; }

    [Required]
    [MaxLength(20)]
    public string Format { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string Dimensions { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string FileSize { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string Resolution { get; set; } = string.Empty;

    [Required]
    [MaxLength(500)]
    public string CoverImageUrl { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string Status { get; set; } = "Draft";
}
