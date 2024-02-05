const perspectiveID = 'mints'

export const mintsPropertiesInstancePage =
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
    ?id ^coin-schema:mint/coin-schema:material ?material .
  }
  UNION
  {
    ?id ^coin-schema:mint/coin-schema:municipality ?municipality .
  }
  UNION
  {
  ?id ^coin-schema:mint/coin-schema:denomination ?denomination .
  }
  UNION
  {
    ?id ^coin-schema:mint/coin-schema:ruler ?ruler .
  }
  UNION
  {
    ?id ^coin-schema:mint/coin-schema:period ?period .
  }



`

export const mintsPropertiesFacetResults = `
{
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)
    }
    UNION
    {
    ?id ^coin-schema:mint/coin-schema:material ?material .
    }
    UNION
    {
      ?id ^coin-schema:mint/coin-schema:municipality ?municipality__id .
      ?municipality__id skos:prefLabel ?municipality__prefLabel
    }
    UNION
    {
      ?id ^coin-schema:mint/coin-schema:authority ?authority__id .
      ?authority__id skos:prefLabel ?authority__prefLabel .
      BIND(CONCAT("/authorities/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?authority__dataProviderUrl)
    }
    UNION
    {
      ?id ^coin-schema:mint/coin-schema:denomination ?denomination__id .
      ?denomination__id skos:prefLabel ?denomination__prefLabel .
      BIND(CONCAT("/denominations/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?denomination__dataProviderUrl)
    }
    UNION
    {
    ?id ^coin-schema:mint/coin-schema:period ?period .
    }
`

export const mintsPlacesQuery = `
  SELECT DISTINCT ?id ?lat ?long
  (1 as ?instanceCount) # for heatmap
  WHERE {
    <FILTER>
    ?id a coin-schema:Mint .
    ?id wgs84:lat ?lat ;
        wgs84:long ?long .
  }
`