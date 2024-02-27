const perspectiveID = 'finds'

export const findPropertiesInstancePage =
`   
{
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)
    ?id coin-schema:registration_year ?year .
    ?id coin-schema:number ?number .
    BIND(CONCAT(STR(?year),'-',STR(?number)) AS ?row)


    ?id skos:prefLabel ?prefLabel__id .
    ?id skos:prefLabel ?prefLabel__prefLabel .
    FILTER(LANG(?prefLabel__prefLabel) = '<LANG>')
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:denomination ?denomination__id .
    ?denomination__id skos:prefLabel ?denomination__prefLabel .
    FILTER(LANG(?denomination__prefLabel) = '<LANG>')
    BIND(CONCAT("/denominations/page/", REPLACE(STR(?denomination__id), "^.*\\\\/(.+)", "$1")) AS ?denomination__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:mint ?mint__id .
    ?mint__id skos:prefLabel ?mint__prefLabel .
    FILTER(LANG(?mint__prefLabel) = '<LANG>')
    BIND(CONCAT("/mints/page/", REPLACE(STR(?mint__id), "^.*\\\\/(.+)", "$1")) AS ?mint__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:municipality ?municipality__id .
    ?municipality__id coin-schema:yso/skos:prefLabel ?municipality__prefLabel .
    FILTER(LANG(?municipality__prefLabel) = '<LANG>')
    BIND(CONCAT("/municipalities/page/", REPLACE(STR(?municipality__id), "^.*\\\\/(.+)", "$1")) AS ?municipality__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:authority ?authority__id .
    ?authority__id skos:prefLabel ?authority__prefLabel .
    FILTER(LANG(?authority__prefLabel) = '<LANG>')
    BIND(CONCAT("/authorities/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?authority__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:period ?period__id .
    ?period__id skos:prefLabel ?period__prefLabel .
    FILTER(LANG(?period__prefLabel) = '<LANG>')
    BIND(CONCAT("/periods/page/", REPLACE(STR(?period__id), "^.*\\\\/(.+)", "$1")) AS ?period__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:context ?context__id .
    FILTER(LANG(?context__prefLabel) = '<LANG>')
    ?context__id skos:prefLabel ?context__prefLabel
  }
  UNION
  {
    ?id coin-schema:country ?country__id .
    ?country__id skos:prefLabel ?country__prefLabel .
    FILTER(LANG(?country__prefLabel) = '<LANG>')
  }
  UNION
  {
    ?id coin-schema:material ?material__id .
    ?material__id skos:prefLabel ?material__prefLabel .
    FILTER(LANG(?material__prefLabel) = '<LANG>')
    BIND(CONCAT("/materials/page/", REPLACE(STR(?material__id), "^.*\\\\/(.+)", "$1")) AS ?material__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:qualifier ?qualifier__id .
    FILTER(LANG(?qualifier__prefLabel) = '<LANG>')
    ?qualifier__id skos:prefLabel ?qualifier__prefLabel
  }
  UNION
  {
    ?id coin-schema:denomination ?denomination__id .
    ?denomination__id skos:prefLabel ?denomination__prefLabel .
    BIND(CONCAT("/denominations/page/", REPLACE(STR(?denomination__id), "^.*\\\\/(.+)", "$1")) AS ?denomination__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:registration_year ?year .
    ?id coin-schema:number ?number .
    BIND(CONCAT(STR(?year),'-',STR(?number)) AS ?row)
  }
  UNION
  {
    ?id coin-schema:latest_year ?latestYear__id .
    BIND(IF(STRLEN(STR(?latestYear__id)) < 4, CONCAT('0',STR(?latestYear__id)), STR(?latestYear__id)) AS ?latestYear__prefLabel)
    #BIND(substr(concat(str(?latestYear__id),"0000"),1,4) AS ?latestYear__prefLabel)
    BIND(CONCAT('https://<LANG>.wikipedia.org/wiki/',STR(?latestYear__id)) AS ?latestYear__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:earliest_year ?earliestYear__id .
    #BIND(SUBSTR(CONCAT(STR(?earliestYear__id),"0000"),1,4) AS ?earliestYear__prefLabel)
    BIND(IF(STRLEN(STR(?earliestYear__id)) < 4, CONCAT('0',STR(?earliestYear__id)), STR(?earliestYear__id)) AS ?earliestYear__prefLabel)
    BIND(CONCAT('https://<LANG>.wikipedia.org/wiki/',STR(?earliestYear__id)) AS ?earliestYear__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:note ?note .
  }
  UNION
  {
    ?id coin-schema:ascension_number ?ascensionNumber__id .
  }
  UNION
  {
    ?id coin-schema:registration_year ?registrationYear .
  }
  UNION
  {
    ?id coin-schema:has_image/coin-schema:image_description ?imageDescription .
  }
  OPTIONAL
  {
    ?id coin-schema:has_image/coin-schema:finna_id ?imageidTemp .
    ?id coin-schema:has_image/coin-schema:image_description ?imagedescriptionTemp .
    BIND(CONCAT('https://finna.fi/Cover/Show?source=Solr&id=', str(?imageidTemp), '&index=0&size=small') AS ?imageurlTemp)
  }
  BIND(COALESCE(?imageidTemp,"https://upload.wikimedia.org/wikipedia/commons/2/25/Icon-round-Question_mark.jpg") as ?image__id)
  BIND(COALESCE(?imageurlTemp,"https://upload.wikimedia.org/wikipedia/commons/2/25/Icon-round-Question_mark.jpg") as ?image__url)
  BIND(COALESCE(?imagedescriptionTemp,"Tarpeeksi vastaavaa kuvaa ei löytynyt Finnasta automaattisella haulla.") as ?image__description)
  BIND(?image__description AS ?image__title)
  OPTIONAL {
    ?id coin-schema:material/skos:prefLabel ?materialTemp .
    FILTER(LANG(?materialTemp) = 'fi')
  }
  OPTIONAL {
    ?id coin-schema:authority/skos:prefLabel ?authorityTemp .
    FILTER(LANG(?authorityTemp) = 'fi')
  }
  OPTIONAL {
    ?id coin-schema:denomination/skos:prefLabel ?denominationTemp .
    FILTER(LANG(?denominationTemp) = 'fi')
  }
  BIND(COALESCE(?authorityTemp,"") as ?authorityLabel)
  BIND(COALESCE(?denominationTemp,"") as ?denominationLabel)
  BIND(CONCAT(?authorityLabel, ' ', ?denominationLabel) AS ?searchTermTemp)
  BIND(REPLACE(?searchTermTemp, " ","+","i") AS ?searchTerm)
  BIND(CONCAT("https://finna.fi/Search/Results?lookfor=", ?searchTerm, "&type=AllFields") AS ?image__finnasearch)


`

