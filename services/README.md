# Artereum Services

Backend `.NET 8` para Artereum SV.

## Estructura

- `src/Artereum.Api/` API Web y acceso a PostgreSQL
- `Dockerfile` imagen para Render
- `.dockerignore` exclusiones para el contexto de build

## Variables de entorno

En Render, definir al menos:

- `ConnectionStrings__DefaultConnection`
- `Cors__AllowedOrigins__0`
- `ASPNETCORE_ENVIRONMENT=Production`

Ejemplo de conexión PostgreSQL:

```text
Host=tu-host;Port=5432;Database=tu-db;Username=tu-user;Password=tu-password;SSL Mode=Require;Trust Server Certificate=true
```

## Build local

```bash
dotnet restore Artereum.sln --configfile NuGet.Config
dotnet publish src/Artereum.Api/Artereum.Api.csproj -c Release
```

## Docker

Build:

```bash
docker build -t artereum-api .
```

Run:

```bash
docker run --rm -p 8080:8080 \
  -e ConnectionStrings__DefaultConnection="Host=...;Port=5432;Database=...;Username=...;Password=...;SSL Mode=Require;Trust Server Certificate=true" \
  -e Cors__AllowedOrigins__0="https://tu-frontend.onrender.com" \
  artereum-api
```

Render puede usar este `Dockerfile` directamente con `services` como root directory.
