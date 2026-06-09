using Artereum.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Artereum.Api.Data;

public sealed class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Artwork> Artworks => Set<Artwork>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var artwork = modelBuilder.Entity<Artwork>();

        artwork.ToTable("artworks");
        artwork.HasKey(x => x.Id);
        artwork.HasIndex(x => x.Slug).IsUnique();

        artwork.Property(x => x.Slug).HasMaxLength(150).IsRequired();
        artwork.Property(x => x.Title).HasMaxLength(200).IsRequired();
        artwork.Property(x => x.Description).HasMaxLength(4000).IsRequired();
        artwork.Property(x => x.AuthorName).HasMaxLength(150).IsRequired();
        artwork.Property(x => x.UsdPrice).HasPrecision(18, 2);
        artwork.Property(x => x.EthPrice).HasPrecision(18, 8);
        artwork.Property(x => x.EditionType).HasMaxLength(50).IsRequired();
        artwork.Property(x => x.Format).HasMaxLength(20).IsRequired();
        artwork.Property(x => x.Dimensions).HasMaxLength(100).IsRequired();
        artwork.Property(x => x.FileSize).HasMaxLength(50).IsRequired();
        artwork.Property(x => x.Resolution).HasMaxLength(50).IsRequired();
        artwork.Property(x => x.CoverImageUrl).HasMaxLength(500).IsRequired();
        artwork.Property(x => x.Status).HasMaxLength(50).IsRequired();
        artwork.Property(x => x.CreatedAtUtc).IsRequired();
        artwork.Property(x => x.UpdatedAtUtc).IsRequired();
    }
}