// USe for all results
export const findPropertiesFacetResults = `
  {
    BIND(?id as ?uri__id)
    BIND(?id as ?uri__dataProviderUrl)
    BIND(?id as ?uri__prefLabel)
    #?id coin-schema:registration_year ?year .
    #?id coin-schema:number ?number .
    #BIND(CONCAT(STR(?year),':',STR(?number)) AS ?row)

    ?id coin-schema:id ?localId__id .
    BIND(?localId__id AS ?localId__prefLabel)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?localId__dataProviderUrl)


    ?id skos:prefLabel ?prefLabel__id .
    BIND(?prefLabel__id AS ?prefLabel__prefLabel)
    FILTER(LANG(?prefLabel__prefLabel) = '<LANG>')
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:denomination ?denomination__id .
    ?denomination__id skos:prefLabel ?denomination__prefLabel .
    FILTER(LANG(?denomination__prefLabel) = '<LANG>')
    BIND(CONCAT("/denominations/page/", REPLACE(STR(?denomination__id), "^.*\\\\/(.+)", "$1")) AS ?denomination__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:mint ?mint__id .
    ?mint__id skos:prefLabel ?mint__prefLabel .
    FILTER(LANG(?mint__prefLabel) = '<LANG>')
    BIND(CONCAT("/mints/page/", REPLACE(STR(?mint__id), "^.*\\\\/(.+)", "$1")) AS ?mint__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:municipality ?municipality__id .
    ?municipality__id coin-schema:yso/skos:prefLabel ?municipality__prefLabel .
    FILTER(LANG(?municipality__prefLabel) = '<LANG>')
    BIND(CONCAT("/municipalities/page/", REPLACE(STR(?municipality__id), "^.*\\\\/(.+)", "$1")) AS ?municipality__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:authority ?authority__id .
    ?authority__id skos:prefLabel ?authority__prefLabel .
    FILTER(LANG(?authority__prefLabel) = '<LANG>')
    BIND(CONCAT("/authorities/page/", REPLACE(STR(?authority__id), "^.*\\\\/(.+)", "$1")) AS ?authority__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:context ?context__id .
    FILTER(LANG(?context__prefLabel) = '<LANG>')
    ?context__id skos:prefLabel ?context__prefLabel .
  }
  UNION
  {
    ?id coin-schema:country ?country__id .
    ?country__id skos:prefLabel ?country__prefLabel .
    FILTER(LANG(?country__prefLabel) = '<LANG>')
  }
  UNION
  {
    ?id coin-schema:period ?period__id .
    ?period__id skos:prefLabel ?period__prefLabel .
    FILTER(LANG(?period__prefLabel) = '<LANG>')
    BIND(CONCAT("/periods/page/", REPLACE(STR(?period__id), "^.*\\\\/(.+)", "$1")) AS ?period__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:material ?material__id .
    ?material__id skos:prefLabel ?material__prefLabel .
    FILTER(LANG(?material__prefLabel) = '<LANG>')
    BIND(CONCAT("/materials/page/", REPLACE(STR(?material__id), "^.*\\\\/(.+)", "$1")) AS ?material__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:qualifier ?qualifier__id .
    FILTER(LANG(?qualifier__prefLabel) = '<LANG>')
    ?qualifier__id skos:prefLabel ?qualifier__prefLabel .
  }
  UNION
  {
    ?id coin-schema:latest_year ?latestYear__id .
    BIND(IF(STRLEN(STR(?latestYear__id)) < 4, CONCAT('0',STR(?latestYear__id)), STR(?latestYear__id)) AS ?latestYear__prefLabel)
    #BIND(substr(concat(str(?latestYear__id),"0000"),1,4) AS ?latestYear__prefLabel)
    BIND(CONCAT('https://<LANG>.wikipedia.org/wiki/',STR(?latestYear__id)) AS ?latestYear__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:earliest_year ?earliestYear__id .
    #BIND(SUBSTR(CONCAT(STR(?earliestYear__id),"0000"),1,4) AS ?earliestYear__prefLabel)
    BIND(IF(STRLEN(STR(?earliestYear__id)) < 4, CONCAT('0',STR(?earliestYear__id)), STR(?earliestYear__id)) AS ?earliestYear__prefLabel)
    BIND(CONCAT('https://<LANG>.wikipedia.org/wiki/',STR(?earliestYear__id)) AS ?earliestYear__dataProviderUrl)
  }
  UNION
  {
    ?id coin-schema:note ?note .
  }
  UNION
  {
    ?id coin-schema:ascension_number ?ascensionNumber__id .
    BIND (?ascensionNumber__id AS ?ascensionNumber__prefLabel)
  }
  UNION
  {
    ?id coin-schema:ascension_number ?ascensionNumber__id .
    BIND (?ascensionNumber__id AS ?ascensionNumber__prefLabel) .
    OPTIONAL {
      FILTER (CONTAINS(?ascensionNumber__prefLabel, 'KM'))
      BIND("https://www.kyppi.fi/palveluikkuna/kmloyto/read/asp/r_default.aspx" AS ?ascensionNumber__dataProviderUrl)
      #BIND(IF(CONTAINS(?ascensionNumber__prefLabel, 'KM'), "https://www.kyppi.fi/palveluikkuna/kmloyto/", "") AS ?ascensionNumber__dataProviderUrl)
    }
  }
  UNION
  {
    ?id coin-schema:registration_year ?registrationYear .
  }
  UNION
  {
    ?id coin-schema:has_image/coin-schema:image_description ?imageDescription .
  }
  OPTIONAL
  {
    ?id coin-schema:has_image/coin-schema:finna_id ?imageidTemp .
    ?id coin-schema:has_image/coin-schema:image_description ?imagedescriptionTemp .
    BIND(CONCAT('https://finna.fi/Cover/Show?source=Solr&id=', str(?imageidTemp), '&index=0&size=small') AS ?imageurlTemp)
  }
  BIND(COALESCE(?imageidTemp,"https://upload.wikimedia.org/wikipedia/commons/2/25/Icon-round-Question_mark.jpg") as ?image__id)
  BIND(COALESCE(?imageurlTemp,"https://upload.wikimedia.org/wikipedia/commons/2/25/Icon-round-Question_mark.jpg") as ?image__url)
  BIND(COALESCE(?imagedescriptionTemp,"Tarpeeksi vastaavaa kuvaa ei löytynyt Finnasta automaattisella haulla.") as ?image__description)
  BIND(?image__description AS ?image__title)
  OPTIONAL {
    ?id coin-schema:material/skos:prefLabel ?materialTemp .
    FILTER(LANG(?materialTemp) = 'fi')
  }
  OPTIONAL {
    ?id coin-schema:authority/skos:prefLabel ?authorityTemp .
    FILTER(LANG(?authorityTemp) = 'fi')
  }
  OPTIONAL {
    ?id coin-schema:denomination/skos:prefLabel ?denominationTemp .
    FILTER(LANG(?denominationTemp) = 'fi')
  }
  BIND(COALESCE(?authorityTemp,"") as ?authorityLabel)
  BIND(COALESCE(?denominationTemp,"") as ?denominationLabel)
  BIND(CONCAT(?authorityLabel, ' ', ?denominationLabel) AS ?searchTermTemp)
  BIND(REPLACE(?searchTermTemp, " ","+","i") AS ?searchTerm)
  BIND(CONCAT("https://finna.fi/Search/Results?lookfor=", ?searchTerm, "&type=AllFields") AS ?image__finnasearch)

`

