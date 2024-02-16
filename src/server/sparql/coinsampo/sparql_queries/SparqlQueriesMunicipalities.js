const perspectiveID = 'municipalities'

export const municipalityProperties =
`   
{
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)

    ?id ^coin-schema:municipality ?find__id .
    ?find__id skos:prefLabel ?find__prefLabel .
    BIND(CONCAT("/finds/page/", REPLACE(STR(?find__id), "^.*\\\\/(.+)", "$1")) AS ?find__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:municipality/coin-schema:material ?material__id .
  ?material__id skos:prefLabel ?material__prefLabel .
  BIND(CONCAT("materials/page/", REPLACE(STR(?material__id), "^.*\\\\/(.+)", "$1")) AS ?material__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:municipality/coin-schema:authority ?authority__id .
  ?authority__id skos:prefLabel ?authority__prefLabel .
  BIND(CONCAT("/authorities/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?authority__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:municipality/coin-schema:mint ?mint__id .
  ?mint__id skos:prefLabel ?mint__prefLabel
  BIND(CONCAT("/mints/page/", REPLACE(STR(?mint__id), "^.*\\\\/(.+)", "$1")) AS ?mint__dataProviderUrl)
  }
`