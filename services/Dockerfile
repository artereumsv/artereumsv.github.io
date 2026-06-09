FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["Artereum.sln", "./"]
COPY ["NuGet.Config", "./"]
COPY ["src/Artereum.Api/Artereum.Api.csproj", "src/Artereum.Api/"]

RUN dotnet restore "Artereum.sln" --configfile NuGet.Config

COPY . .

RUN dotnet publish "src/Artereum.Api/Artereum.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

ENV ASPNETCORE_ENVIRONMENT=Production

COPY --from=build /app/publish .

EXPOSE 8080

ENTRYPOINT ["sh", "-c", "ASPNETCORE_URLS=http://+:${PORT:-8080} dotnet Artereum.Api.dll"]
