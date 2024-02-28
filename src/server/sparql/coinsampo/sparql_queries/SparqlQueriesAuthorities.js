const perspectiveID = 'authorities'

export const authorityPropertiesInstancePage =
`   
{
  ?id skos:prefLabel ?prefLabel__id .
  BIND (?prefLabel__id as ?prefLabel__prefLabel)
  FILTER(LANG(?prefLabel__prefLabel) = '<LANG>')
  BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  BIND(?id as ?uri__id)
  BIND(?id as ?uri__dataProviderUrl)
  BIND(?id as ?uri__prefLabel)
  }
  UNION
  {
  ?id ^coin-schema:authority/coin-schema:material ?material__id .
  ?material__id skos:prefLabel ?material__prefLabel .
  FILTER(LANG(?material__prefLabel) = '<LANG>')
  BIND(CONCAT("/materials/page/", REPLACE(STR(?period__id), "^.*\\\\/(.+)", "$1")) AS ?material__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:authority/coin-schema:municipality/:yso ?municipality__id .
  ?municipality__id skos:prefLabel ?municipality__prefLabel .
  BIND(CONCAT("/municipalities/page/", REPLACE(STR(?period__id), "^.*\\\\/(.+)", "$1")) AS ?municipality__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:authority/coin-schema:denomination ?denomination__id .
  ?denomination__id skos:prefLabel ?denomination__prefLabel .
  FILTER(LANG(?denomination__prefLabel) = '<LANG>')
  BIND(CONCAT("/denominations/page/", REPLACE(STR(?period__id), "^.*\\\\/(.+)", "$1")) AS ?denomination__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:authority/coin-schema:period ?period__id .
  ?period__id skos:prefLabel ?period__prefLabel .
  FILTER(LANG(?period__prefLabel) = '<LANG>')
  BIND(CONCAT("/periods/page/", REPLACE(STR(?period__id), "^.*\\\\/(.+)", "$1")) AS ?period__dataProviderUrl)
  }
  UNION
  {
  ?id coin-schema:description ?descriptionFI .
  FILTER(LANG(?descriptionFI) = 'fi')
  }
  UNION
  {
  ?id coin-schema:description ?descriptionEN .
  FILTER(LANG(?descriptionEN) = 'en')
  }
  UNION
  {
    ?id coin-schema:wikidata ?wikidata__id .
    BIND (?wikidata__id AS ?wikidata__prefLabel)
    BIND (?wikidata__id AS ?wikidata__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:wikipedia ?wikipedia__id .
    BIND (?wikipedia__id AS ?wikipedia__prefLabel)
    BIND (?wikipedia__id AS ?wikipedia__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:nomisma ?nomisma__id .
    BIND (?nomisma__id AS ?nomisma__prefLabel)
    BIND (?nomisma__id AS ?nomisma__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:numista_id ?numista__id .
    BIND (?numista__id AS ?numista__prefLabel)
    BIND (CONCAT('https://en.numista.com/catalogue/ruler.php?id=',?numista__id) AS ?numista__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:biographySampo ?bs__id .
    BIND (?bs__id AS ?bs__prefLabel)
    BIND (CONCAT('https://biografiasampo.fi/henkilo/',?bs__id) AS ?bs__dataProviderUrl)
  }
  UNION
  {
    ?id ^coin-schema:authority ?find__id .
    ?find__id skos:prefLabel ?find__prefLabel .
    FILTER(LANG(?find__prefLabel) = '<LANG>')
    BIND(CONCAT("/finds/page/", REPLACE(STR(?find__id), "^.*\\\\/(.+)", "$1")) AS ?find__dataProviderUrl)
  }
  OPTIONAL
  {
    ?id coin-schema:image ?imageurlTemp .
  }
  BIND(COALESCE(?imageurlTemp,"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Profile_Silhouette_02.svg/240px-Profile_Silhouette_02.svg.png") as ?image__id)
  BIND(COALESCE(?imageurlTemp,"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Profile_Silhouette_02.svg/240px-Profile_Silhouette_02.svg.png") as ?image__url)
  BIND("Image from Wikimedia commons" as ?image__description)
  BIND(?image__description AS ?image__title)
`

export const authorityPropertiesFacetResults = `
{
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    FILTER(LANG(?prefLabel__prefLabel) = '<LANG>')
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
    ?id ^coin-schema:authority/coin-schema:period ?period__id .
    ?period__id skos:prefLabel ?period__prefLabel .
    FILTER(LANG(?period__prefLabel) = '<LANG>')
    BIND(CONCAT("/periods/page/", REPLACE(STR(?period__id), "^.*\\\\/(.+)", "$1")) AS ?period__dataProviderUrl)
    }
    UNION
    {
    ?id coin-schema:description ?descriptionFI .
    FILTER(LANG(?descriptionFI) = 'fi')
    }
    UNION
    {
    ?id coin-schema:description ?descriptionEN .
    FILTER(LANG(?descriptionEN) = 'en')
    }
    OPTIONAL
    {
      ?id coin-schema:image ?imageurlTemp .
    }
    BIND(COALESCE(?imageurlTemp,"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Profile_Silhouette_02.svg/240px-Profile_Silhouette_02.svg.png") as ?image__id)
    BIND(COALESCE(?imageurlTemp,"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Profile_Silhouette_02.svg/240px-Profile_Silhouette_02.svg.png") as ?image__url)
    BIND("Image from Wikimedia commons" as ?image__description)
    BIND(?image__description AS ?image__title)
`

export const authoritiesPlacesQuery = `
  SELECT DISTINCT ?id ?lat ?long
  (1 as ?instanceCount) # for heatmap
  WHERE {
    <FILTER>
    ?id a coin-schema:Mint .
    ?id wgs84:lat ?lat ;
        wgs84:long ?long .
  }
`