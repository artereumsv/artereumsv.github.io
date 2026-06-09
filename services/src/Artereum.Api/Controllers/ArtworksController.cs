using Artereum.Api.Contracts;
using Artereum.Api.Data;
using Artereum.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Artereum.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class ArtworksController(AppDbContext dbContext) : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<ArtworkResponse>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<ArtworkResponse>>> GetAll(CancellationToken cancellationToken)
    {
        var artworks = await dbContext.Artworks
            .AsNoTracking()
            .OrderBy(x => x.Id)
            .Select(x => x.ToResponse())
            .ToListAsync(cancellationToken);

        return Ok(artworks);
    }

    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(ArtworkResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ArtworkResponse>> GetById(int id, CancellationToken cancellationToken)
    {
        var artwork = await dbContext.Artworks
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

        return artwork is null ? NotFound() : Ok(artwork.ToResponse());
    }

    [HttpPost]
    [ProducesResponseType(typeof(ArtworkResponse), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<ArtworkResponse>> Create(
        [FromBody] ArtworkRequest request,
        CancellationToken cancellationToken)
    {
        if (request.EditionAvailable > request.EditionTotal)
        {
            ModelState.AddModelError(nameof(request.EditionAvailable), "EditionAvailable cannot exceed EditionTotal.");
        }

        if (await dbContext.Artworks.AnyAsync(x => x.Slug == request.Slug, cancellationToken))
        {
            ModelState.AddModelError(nameof(request.Slug), "Slug must be unique.");
        }

        if (!ModelState.IsValid)
        {
            return ValidationProblem(ModelState);
        }

        var now = DateTime.UtcNow;
        var artwork = new Artwork
        {
            Slug = request.Slug.Trim(),
            Title = request.Title.Trim(),
            Description = request.Description.Trim(),
            AuthorName = request.AuthorName.Trim(),
            UsdPrice = request.UsdPrice,
            EthPrice = request.EthPrice,
            EditionType = request.EditionType.Trim(),
            EditionTotal = request.EditionTotal,
            EditionAvailable = request.EditionAvailable,
            Format = request.Format.Trim(),
            Dimensions = request.Dimensions.Trim(),
            FileSize = request.FileSize.Trim(),
            Resolution = request.Resolution.Trim(),
            CoverImageUrl = request.CoverImageUrl.Trim(),
            Status = request.Status.Trim(),
            CreatedAtUtc = now,
            UpdatedAtUtc = now
        };

        dbContext.Artworks.Add(artwork);
        await dbContext.SaveChangesAsync(cancellationToken);

        var response = artwork.ToResponse();
        return CreatedAtAction(nameof(GetById), new { id = artwork.Id }, response);
    }

    [HttpPut("{id:int}")]
    [ProducesResponseType(typeof(ArtworkResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ArtworkResponse>> Update(
        int id,
        [FromBody] ArtworkRequest request,
        CancellationToken cancellationToken)
    {
        if (request.EditionAvailable > request.EditionTotal)
        {
            ModelState.AddModelError(nameof(request.EditionAvailable), "EditionAvailable cannot exceed EditionTotal.");
        }

        var artwork = await dbContext.Artworks.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
        if (artwork is null)
        {
            return NotFound();
        }

        var slugExists = await dbContext.Artworks
            .AnyAsync(x => x.Id != id && x.Slug == request.Slug, cancellationToken);

        if (slugExists)
        {
            ModelState.AddModelError(nameof(request.Slug), "Slug must be unique.");
        }

        if (!ModelState.IsValid)
        {
            return ValidationProblem(ModelState);
        }

        artwork.Slug = request.Slug.Trim();
        artwork.Title = request.Title.Trim();
        artwork.Description = request.Description.Trim();
        artwork.AuthorName = request.AuthorName.Trim();
        artwork.UsdPrice = request.UsdPrice;
        artwork.EthPrice = request.EthPrice;
        artwork.EditionType = request.EditionType.Trim();
        artwork.EditionTotal = request.EditionTotal;
        artwork.EditionAvailable = request.EditionAvailable;
        artwork.Format = request.Format.Trim();
        artwork.Dimensions = request.Dimensions.Trim();
        artwork.FileSize = request.FileSize.Trim();
        artwork.Resolution = request.Resolution.Trim();
        artwork.CoverImageUrl = request.CoverImageUrl.Trim();
        artwork.Status = request.Status.Trim();
        artwork.UpdatedAtUtc = DateTime.UtcNow;

        await dbContext.SaveChangesAsync(cancellationToken);

        return Ok(artwork.ToResponse());
    }

    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(int id, CancellationToken cancellationToken)
    {
        var artwork = await dbContext.Artworks.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
        if (artwork is null)
        {
            return NotFound();
        }

        dbContext.Artworks.Remove(artwork);
        await dbContext.SaveChangesAsync(cancellationToken);

        return NoContent();
    }
}
