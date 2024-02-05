const perspectiveID = 'denominations'

export const denominationProperties =
`   
{
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)

    # Assuming that there always are finds in the data that mach
    ?id ^coin-schema:denomination ?find__id .
    ?find__id coin-schema:registration_year ?year .
    ?find__id coin-schema:number ?number .
    BIND(CONCAT(STR(?year),'-',STR(?number)) AS ?row)

    BIND(CONCAT(?prefLabel__prefLabel, ' (', ?row, ')') AS ?find__prefLabel )
    BIND(CONCAT("/finds/page/", REPLACE(STR(?find__id), "^.*\\\\/(.+)", "$1")) AS ?find__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:denomination/coin-schema:material ?material .
  }
  UNION
  {
  ?id ^coin-schema:denomination/coin-schema:authority ?authority__id .
  ?authority__id skos:prefLabel ?authority__prefLabel .
  BIND(CONCAT("/authorities/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?authority__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:denomination/coin-schema:mint ?mint__id .
  ?mint__id skos:prefLabel ?mint__prefLabel
  BIND(CONCAT("/mints/page/", REPLACE(STR(?mint__id), "^.*\\\\/(.+)", "$1")) AS ?mint__dataProviderUrl)
  }
  UNION
  {
  ?id ^coin-schema:denomination/coin-schema:municipality ?municipality__id .
  ?municipality__id skos:prefLabel ?municipality__prefLabel
  }
  UNION
  {
  ?id ^coin-schema:denomination/coin-schema:period ?period .
  }
  UNION
  {
  ?id coin-schema:wikidata ?wikidata__id .
  BIND(?wikidata__id AS ?wikidata__prefLabel )
  BIND(?wikidata__id AS  ?wikidata__dataProviderUrl )
  }

`