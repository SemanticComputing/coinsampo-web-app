const perspectiveID = 'authorities'

export const authorityPropertiesInstancePage =
`   
{
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)
  }
  UNION
  {
  ?id ^coin-schema:authority/coin-schema:material ?material__id .
  ?material__id skos:prefLabel ?material__prefLabel .
  }
  UNION
  {
  ?id ^coin-schema:authority/coin-schema:municipality ?municipality__id .
  ?municipality__id skos:prefLabel ?municipality__prefLabel .
  FILTER(LANG(?municipality__prefLabel) = 'fi')
  }
  UNION
  {
  ?id ^coin-schema:authority/coin-schema:denomination ?denomination__id .
  ?denomination__id skos:prefLabel ?denomination__prefLabel .
  FILTER(LANG(?denomination__prefLabel) = 'fi')
  }
  UNION
  {
  ?id ^coin-schema:authority/coin-schema:period ?period__id .
  ?period__id skos:prefLabel ?period__prefLabel .
  }
  UNION
  {
  ?id coin-schema:wikidata/coin-schema:description ?description .
  }
  UNION
  {
    ?id coin-schema:wikidata/coin-schema:image ?image__id .
    BIND("Image from wikimedia" AS ?image__description)
    BIND("Image from wikimedia" AS ?image__title)
    BIND(?image__id AS ?image__url)
  }
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
    ?id ^coin-schema:authority/coin-schema:material ?material__id .
    ?material__id skos:prefLabel ?material__prefLabel .
    FILTER(LANG(?material__prefLabel) = '<LANG>')
    }
    UNION
    {
    ?id ^coin-schema:authority/coin-schema:municipality ?municipality__id .
    ?municipality__id skos:prefLabel ?municipality__prefLabel .
    FILTER(LANG(?municipality__prefLabel) = 'fi')
    }
    UNION
    {
    ?id ^coin-schema:authority/coin-schema:denomination ?denomination__id .
    ?denomination__id skos:prefLabel ?denomination__prefLabel .
    FILTER(LANG(?denomination__prefLabel) = '<LANG>')
    }
    UNION
    {
    ?id ^coin-schema:authority/coin-schema:period ?period__id .
    ?period__id skos:prefLabel ?period__prefLabel .
    FILTER(LANG(?period__prefLabel) = '<LANG>')
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
      ?id coin-schema:biographySampo ?bs__id .
      BIND (?bs__id AS ?bs__prefLabel)
      BIND (CONCAT('https://biografiasampo.fi/henkilo/',?bs__id) AS ?bs__dataProviderUrl)
    }
    UNION
    {
      ?id coin-schema:image ?image__id .
      BIND("Image from wikimedia" AS ?image__description)
      BIND("Image from wikimedia" AS ?image__title)
      BIND(?image__id AS ?image__url)
    }
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