export const findsPlacesQuery = `
  SELECT DISTINCT ?id ?lat ?long
  (1 as ?instanceCount) # for heatmap
  WHERE {
    <FILTER>
    ?id a coin-schema:Coin .
    ?id coin-schema:find_site_coordinates/wgs84:lat ?lat ;
        coin-schema:find_site_coordinates/wgs84:long ?long .
  }
`

export const mintsPlacesQuery = `
  SELECT DISTINCT ?id ?lat ?long
  (1 as ?instanceCount) # for heatmap
  WHERE {
    <FILTER>
    ?id a coin-schema:Coin .
    ?id coin-schema:mint/wgs84:lat ?lat ;
        coin-schema:mint/wgs84:long ?long .
  }
`

export const findsListQuery = `
  SELECT ?id ?findName ?objectType ?findNumber ?dataProviderUrl ?municipality
  (GROUP_CONCAT(DISTINCT ?periods; SEPARATOR=", ") AS ?period)
  (GROUP_CONCAT(DISTINCT ?materials; SEPARATOR=", ") AS ?material)
  (GROUP_CONCAT(DISTINCT ?imageURLs; SEPARATOR=", ") AS ?imageURL)
  WHERE {
    <FILTER>
    ?id a :Find ;
        ltk-s:find_name ?findName ;
        :object_type/skos:prefLabel ?objectType ;
        :identifier ?findNumber .
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
    OPTIONAL { ?id :period/skos:prefLabel ?periods }
    OPTIONAL { ?id :material/skos:prefLabel ?materials }
    OPTIONAL {
      ?id ^:documents/ltk-s:image_url ?imageURLs
      # BIND(REPLACE(?imageURLs_, "http", "https") as ?imageURLs)
    }
    OPTIONAL {
      ?id :found_in_municipality/skos:prefLabel ?municipality
      FILTER(LANG(?municipality) = '<LANG>')
    }
  }
  GROUP BY ?id ?findName ?objectType ?findNumber ?dataProviderUrl ?municipality
  ORDER BY ?findNumber
`

