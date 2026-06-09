using Artereum.Api.Models;

namespace Artereum.Api.Contracts;

public static class ArtworkMappings
{
    public static ArtworkResponse ToResponse(this Artwork artwork) =>
        new()
        {
            Id = artwork.Id,
            Slug = artwork.Slug,
            Title = artwork.Title,
            Description = artwork.Description,
            AuthorName = artwork.AuthorName,
            UsdPrice = artwork.UsdPrice,
            EthPrice = artwork.EthPrice,
            EditionType = artwork.EditionType,
            EditionTotal = artwork.EditionTotal,
            EditionAvailable = artwork.EditionAvailable,
            Format = artwork.Format,
            Dimensions = artwork.Dimensions,
            FileSize = artwork.FileSize,
            Resolution = artwork.Resolution,
            CoverImageUrl = artwork.CoverImageUrl,
            Status = artwork.Status,
            CreatedAtUtc = artwork.CreatedAtUtc,
            UpdatedAtUtc = artwork.UpdatedAtUtc
        };
}
