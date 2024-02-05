const perspectiveID = 'types'

export const typeProperties = `
{
    ?id skos:prefLabel ?prefLabel__id .
    BIND (?prefLabel__id as ?prefLabel__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)

    # Assuming that there always are finds in the data that mach
    ?id ^coin-schema:coin_type ?find__id .
    ?find__id coin-schema:registration_year ?year .
    ?find__id coin-schema:number ?number .
    BIND(CONCAT(STR(?year),'-',STR(?number)) AS ?row)

    BIND(CONCAT("Coin ", ' (', ?row, ')') AS ?find__prefLabel )
    BIND(CONCAT("/finds/page/", REPLACE(STR(?find__id), "^.*\\\\/(.+)", "$1")) AS ?find__dataProviderUrl)
    }
    UNION
    {
    ?id ^coin-schema:coin_type/coin-schema:material ?material .
    }
    UNION
    {
      ?id ^coin-schema:coin_type/coin-schema:mint ?mint__id .
      ?mint__id skos:prefLabel ?mint__prefLabel .
      BIND(CONCAT("/mints/page/", REPLACE(STR(?mint__id), "^.*\\\\/(.+)", "$1")) AS ?mint__dataProviderUrl)
    }
    UNION
    {
      ?id coin-schema:authority ?authority__id .
      ?authority__id skos:prefLabel ?authority__prefLabel .
      BIND(CONCAT("/authorities/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?authority__dataProviderUrl)
    }
    UNION
    {
    ?id coin-schema:denomination ?denomination__id .
    ?denomination__id skos:prefLabel ?denomination__prefLabel .
    BIND(CONCAT("/denominations/page/", REPLACE(STR(?denomination__id), "^.*\\\\/(.+)", "$1")) AS ?denomination__dataProviderUrl)
    }
    UNION
    {
    ?id ^coin-schema:coin_type/coin-schema:period ?period .
    }
    UNION
    {
      ?id coin-schema:has_image/coin-schema:image_id ?image__id .
      BIND("Image from finna" AS ?image__description)
      BIND("Image from finna" AS ?image__title)
      BIND(CONCAT('https://finna.fi/Cover/Show?source=Solr&id=', str(?image__id), '&index=0&size=small') AS ?image__url)
    }
`