export const findInstancePageMapQuery = `
  SELECT *
  WHERE {
    VALUES ?id { <ID> }
    ?id :find_site_coordinates/wgs84:lat ?lat ;
        :find_site_coordinates/wgs84:long ?long .
    BIND("red" AS ?markerColor)
    ${findPropertiesInstancePage}
  }
`

export const nearbyFindsQuery = `
  SELECT *
  WHERE {
    VALUES ?inputID { <ID> }
    ?inputID :find_site_coordinates ?inputSite .
    ?inputSite wgs84:lat ?inputLat ;
               wgs84:long ?inputLong .
    ?site spatial:nearby (?inputLat ?inputLong 10 'km') ;
          wgs84:lat ?lat ;
          wgs84:long ?long .
    ?id :find_site_coordinates ?site .
    ${findPropertiesInstancePage}
  }
`

export const similarFindsQuery = `
  SELECT *
  WHERE {
    VALUES ?id { <ID> }
    {
      ?id :object_type ?objectType_ .
      ?similarObjectType__id :object_type ?objectType_ ;
                           skos:prefLabel ?similarObjectType__prefLabel .
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?similarObjectType__id), "^.*\\\\/(.+)", "$1")) AS ?similarObjectType__dataProviderUrl)
      FILTER (?similarObjectType__id != ?id)
    }
    UNION
    {
      ?id :material ?material_ .
      ?similarMaterial__id :material ?material_ ;
                           skos:prefLabel ?similarMaterial__prefLabel .
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?similarMaterial__id), "^.*\\\\/(.+)", "$1")) AS ?similarMaterial__dataProviderUrl)
      FILTER (?similarMaterial__id != ?id)
    }
    UNION
    {
      ?id :period ?period_ .
      ?similarPeriod__id :period ?period_ ;
                          skos:prefLabel ?similarPeriod__prefLabel .
      BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?similarPeriod__id), "^.*\\\\/(.+)", "$1")) AS ?similarPeriod__dataProviderUrl)
      FILTER (?similarPeriod__id != ?id)
    }
    UNION
    {
      ?id extended-s:similar_external_find ?similarExternalFind__id .
      BIND(?similarExternalFind__id AS ?similarExternalFind__prefLabel) .
      BIND(?similarExternalFind__id AS ?similarExternalFind__dataProviderUrl)
    }
  }
  # https://finna.fi/Record/museovirasto.18723ED8664F26F7DF56306901D70101?sid=4044398810
`

