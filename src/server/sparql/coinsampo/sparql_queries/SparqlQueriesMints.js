const perspectiveID = 'mints'

export const mintPropertiesInstancePage =
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
  ?id ^coin-schema:mint/coin-schema:material ?material__id .
  ?material__id skos:prefLabel ?material__prefLabel .
  FILTER(LANG(?material__prefLabel) = '<LANG>')
  BIND(CONCAT("/materials/page/", REPLACE(STR(?material__id), "^.*\\\\/(.+)", "$1")) AS ?material__dataProviderUrl)
  }
  UNION
  {
    ?id ^coin-schema:mint/coin-schema:municipality/coin-schema:yso ?municipality__id .
    ?municipality__id skos:prefLabel ?municipality__prefLabel .
    FILTER(LANG(?municipality__prefLabel) = '<LANG>')
  }
  UNION
  {
    ?id ^coin-schema:mint/coin-schema:authority ?authority__id .
    ?authority__id skos:prefLabel ?authority__prefLabel .
    FILTER(LANG(?authority__prefLabel) = '<LANG>')
    BIND(CONCAT("/authorities/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?authority__dataProviderUrl)
  }
  UNION
  {
    ?id ^coin-schema:mint/coin-schema:denomination ?denomination__id .
    ?denomination__id skos:prefLabel ?denomination__prefLabel .
    FILTER(LANG(?denomination__prefLabel) = '<LANG>')
    BIND(CONCAT("/denominations/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?denomination__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:mint/coin-schema:period ?period__id .
  ?period__id skos:prefLabel ?period__prefLabel .
  FILTER(LANG(?period__prefLabel) = '<LANG>')
  BIND(CONCAT("/periods/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?period__dataProviderUrl)
  }
  UNION
  {
    ?id ^coin-schema:mint ?find__id .
    ?find__id skos:prefLabel ?find__prefLabel .
    FILTER(LANG(?find__prefLabel) = '<LANG>')
    BIND(CONCAT("/finds/page/", REPLACE(STR(?find__id), "^.*\\\\/(.+)", "$1")) AS ?find__dataProviderUrl)
  }
`

export const mintsPropertiesFacetResults = `
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
    ?id ^coin-schema:mint/coin-schema:period ?period__id .
    ?period__id skos:prefLabel ?period__prefLabel .
    FILTER(LANG(?period__prefLabel) = '<LANG>')
    }
    UNION
    {
      ?id ^coin-schema:mint/coin-schema:authority ?authority__id .
      ?authority__id skos:prefLabel ?authority__prefLabel .
      FILTER(LANG(?authority__prefLabel) = '<LANG>')
      BIND(CONCAT("/authorities/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?authority__dataProviderUrl)
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