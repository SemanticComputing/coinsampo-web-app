const perspectiveID = 'denominations'

export const denominationProperties =
`   
{
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    FILTER(LANG(?prefLabel__prefLabel) = '<LANG>')
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)

    ?id ^coin-schema:denomination ?find__id .
    ?find__id skos:prefLabel ?find__prefLabel .
    FILTER(LANG(?find__prefLabel) = '<LANG>')
    BIND(CONCAT("/finds/page/", REPLACE(STR(?find__id), "^.*\\\\/(.+)", "$1")) AS ?find__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:denomination/coin-schema:material ?material__id .
  ?material__id skos:prefLabel ?material__prefLabel .
  FILTER(LANG(?material__prefLabel) = '<LANG>')
  BIND(CONCAT("/materials/page/", REPLACE(STR(?mint__id), "^.*\\\\/(.+)", "$1")) AS ?mint__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:denomination/coin-schema:authority ?authority__id .
  ?authority__id skos:prefLabel ?authority__prefLabel .
  FILTER(LANG(?authority__prefLabel) = '<LANG>')
  BIND(CONCAT("/authorities/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?authority__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:denomination/coin-schema:mint ?mint__id .
  ?mint__id skos:prefLabel ?mint__prefLabel
  FILTER(LANG(?mint__prefLabel) = '<LANG>')
  BIND(CONCAT("/mints/page/", REPLACE(STR(?mint__id), "^.*\\\\/(.+)", "$1")) AS ?mint__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:denomination/coin-schema:municipality/:yso ?municipality__id .
  ?municipality__id skos:prefLabel ?municipality__prefLabel .
  FILTER(LANG(?municipality__prefLabel) = '<LANG>')
  BIND(CONCAT("/municipalities/page/", REPLACE(STR(?mint__id), "^.*\\\\/(.+)", "$1")) AS ?mint__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:denomination/coin-schema:period ?period__id .
  ?period__id skos:prefLabel ?period__prefLabel .
  FILTER(LANG(?period__prefLabel) = '<LANG>')
  BIND(CONCAT("/periods/page/", REPLACE(STR(?mint__id), "^.*\\\\/(.+)", "$1")) AS ?mint__dataProviderUrl)
  }
  UNION
  {
  ?id coin-schema:wikidata ?wikidata__id .
  BIND(?wikidata__id AS ?wikidata__prefLabel )
  BIND(?wikidata__id AS  ?wikidata__dataProviderUrl )
  }

`