export const findsTimelineQuery = `
  SELECT ?id ?group ?data__id ?data__uri ?data__label
  ?data__data__id ?data__data__label ?data__data__val ?data__data__timeRange
  WHERE {

    <FILTER> # a placeholder for facet filters

    ?find :found_in_province/skos:prefLabel ?id  . # ?id = first hierarchy level
    ?find :found_in_province/skos:exactMatch/<http://purl.org/dc/elements/1.1/source> ?source .
    FILTER (?source = "Maanmittauslaitoksen paikannimirekisteri; tyyppitieto: Maakunta"@fi)
    BIND (?id as ?group)
    #?find ltk-s:find_name ?data__id . # ?data__id = second hierarchy level

    #BIND (?id AS ?data__id)
    #BIND (' ' AS ?data__label)

    #BIND (?id as ?data__data__id) # ?data__data__id = third hierarchy level
    #BIND ('range' as ?data__data__label)
    #BIND (?data__id as ?data__data__val)

    ?find ltk-s:find_name ?data__label .
    BIND( STRAFTER(STR(?find),'http://ldf.fi/findsampo/finds/' ) AS ?find_num ).
    BIND (?id AS ?data__id)
    BIND (?find_num as ?data__data__id) # ?data__data__id = third hierarchy level
    BIND (?data__id as ?data__data__label)
    BIND (?data__id as ?data__data__val)

    ?find :has_creation_time_span/crm:P82a_begin_of_the_begin|:has_creation_time_span/crm:P82b_end_of_the_end ?date .

    # Ignore missing values in the first hierarchy level
    FILTER (?id != "-")

    # fill two extra digits with zeros for BCE dates
    BIND (STRAFTER(str(?date), '-') AS ?after)
    BIND (IF (STRSTARTS(str(?date), '-'), CONCAT('-00', ?after), str(?date)) AS ?new_date) .
    BIND(STRDT(STR(?new_date), xsd:dateTime) AS ?data__data__timeRange) .
  }
`

export const findsApexChartsTimelineQuery = `
  SELECT ?id ?beginDate ?endDate ?data__id ?name ?data__x
  (COUNT(DISTINCT ?find) as ?data__instanceCount)
  (?id as ?data__period)
  (?name as ?data__periodLabel)
  WHERE {
    <FILTER>
    VALUES ?id {
      periods:p2 # Kivikausi (-8850 – -1700)
      periods:p13 # Pronssikausi (-1700 – -0500)
      periods:p17 # Rautakausi (-0500 – 1300)
      periods:p28 # Historiallinen aika (1200 – 2000)
      periods:p29 # Keskiaika (1200 – 1520)
    }

    ?find :found_in_province ?data__id ;
          :period/skos:broader* ?id .
    ?data__id skos:prefLabel ?data__x ;
              skos:exactMatch/<http://purl.org/dc/elements/1.1/source> ?source .
    FILTER (?source = "Maanmittauslaitoksen paikannimirekisteri; tyyppitieto: Maakunta"@fi)

    ?id skos:prefLabel ?name ;
        crm:P4_has_time-span/crm:P82a_begin_of_the_begin ?begin_date_ ;
        crm:P4_has_time-span/crm:P82b_end_of_the_end ?end_date_ .

    # fill two extra digits with zeros for BCE dates
    BIND(STRAFTER(str(?begin_date_), '-') AS ?after_begin_date)
    BIND(IF(STRSTARTS(str(?begin_date_), '-'), CONCAT('-00', ?after_begin_date), str(?begin_date_)) AS ?new_begin_date)
    BIND(STRDT(?new_begin_date, xsd:dateTime) AS ?beginDate)
    BIND(STRAFTER(str(?end_date_), '-') AS ?after_end_date)
    BIND(IF(STRSTARTS(str(?end_date_), '-'), CONCAT('-00', ?after_end_date), str(?end_date_)) AS ?new_end_date)
    BIND(STRDT(?new_end_date, xsd:dateTime) AS ?endDate)
  }
  GROUP BY ?id ?beginDate ?endDate ?data__id ?name ?data__fillColor ?data__x ?data__y
`

export const findsApexChartsTimelineDialogQuery = `
  SELECT * {
    <FILTER>
    ?id :found_in_province <PROVINCE> ;
        :period/skos:broader* <PERIOD> ;
        skos:prefLabel ?prefLabel .
    <PERIOD> skos:prefLabel ?selectedPeriodLabel .
    <PROVINCE> skos:prefLabel ?selectedProvinceLabel .
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
    FILTER(LANG(?selectedProvinceLabel) = '<LANG>')
  }
  ORDER BY ?prefLabel
`

export const knowledgeGraphMetadataQuery = `
  SELECT *
  WHERE {
    ?id a ltk-s:Portal_configuration ;
          ltk-s:featured_find ?featuredFind__id .
    ?featuredFind__id ltk-s:find_name ?featuredFind__prefLabel .
    ?picture :documents ?featuredFind__id .
    ?picture ltk-s:image_url ?featuredFind__imageURL .
     # BIND(REPLACE(?featuredFind__imageURL_, "http", "https") as ?featuredFind__imageURL)
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?featuredFind__id), "^.*\\\\/(.+)", "$1")) AS ?featuredFind__dataProviderUrl)
  }
`

