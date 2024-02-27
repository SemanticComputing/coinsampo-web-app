const perspectiveID = 'materials'

export const materialProperties =
`   
{
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    FILTER(LANG(?prefLabel__prefLabel) = '<LANG>')
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)

    ?id ^coin-schema:material ?find__id .
    ?find__id skos:prefLabel ?find__prefLabel .
    FILTER(LANG(?find__prefLabel) = '<LANG>')
    BIND(CONCAT("/finds/page/", REPLACE(STR(?find__id), "^.*\\\\/(.+)", "$1")) AS ?find__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:material/coin-schema:authority ?authority__id .
  ?authority__id skos:prefLabel ?authority__prefLabel .
  FILTER(LANG(?authority__prefLabel) = '<LANG>')
  BIND(CONCAT("/material/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?authority__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:material/coin-schema:mint ?mint__id .
  ?mint__id skos:prefLabel ?mint__prefLabel
  FILTER(LANG(?mint__prefLabel) = '<LANG>')
  BIND(CONCAT("/mints/page/", REPLACE(STR(?mint__id), "^.*\\\\/(.+)", "$1")) AS ?mint__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:material/coin-schema:municipality/:yso ?municipality__id .
  ?municipality__id skos:prefLabel ?municipality__prefLabel .
  FILTER(LANG(?municipality__prefLabel) = '<LANG>')
  BIND(CONCAT("/municipality/page/", REPLACE(STR(?municipality__id), "^.*\\\\/(.+)", "$1")) AS ?municipality__dataProviderUrl)
  }
`