export const findsCSVQuery = `

SELECT DISTINCT ?id ?local_id ?denomination ?material (GROUP_CONCAT(?authorityTemp;separator=" & ") AS ?authority) ?mint ?country ?municipality ?coin_type ?ascension_number ?earliest_year ?latest_year ?period ?registration_year ?weight ?n_coordinate ?e_coordinate ?note
WHERE {
  <FILTER>
  ?id a coin-schema:Coin .
  OPTIONAL {
    ?id coin-schema:material/skos:prefLabel ?material .
    FILTER(LANG(?material) = 'fi')
  }
  OPTIONAL {
    ?id coin-schema:denomination/skos:prefLabel ?denomination .
    FILTER(LANG(?denomination) = 'fi')
  }
  OPTIONAL {
    ?id coin-schema:authority/skos:prefLabel ?authorityTemp .
    FILTER(LANG(?authorityTemp) = 'fi')
  }
  OPTIONAL {
    ?id coin-schema:mint/skos:prefLabel ?mint .
    FILTER(LANG(?mint) = 'fi')
  }
  OPTIONAL {
    ?id coin-schema:municipality/coin-schema:yso/skos:prefLabel ?municipality .
    FILTER(LANG(?municipality) = 'fi')
  }
  OPTIONAL {
    ?id :qualifier/skos:prefLabel ?coin_type .
    FILTER(LANG(?coin_type) = 'fi')
  }
  OPTIONAL {
    ?id :country/skos:prefLabel ?country .
    FILTER(LANG(?country) = 'fi')
  }
  OPTIONAL {
    ?id :country/skos:prefLabel ?country .
    FILTER(LANG(?country) = 'fi')
  }
  OPTIONAL {
    ?id :context/skos:prefLabel ?context .
    FILTER(LANG(?context) = 'fi')
  }
  OPTIONAL {
    ?id :period/skos:prefLabel ?period .
    FILTER(LANG(?period) = 'fi')
  }
  OPTIONAL {
    ?id :registration_year ?registration_year .
  }
  OPTIONAL {
    ?id :earliest_year ?earliest_year .
  }
  OPTIONAL {
    ?id :latest_year ?latest_year .
  }
  OPTIONAL {
    ?id :id ?local_id .
  }
  OPTIONAL {
    ?id :note ?note .
  }
  OPTIONAL {
    ?id :ascension_number ?ascension_number .
  }
  OPTIONAL {
    ?id :weight ?weight .
  }
  OPTIONAL {
    ?id :n_coordinate ?n_coordinate .
  }
  OPTIONAL {
    ?id :e_coordinate ?e_coordinate .
  }
}
GROUP BY ?id ?local_id ?denomination ?material ?mint ?country ?municipality ?coin_type ?ascension_number ?earliest_year ?latest_year ?period ?registration_year ?weight ?n_coordinate ?e_coordinate ?note
`

export const findsByProvinceQuery = `
 SELECT ?category ?prefLabel
 (COUNT(DISTINCT ?find) as ?instanceCount)
  WHERE {
    <FILTER>
    ?find :found_in_province ?category ;
        a :Find .
    ?category skos:prefLabel ?prefLabel .
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const findsByMaterialQuery = `
 SELECT ?category ?prefLabel
 (COUNT(DISTINCT ?find) as ?instanceCount)
  WHERE {
    <FILTER>
    {
      ?find :material ?category ;
        a :Find .
      ?category skos:prefLabel ?prefLabel .
    }
    UNION
    {
      ?find a :Find .
      FILTER NOT EXISTS {
        ?find :material [] .
      }
      BIND("unknown" as ?category)
      BIND("unknown" as ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`
export const findsByObjectNameQuery = `
 SELECT ?category ?prefLabel
 (COUNT(DISTINCT ?find) as ?instanceCount)
  WHERE {
    <FILTER>
    ?find ltk-s:find_name ?category ;  # find_name is literal
        a :Find .
    BIND(?category as ?prefLabel)
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`
export const findsByYearQuery = `
  SELECT ?category
  (COUNT(DISTINCT ?find) as ?count)
  WHERE {
    <FILTER>
    VALUES ?money { "Hopearaha" "Raha" }
    ?find ltk-s:find_name ?money ;
          :earliest_creation_year ?category .
    FILTER (?category < 2000)
  }
  GROUP BY ?category
  ORDER BY ?category
`

export const findsByLengthQuery = `
  SELECT ?category
  (COUNT(DISTINCT ?find) as ?count)
  WHERE {
    <FILTER>
    ?find :length ?decimal_value ;
              a :Find .
    BIND(xsd:integer(ROUND(?decimal_value)) as ?category)
  }
  GROUP BY ?category
  ORDER BY ?category
`

export const findsByWidthQuery = `
  SELECT ?category
  (COUNT(DISTINCT ?find) as ?count)
  WHERE {
    <FILTER>
    ?find :width ?decimal_value ;
              a :Find .
    BIND(xsd:integer(ROUND(?decimal_value)) as ?category)
  }
  GROUP BY ?category
  ORDER BY ?category
`

export const findsByWeightQuery = `
  SELECT ?category
  (COUNT(DISTINCT ?find) as ?count)
  WHERE {
    <FILTER>
    ?find :weight ?decimal_value ;
              a :Find .
    BIND(xsd:integer(ROUND(?decimal_value)) as ?category)
  }
  GROUP BY ?category
  ORDER BY ?category
`

export const findsByPeriodQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?find) as ?instanceCount)
  WHERE {
    <FILTER>
    {
      ?find a coin-schema:Coin .
      ?find coin-schema:period ?category .
      ?category skos:prefLabel ?prefLabel .
    }
    UNION
    {
      ?find a coin-schema:Coin .
      FILTER NOT EXISTS {
        ?find coin-schema:period [] .
      }
      BIND("Unknown" as ?category)
      BIND("Unknown " as ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const findsByRulerQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?find) as ?instanceCount)
  WHERE {
    <FILTER>
    {
      ?find a coin-schema:Coin .
      ?find coin-schema:authority ?category .
      ?category skos:prefLabel ?prefLabel .
    }
    UNION
    {
      ?find a coin-schema:Coin .
      FILTER NOT EXISTS {
        ?find coin-schema:authority [] .
      }
      BIND("Unknown" as ?category)
      BIND("Unknown " as ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const findsByMintQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?find) as ?instanceCount)
  WHERE {
    <FILTER>
    {
      ?find a coin-schema:Coin .
      ?find coin-schema:mint ?category .
      ?category skos:prefLabel ?prefLabel .
    }
    UNION
    {
      ?find a coin-schema:Coin .
      FILTER NOT EXISTS {
        ?find coin-schema:mint [] .
      }
      BIND("Unknown" as ?category)
      BIND("Unknown " as ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const findsByContextQuery = `
  SELECT ?category ?prefLabel (COUNT(DISTINCT ?find) as ?instanceCount)
  WHERE {
    <FILTER>
    {
      ?find a coin-schema:Coin .
      ?find coin-schema:context ?category .
      ?category skos:prefLabel ?prefLabel .
    }
    UNION
    {
      ?find a coin-schema:Coin .
      FILTER NOT EXISTS {
        ?find coin-schema:context [] .
      }
      BIND("Unknown" as ?category)
      BIND("Unknown " as ?prefLabel)
    }
  }
  GROUP BY ?category ?prefLabel
  ORDER BY DESC(?instanceCount)
`

export const findsByTimeSpansQuery10 = `
  SELECT DISTINCT ?find ?earliestYear ?latestYear ?interval
  WHERE {
    <FILTER>
    {
      ?find a coin-schema:Coin .
      ?find coin-schema:earliest_year ?earliestYear .
      ?find coin-schema:latest_year ?latestYear .
      BIND(10 AS ?interval)
    }
  }
  ORDER BY ?earliestYear
`

export const findsByTimeSpansQuery20 = `
  SELECT DISTINCT ?find ?earliestYear ?latestYear ?interval
  WHERE {
    <FILTER>
    {
      ?find a coin-schema:Coin .
      ?find coin-schema:earliest_year ?earliestYear .
      ?find coin-schema:latest_year ?latestYear .
      BIND(20 AS ?interval)
    }
  }
  ORDER BY ?earliestYear
`

export const findsByTimeSpansQuery50 = `
  SELECT DISTINCT ?find ?earliestYear ?latestYear ?interval
  WHERE {
    <FILTER>
    {
      ?find a coin-schema:Coin .
      ?find coin-schema:earliest_year ?earliestYear .
      ?find coin-schema:latest_year ?latestYear .
      BIND(50 AS ?interval)
    }
  }
  ORDER BY ?earliestYear
`

export const findsByTimeSpansQuery100 = `
  SELECT DISTINCT ?find ?earliestYear ?latestYear ?interval
  WHERE {
    <FILTER>
    {
      ?find a coin-schema:Coin .
      ?find coin-schema:earliest_year ?earliestYear .
      ?find coin-schema:latest_year ?latestYear .
      BIND(100 AS ?interval)
    }
  }
  ORDER BY ?earliestYear
`


// # https://github.com/uber/deck.gl/blob/master/docs/layers/arc-layer.md
export const migrationsQuery = `
  SELECT DISTINCT ?id
  ?from__id ?from__prefLabel ?from__lat ?from__long ?from__dataProviderUrl
  ?to__id ?to__prefLabel (SAMPLE(?tolat) AS ?to__lat) (SAMPLE(?tolong) AS ?to__long) ?to__dataProviderUrl
  (COUNT(DISTINCT ?coin) as ?instanceCount)
  WHERE {
    <FILTER>
    ?coin a coin-schema:Coin .
    ?coin coin-schema:mint ?from__id .
    ?coin coin-schema:municipality ?to__id .

    ?from__id skos:prefLabel ?from__prefLabel ;
              geo:lat ?from__lat ;
              geo:long ?from__long .
    BIND(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
    ?to__id skos:prefLabel ?to__prefLabel .
    ?to__id coin-schema:yso/geo:lat ?tolat ;
        coin-schema:yso/geo:long ?tolong .
    BIND(?to__id AS ?to__dataProviderUrl)
    BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "http://ldf.fi/mmm/place/", ""))) as ?id)
    FILTER(?from__id != ?to__id)
  }
  GROUP BY ?id
  ?from__id ?from__prefLabel ?from__lat ?from__long ?from__dataProviderUrl
  ?to__id ?to__prefLabel ?to__lat ?to__long ?to__dataProviderUrl
  ORDER BY desc(?instanceCount)
`

export const migrationsDialogQuery = `
  SELECT * {
    <FILTER>
    ?id coin-schema:mint <FROM_ID> ;
              coin-schema:municipality <TO_ID> ;
              skos:prefLabel ?prefLabel .
    FILTER (LANG(?prefLabel) = '<LANG>')
    BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?dataProviderUrl)
  }
`


export const migrationsQuery__old = `
  SELECT DISTINCT ?id
  ?from__id ?from__prefLabel ?from__lat ?from__long ?from__dataProviderUrl
  ?to__id ?to__prefLabel (SAMPLE(?tolat) AS ?to__lat) (SAMPLE(?tolong) AS ?to__long) ?to__dataProviderUrl
  (COUNT(DISTINCT ?coin) as ?instanceCount)
  WHERE {
    <FILTER>
    ?coin a coin-schema:Coin .
    ?coin coin-schema:mint ?from__id .
    ?coin coin-schema:municipality ?to .
    BIND (URI(?to) AS ?to__id)
    ?from__id skos:prefLabel ?from__prefLabel ;
              geo:lat ?from__lat ;
              geo:long ?from__long .
    BIND(CONCAT("/places/page/", REPLACE(STR(?from__id), "^.*\\\\/(.+)", "$1")) AS ?from__dataProviderUrl)
    BIND (?to AS ?to__prefLabel)
    ?coin coin-schema:find_site_coordinates/geo:lat ?tolat ;
        coin-schema:find_site_coordinates/geo:long ?tolong .
    BIND(?to__id AS ?to__dataProviderUrl)
    BIND(IRI(CONCAT(STR(?from__id), "-", REPLACE(STR(?to__id), "http://ldf.fi/mmm/place/", ""))) as ?id)
    FILTER(?from__id != ?to__id)
  }
  GROUP BY ?id
  ?from__id ?from__prefLabel ?from__lat ?from__long ?from__dataProviderUrl
  ?to__id ?to__prefLabel ?to__lat ?to__long ?to__dataProviderUrl
  ORDER BY desc(?instanceCount)
`

export const findPlacesAnimationQuery = `
  SELECT *
  WHERE {
    <FILTER>
    ?id a coin-schema:Coin .
    ?id skos:prefLabel ?prefLabel .
    ?id coin-schema:registration_year ?startDate .
    #BIND(
    #  IF(?year='2013', "2013-01-01",
    #  IF(?year='2014', "2013-01-02",
    #  IF(?year='2015', "2013-01-03",
    #  IF(?year='2016', "2013-01-04",
    #  IF(?year='2017', "2013-01-05",
    #  "2013-01-06")))))
    #  AS ?startDate)
    BIND(?startDate AS ?endDate )
    ?id coin-schema:find_site_coordinates/wgs84:lat ?lat .
    ?id coin-schema:find_site_coordinates/wgs84:long ?long .
  }
  ORDER BY ?startDate
`

export const creationYearFindPlacesAnimationQuery = `
  SELECT *
  WHERE {
    <FILTER>
    ?id a coin-schema:Coin .
    ?id skos:prefLabel ?prefLabel .
    ?id coin-schema:earliest_year_literal ?date .
    BIND(REPLACE(?date,' ','','i') AS ?year)
    BIND(IF(STRLEN(STR(?year)) < 4, CONCAT('0',STR(?year)), STR(?year)) AS ?startDate)
    FILTER (xsd:integer(?startDate) > 699)
    FILTER (xsd:integer(?startDate) < 2000)
    BIND(?startDate AS ?endDate )
    ?id coin-schema:find_site_coordinates/wgs84:lat ?lat .
    ?id coin-schema:find_site_coordinates/wgs84:long ?long .
  }
  ORDER BY ?startDate
`