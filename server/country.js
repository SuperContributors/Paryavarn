const country = [
  {
    id: "us",
    states: [
      {
        state: "Maine",
        totalArea: 91646,
        landCover: 9990,
        forestCover: 81656,
        percentageOfForestCover: 89.10,
        "check":1
      },
      {
        state: "New Hampshire",
        totalArea: 24214,
        landCover: 3797,
        forestCover: 20417,
        percentageOfForestCover: 84.32,
        "check":2
      },
      {
        state: "American Samoa",
        totalArea: 200,
        landCover: 38.32,
        forestCover: 161.68,
        percentageOfForestCover: 80.84,
        "check":3
      },
      {
        state: "Northern Mariana Islands",
        totalArea: 464,
        landCover: 91.09,
        forestCover: 372.91,
        percentageOfForestCover: 80.37,
        "check":4
      },
      {
        state: "West Virginia",
        totalArea: 62259,
        landCover: 13069,
        forestCover: 49190,
        percentageOfForestCover: 79.01,
        "check":5
      },
      {
        state: "Vermont",
        totalArea: 24905,
        landCover: 5526.42,
        forestCover: 19378.58,
        percentageOfForestCover: 77.81,
        "check":6
      },
      {
        state: "Alabama",
        totalArea: 135765,
        landCover: 39955.63,
        forestCover: 95809.36,
        percentageOfForestCover: 70.57,
        "check":7
      },
      {
        state: "South Carolina",
        totalArea: 82931,
        landCover: 26380,
        forestCover: 56550.64,
        percentageOfForestCover: 68.19,
        "check":8
      },
      {
        state: "Georgia",
        totalArea: 69700,
        landCover: 22806,
        forestCover: 46894,
        percentageOfForestCover: 67.28,
        "check":9
      },
      {
        state: "Mississippi",
        totalArea: 125433,
        landCover: 43813.74,
        forestCover: 81619.25,
        percentageOfForestCover: 65.07,
        "check":10
      },
      {
        state: "Virginia",
        totalArea: 110786,
        landCover: 41068.37,
        forestCover: 69717.62,
        percentageOfForestCover: 62.93,
        "check":11
      },
      {
        state: "New York",
        totalArea: 141,300,
        landCover: 52450,
        forestCover: 88849,
        percentageOfForestCover: 62.88,
        "check":12
      },
      {
        state: "Massachusetts",
        totalArea: 27363,
        landCover: 10789,
        forestCover: 16573,
        percentageOfForestCover: 60.57,
        "check":13
      },
      {
        state: "North Carolina",
        totalArea: 139390,
        landCover: 56132,
        forestCover: 83257,
        percentageOfForestCover: 59.73,
        "check":14
      },
      {
        state: "Pennsylvania",
        totalArea: 119282,
        landCover: 49382,
        forestCover: 69899,
        percentageOfForestCover: 58.60,
        "check":15
      },
      {
        state: "Virgin Islands (U.S.)",
        totalArea: 346.4,
        landCover: 148,
        forestCover: 198,
        percentageOfForestCover: 57.16,
        "check":16
      },
      {
        state: "Arkansas",
        totalArea: 137733,
        landCover: 60175.5,
        forestCover: 77557,
        percentageOfForestCover: 56.31,
        "check":17
      },
      {
        state: "Puerto Rico",
        totalArea: 9104,
        landCover: 4040,
        forestCover: 5064,
        percentageOfForestCover: 55.62,
        "check":18
      },
      {
        state: "Michigan",
        totalArea: 250493,
        landCover: 111168,
        forestCover: 139324,
        percentageOfForestCover: 55.62,
        "check":19
      },
      {
        state: "Connecticut",
        totalArea: 14357,
        landCover: 6426,
        forestCover: 7931,
        percentageOfForestCover: 55.24,
        "check":20
      },
      {
        state: "Rhode Island",
        totalArea: 3144,
        landCover: 1434,
        forestCover: 1710,
        percentageOfForestCover: 54.38,
        "check":21
      },
      {
        state: "Louisiana",
        totalArea: 135658,
        landCover: 63487,
        forestCover: 72170,
        percentageOfForestCover: 53.20,
        "check":22
      },
      {
        state: "Tennessee",
        totalArea: 109247,
        landCover: 51532,
        forestCover: 57715,
        percentageOfForestCover: 52.83,
        "check":23
      },
      {
        state: "Guam",
        totalArea: 549,
        landCover: 259,
        forestCover: 290,
        percentageOfForestCover: 52.82,
        "check":24
      },
      {
        state: "Washington",
        totalArea: 184666,
        landCover: 87273,
        forestCover: 97392,
        percentageOfForestCover: 52.74,
        "check":25
      },
      {
        state: "Florida",
        totalArea: 170312,
        landCover: 83998,
        forestCover: 86314,
        percentageOfForestCover: 50.68,
        "check":26
      },
      {
        state: "Kentucky",
        totalArea: 104659,
        landCover: 53010,
        forestCover: 51649,
        percentageOfForestCover: 49.35,
        "check":27
      },
      {
        state: "Wisconsin",
        totalArea: 169639,
        landCover: 89546,
        forestCover: 83089,
        percentageOfForestCover: 48.98,
        "check":28
      },
      {
        state: "Oregon",
        totalArea: 255026,
        landCover: 131312,
        forestCover: 123713,
        percentageOfForestCover: 48.51,
        "check":29
      },
      {
        state: "Hawaii",
        totalArea: 28311,
        landCover: 16270,
        forestCover: 12040,
        percentageOfForestCover: 42.53,
        "check":30
      },
      {
        state: "New Jersey",
        totalArea: 22591,
        landCover: 13166,
        forestCover: 9425,
        percentageOfForestCover: 41.72,
        "check":31
      },
      {
        state: "Idaho",
        totalArea: 216632,
        landCover: 128788,
        forestCover: 87844,
        percentageOfForestCover: 40.55,
        "check":32
      },
      {
        state: "Maryland",
        totalArea: 32134,
        landCover: 19486,
        forestCover: 12648,
        percentageOfForestCover: 39.36,
        "check":33
      },
      {
        state: "Texas",
        totalArea: 695662,
        landCover: 435971,
        forestCover: 259690,
        percentageOfForestCover: 37.33,
        "check":33
      },
      {
        state: "Maryland",
        totalArea: 32134,
        landCover: 19486,
        forestCover: 12648,
        percentageOfForestCover: 39.36,
        "check":34
      },
      {
        state: "Missouri",
        totalArea: 180561,
        landCover: 117076,
        forestCover: 63485,
        percentageOfForestCover: 35.16,
        "check":35
      },
      {
        state: "Alaska",
        totalArea: 1718000,
        landCover: 1113951,
        forestCover: 604049,
        percentageOfForestCover: 35.16,
        "check":36
      },
      {
        state: "Utah",
        totalArea: 219887,
        landCover: 144070,
        forestCover: 75817,
        percentageOfForestCover: 34.48,
        "check":37
      },
      {
        state: "Colorado",
        totalArea: 269837,
        landCover: 176959,
        forestCover: 92877,
        percentageOfForestCover: 34.42,
        "check":38
      },
      {
        state: "Minnesota",
        totalArea: 225181,
        landCover: 148439,
        forestCover: 76742,
        percentageOfForestCover: 34.08,
        "check":39
      },
      {
        state: "District of Columbia",
        totalArea: 177,
        landCover: 117,
        forestCover: 60,
        percentageOfForestCover: 33.90,
        "check":40
      },
      {
        state: "California",
        totalArea: 423970,
        landCover: 285289,
        forestCover: 138680,
        percentageOfForestCover: 32.71,
        "check":41
      },
      {
        state: "New Mexico",
        totalArea: 315194,
        landCover: 214363,
        forestCover: 100830,
        percentageOfForestCover: 31.99,
        "check":42
      },
      {
        state: "Ohio",
        totalArea: 116096,
        landCover: 80199,
        forestCover: 35896,
        percentageOfForestCover: 30.92,
        "check":43
      },
      {
        state: "Oklahoma",
        totalArea: 181037,
        landCover: 128898,
        forestCover: 52139,
        percentageOfForestCover: 28.80,
        "check":44
      },
      {
        state: "Montana",
        totalArea: 380832,
        landCover: 276293,
        forestCover: 104538,
        percentageOfForestCover: 27.45,
        "check":45
      },
      {
        state: "Delaware",
        totalArea: 5133,
        landCover: 3734,
        forestCover: 1399,
        percentageOfForestCover: 27.26,
        "check":46
      },
      {
        state: "Arizona",
        totalArea: 295254,
        landCover: 219551,
        forestCover: 75703,
        percentageOfForestCover: 25.64,
        "check":47
      },
      {
        state: "Indiana",
        totalArea: 94322,
        landCover: 74458,
        forestCover: 19864,
        percentageOfForestCover: 21.06,
        "check":48
      },
      {
        state: "Wyoming",
        totalArea: 253596,
        landCover: 206883,
        forestCover: 46712,
        percentageOfForestCover: 18.42,
        "check":49
      },
      {
        state: "Nevada",
        totalArea: 286367,
        landCover: 240863,
        forestCover: 45504,
        percentageOfForestCover: 15.89,
        "check":50
      },
      {
        state: "Illinois",
        totalArea: 149998,
        landCover: 129538,
        forestCover: 20459,
        percentageOfForestCover: 13.64,
        "check":51
      },
      {
        state: "Iowa",
        totalArea: 144669,
        landCover: 13273,
        forestCover: 12195,
        percentageOfForestCover: 8.43,
        "check":52
      },
      {
        state: "Kansas",
        totalArea: 213099,
        landCover: 203019,
        forestCover: 10079,
        percentageOfForestCover: 4.73,
        "check":53
      },
      {
        state: "South Dakota",
        totalArea: 199730,
        landCover: 191880,
        forestCover: 7849,
        percentageOfForestCover: 3.93,
        "check":54
      },
      {
        state: "Nebraska",
        totalArea: 200356,
        landCover: 193944,
        forestCover: 6411,
        percentageOfForestCover: 3.20,
        "check":55
      },
      {
        state: "North Dakota",
        totalArea: 183123,
        landCover: 179973,
        forestCover: 3149,
        percentageOfForestCover: 1.72,
        "check":56
      },
    ],
  },
  {
    id: "UK",
    states: [
      {
        state: "Andhra Pradesh",
        totalArea: 162968,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
      {
        state: "Andhra Pradesh",
        totalArea: 162968,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
    ],
  },
  {
    id: "Canada",
    states: [
      {
        state: "Andhra Pradesh",
        totalArea: 162968,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
      {
        state: "Andhra Pradesh",
        totalArea: 162968,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
    ],
  },
  {
    id: "Australia",
    states: [
      {
        state: "Andhra Pradesh",
        totalArea: 162968,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
      {
        state: "Andhra Pradesh",
        totalArea: 162968,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
    ],
  },
  {
    id: "Germany",
    states: [
      {
        state: "Baden Württemberg",
        totalArea: 35751,
        landCover: 22022,
        forestCover: 13729 ,
        percentageOfForestCover: 38.40,
      },
      {
        state: "Bavaria",
        totalArea: 70549,
        landCover: 44549,
        forestCover: 26000,
        percentageOfForestCover: 36.85,
      },
        {
        state: "Berlin",
        totalArea: 892,
        landCover: 738,
        forestCover: 154,
        percentageOfForestCover: 17.26,
      },
        {
        state: "Brandenburg",
        totalArea: 29477,
        landCover: 18898,
        forestCover: 10579,
        percentageOfForestCover: 35.88,
      },
        {
        state: "Bremen",
        totalArea: 404,
        landCover: 396,
        forestCover: 8,
        percentageOfForestCover: 1.98,
      },
        {
        state: "Hamburg",
        totalArea: 755,
        landCover: 720,
        forestCover: 35,
        percentageOfForestCover: 4.63,
      },
        {
        state: "Hesse",
        totalArea: 21115,
        landCover: 12669,
        forestCover: 8446,
        percentageOfForestCover: 40,
      },
        {
        state: "Mecklenburg Vorpommern",
        totalArea: 23174,
        landCover: 17824,
        forestCover: 5350,
        percentageOfForestCover: 23.08,
      },
        {
        state: "Lower Saxony",
        totalArea: 47618,
        landCover: 44218
        forestCover:3400,
        percentageOfForestCover: 7.14,
      },
        {
        state: "North Rhine Westphalia",
        totalArea:34043,
        landCover: 24885,
        forestCover: 9158,
        percentageOfForestCover: 26.90,
      },
        {
        state: "Rhineland-Palatinate",
        totalArea:19847,
        landCover: 18076,
        forestCover: 1771,
        percentageOfForestCover: 8.92,
      },
        {
        state: "Saarland",
        totalArea: 2569,
        landCover: 1454,
        forestCover: 1115,
        percentageOfForestCover: 43.40,
      },
        {
        state: "Saxony",
        totalArea: 18416	,
        landCover: 13076,
        forestCover: 5340,
        percentageOfForestCover: 28.99,
      },
        {
        state: "Saxony-Anhalt",
        totalArea: 20445,
        landCover: 15770,
        forestCover: 4675,
        percentageOfForestCover: 22.86,
      },
        {
        state: "Schleswig-Holstein",
        totalArea: 15763,
        landCover: 14159,
        forestCover: 1604,
        percentageOfForestCover: 10.17,
      },
        {
        state: "Thuringia",
        totalArea: 16172,
        landCover: 11472,
        forestCover: 4700,
        percentageOfForestCover: 29.06,
      },
    ],
  },
  {
    id: "Italy",
    states: [
      {
        state: "Abruzzo",
        totalArea: 10832	,
        landCover: 10336,
        forestCover: 496,
        percentageOfForestCover: 4.57,
      },
      {
        state: "Aosta Valley",
        totalArea: 3261,
        landCover: ,
        forestCover: 1730,
        percentageOfForestCover: 19.57,
      },
         {
        state: "Apulia",
        totalArea: 19541,
        landCover: ,
        forestCover: 114,
        percentageOfForestCover: ,
      },
         {
        state: "Basilicata",
        totalArea:10073,
        landCover: 131068,
        forestCover: 2750,
        percentageOfForestCover: 19.57,
      },
         {
        state: "Calabria",
        totalArea:15222,
        landCover: 131068,
        forestCover: 105,
        percentageOfForestCover: 19.57,
      },
         {
        state: "Campania",
        totalArea: 13671,
        landCover: 131068,
        forestCover: 2730,
        percentageOfForestCover: 19.57,
      },
         {
        state: "Emilia Romagna",
        totalArea: 22453,
        landCover: 131068,
        forestCover: 4970,
        percentageOfForestCover: 19.57,
      },
         {
        state: "Friuli Venezia Giulia",
        totalArea: 7924,
        landCover: 131068,
        forestCover: 523,
        percentageOfForestCover: 19.57,
      },
         {
        state: "Lazio",
        totalArea: 17232,
        landCover: 131068,
        forestCover: 1370,
        percentageOfForestCover: 19.57,
      },
         {
        state: "Liguria",
        totalArea: 5416,
        landCover: 131068,
        forestCover: 2630,
        percentageOfForestCover: 19.57,
      },
{
      state: "Lombardy",
      totalArea: 23864,
      landCover: 131068,
      forestCover: 4790,
      percentageOfForestCover: 19.57,
},
{
      state: "Marche",
      totalArea: 9401,
      landCover: 131068,
      forestCover: 194,
      percentageOfForestCover: 19.57,
},
{
      state: "Molise",
      totalArea: 4461,
      landCover: 131068,
      forestCover: 1270,
      percentageOfForestCover: 19.57,
},
{
      state: "Piedmont",
      totalArea: 25387,
      landCover: 131068,
      forestCover: 31900,
      percentageOfForestCover: 19.57,
},
{
      state: "Sardinia",
      totalArea: 24100,
      landCover: 131068,
      forestCover: 7370,
      percentageOfForestCover: 19.57,
},
{
      state: "Sicily",
      totalArea: 25832,
      landCover: 131068,
      forestCover: 3720,
      percentageOfForestCover: 19.57,
},
{
      state: "Trentino South Tyrol",
      totalArea: 13606,
      landCover: 131068,
      forestCover: 6030,
      percentageOfForestCover: 19.57,
},
{
      state: "Tuscany",
      totalArea: 22987,
      landCover: 131068,
      forestCover: ,
      percentageOfForestCover: 19.57,
},
{
      state: "Umbria",
      totalArea: 8464,
      landCover: 131068,
      forestCover: 2840,
      percentageOfForestCover: 19.57,
},
{
      state: "Veneto",
      totalArea: 18020,
      landCover: 131068,
      forestCover: 843,
      percentageOfForestCover: 19.57,
},
    ],
  },
  {
    id: "India",
    states: [
     {
state: "Andhra Pradesh",
totalArea: 162968,
landCover : 131068,
forestCover: 31900,
percentageOfForestCover: 19.57,
},
{
state: "Arunachal Pradesh",
totalArea: 83743,
landCover : 15972,
forestCover: 67771,
 percentageOfForestCover: 80.93,
},
{
state: "Assam",
totalArea: 78438,
landCover : 48837,
forestCover: 29601,
 percentageOfForestCover: 37.74,
},
{
state: "Bihar",
totalArea: 94163,
landCover : 84601,
forestCover: 9562,
 percentageOfForestCover: 10.15,
},
{
state: "Chhattisgarh",
totalArea: 135192,
landCover : 75812,
forestCover: 59380,
 percentageOfForestCover: 43.92,
},
{
state: "Delhi",
totalArea: 1483,
landCover : 1177.59,
forestCover: 305.41,
 percentageOfForestCover: 20.59,
},
{
state: "Goa",
totalArea: 3702,
landCover : 1150,
forestCover: 2552,
 percentageOfForestCover: 68.94,
},
{
state: "Gujarat",
totalArea: 196244,
landCover : 173463,
forestCover: 22781,
 percentageOfForestCover: 11.61,
},
{
state: "Haryana",
totalArea: 44212,
landCover : 41209,
forestCover: 3003,
 percentageOfForestCover: 6.79,
},
{
state: "Himachal Pradesh",
totalArea: 55673,
landCover : 39751,
forestCover: 15922,
 percentageOfForestCover: 28.6,
},
{
state: "Jammu & Kashmir *",
totalArea: 222236,
landCover : 131068,
forestCover: 91168,
 percentageOfForestCover: 13.97,
},
{
state: "Jharkhand",
totalArea: 79716,
landCover : 53241,
forestCover: 26475,
 percentageOfForestCover: 33.21,
},
{
state: "Karnataka",
totalArea: 191791,
landCover : 148528,
forestCover: 43263,
 percentageOfForestCover: 22.56,
},
{
state: "Kerala",
totalArea: 38852,
landCover : 15572,
forestCover: 23280,
 percentageOfForestCover: 59.92,
},
{
state: "Madhya Pradesh",
totalArea: 308252,
landCover : 222765,
forestCover: 85487,
 percentageOfForestCover: 27.73,
},
{
state: "Maharashtra",
totalArea: 307713,
landCover : 247200,
forestCover: 60513,
 percentageOfForestCover: 19.67,
},
{
state: "Manipur",
totalArea: 22327,
landCover : 4761,
forestCover: 17566,
 percentageOfForestCover: 78.68,
},
{
state: "Meghalaya",
totalArea: 22429,
landCover : 4626,
forestCover: 17803,
 percentageOfForestCover: 79.37,
},
{
state: "Mizoram",
totalArea: 21081,
landCover : 2428,
forestCover: 18653,
 percentageOfForestCover: 88.48,
},
{
state: "Nagaland",
totalArea: 16579,
landCover : 3711,
forestCover: 12868,
 percentageOfForestCover: 77.62,
},
{
state: "Odisha",
totalArea: 155707,
landCover : 100369,
forestCover: 55338,
 percentageOfForestCover: 35.54,
},
{
state: "Punjab",
totalArea: 50362,
landCover : 46903,
forestCover: 3459,
 percentageOfForestCover: 6.87,
},
{
state: "Rajasthan",
totalArea: 342239,
landCover : 317401,
forestCover: 24838,
 percentageOfForestCover: 7.26,
},
{
state: "Sikkim",
totalArea: 7096,
landCover : 3717,
forestCover: 3379,
 percentageOfForestCover: 47.62,
},
{
state: "Tamil Nadu",
totalArea: 130060,
landCover : 99108,
forestCover: 30952,
 percentageOfForestCover: 23.8,
},
{
state: "Telangana",
totalArea: 112077,
landCover : 88989,
forestCover: 23088,
 percentageOfForestCover: 20.6,
},
{
state: "Tripura",
totalArea: 10486,
landCover : 2545,
forestCover: 7941,
 percentageOfForestCover: 75.73,
},
{
state: "Uttar Pradesh",
totalArea: 240928,
landCover : 218807,
forestCover: 22121,
 percentageOfForestCover: 9.18,
},
{
state: "Uttarakhand",
totalArea: 53483,
landCover : 28421,
forestCover: 25062,
 percentageOfForestCover: 46.86,
},
{
state: "West Bengal",
totalArea: 88752,
landCover : 69769,
forestCover: 18983,
 percentageOfForestCover: 21.39,
},
{
state: "A & N Islands",
totalArea: 8249,
landCover : 1472,
forestCover: 6777,
 percentageOfForestCover: 82.16,
},
{
state: "Chandigarh",
totalArea: 114,
landCover : 82.44,
forestCover: 31.56,
 percentageOfForestCover: 27.68,
},
{
state: "Dadra & Nagar Haveli",
totalArea: 491,
landCover : 254,
forestCover: 237,
 percentageOfForestCover: 48.27,
},
{
state: "Daman & Diu",
totalArea: 111,
landCover : 80.51,
forestCover: 30.49,
 percentageOfForestCover: 27.47,
},
{
state: "Lakshadweep",
totalArea: 30,
landCover : 0.9,
forestCover: 29.1,
 percentageOfForestCover: 97,
},
{
state: "Puducherry",
totalArea: 490,
landCover : 409.33,
forestCover: 80.67,
 percentageOfForestCover: 16.46,
},
    ],
  },
  {
    id: "Switzerland",
    states: [
      {
        state: "	Zurich",
        totalArea: 1729,
        landCover: 1096,
        forestCover: 633,
        percentageOfForestCover: 36.6,
      },
      {
        state: "Berne/Bern",
        totalArea: 5960,
        landCover: 3520,
        forestCover: 2440,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Luzern",
        totalArea: 1494	,
        landCover: 131068,
        forestCover: 137,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Uri",
        totalArea: 1077,
        landCover: 131068,
        forestCover:309,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Schwyz",
        totalArea: 908,
        landCover: 131068,
        forestCover: 454,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Obwalden",
        totalArea: 491,
        landCover: 131068,
        forestCover: 254 ,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Nidwalden",
        totalArea: 276,
        landCover: 131068,
        forestCover: 125,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Glarus",
        totalArea: 685,
        landCover: 131068,
        forestCover: 291,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Zug",
        totalArea: 239,
        landCover: 131068,
        forestCover:101,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Fribourg; Freiburg",
        totalArea: 1671,
        landCover: 131068,
        forestCover: 587,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Solothurn",
        totalArea:790,
        landCover: 131068,
        forestCover: 609,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Basel Stadt",
        totalArea: 37,
        landCover: 131068,
        forestCover: 6.67,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Basel Landschaft",
        totalArea: 518,
        landCover: 131068,
        forestCover: 283,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Schaffhausen",
        totalArea: 298,
        landCover: 131068,
        forestCover:129,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Appenzell Ausserrhoden",
        totalArea: 243,
        landCover: 131068,
        forestCover: 131,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Appenzell Innerrhoden",
        totalArea:172,
        landCover: 131068,
        forestCover: 85.3,
        percentageOfForestCover: 19.57,
      },
       {
        state: "St. Gallen",
        totalArea: 2031,
        landCover: 131068,
        forestCover: 239,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Grigioni",
        totalArea: 7105,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Aargau",
        totalArea: 1404,
        landCover: 131068,
        forestCover: 549,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Thurgau",
        totalArea: 992,
        landCover: 131068,
        forestCover: 256,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Ticino",
        totalArea: 2812,
        landCover: 131068,
        forestCover: 1410,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Vaud",
        totalArea: 3212,
        landCover: 131068,
        forestCover: 1180,
        percentageOfForestCover: 19.57,
      },
       {
        state: "Valais",
        totalArea: 5224,
        landCover: 131068,
        forestCover: 1340,
        percentageOfForestCover: 19.57,
      },
          {
        state: "Neuchâtel",
        totalArea:802,
        landCover: 131068,
        forestCover: 34.6,
        percentageOfForestCover: 19.57,
      },
          {
        state: "Genève",
        totalArea: 282,
        landCover: 131068,
        forestCover:36.8,
        percentageOfForestCover: 19.57,
      },
        {
        state: "Jura",
        totalArea: 839,
        landCover: 131068,
        forestCover: 406,
        percentageOfForestCover: 19.57,
      },
    ],
  },
  {
    id: "Netherlands",
    states: [
      {
        state: "Drenthe",
        totalArea: 2680,
        landCover: 2230,
        forestCover: 431.41,
        percentageOfForestCover: 16.09,
      },
      {
        state: "Flevoland",
        totalArea: 2412,
        landCover: 1230,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
    ],
  },
  {
    id: "Sweden",
    states: [
      {
        state: "Andhra Pradesh",
        totalArea: 162968,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
      {
        state: "Andhra Pradesh",
        totalArea: 162968,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
    ],
  },
  {
    id: "Japan",
    states: [
      {
        state: "Andhra Pradesh",
        totalArea: 162968,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
      {
        state: "Andhra Pradesh",
        totalArea: 162968,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
    ],
  },
  {
    id: "Spain",
    states: [
      {
        state: "Andhra Pradesh",
        totalArea: 162968,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
      {
        state: "Andhra Pradesh",
        totalArea: 162968,
        landCover: 131068,
        forestCover: 31900,
        percentageOfForestCover: 19.57,
      },
    ],
  },
  {
    id: "Brazil",
    totalArea: 8515766.8,
    landCover: 3944503.18,
    forestCover: 4571263.62,
    percentageOfForestCover: 53.68,
    states: [
      {
        state: "Sao Paulo",
        totalArea: 248222.8,
        landCover: 178720.42,
        forestCover: 69502.38,
        percentageOfForestCover: 28,
      },
      {
        state: "Amazonas",
        totalArea: 1570745.7,
        landCover: 60511.7,
        forestCover: 1510234,
        percentageOfForestCover: 96.14,
      },
      {
        state: "Para",
        totalArea: 1247689.5,
        landCover: 162199.63,
        forestCover: 1085489.8,
        percentageOfForestCover: 87,
      },
      {
        state: "Mato Grosso",
        totalArea: 903357,
        landCover: 334242.09,
        forestCover: 569114.91,
        percentageOfForestCover: 63,
      },
      {
        state: "Minas Gerais",
        totalArea: 586528.29,
        landCover: 436963.58,
        forestCover: 149564.71,
        percentageOfForestCover: 25.5,
      },
      {
        state: "Bahia",
        totalArea: 564733.2,
        landCover: 411916.39,
        forestCover: 152816.8,
        percentageOfForestCover: 27,
      },
      {
        state: "Mato Grosso do Sul",
        totalArea: 357145.5,
        landCover: 272144.8,
        forestCover: 85000.62 ,
        percentageOfForestCover: 23.8,
      },
      {
        state: "Goias",
        totalArea: 340111.8,
        landCover: 273619.95,
        forestCover: 66491.85,
        percentageOfForestCover: 19.6,
      },
      {
        state: "Maranhao",
        totalArea: 331937.4,
        landCover: 175096.98,
        forestCover: 156840.43 ,
        percentageOfForestCover: 47.2,
      },
      {
        state: "Rio Grande do Sul",
        totalArea: 281730.2,
        landCover: 212509.09,
        forestCover: 69221.12,
        percentageOfForestCover: 24.5,
      },
      {
        state: "Tocantins",
        totalArea: 277720.5,
        landCover: 186628.18,
        forestCover: 91092.33,
        percentageOfForestCover: 32.8,
      },
      {
        state: "Piaui",
        totalArea: 251577.7,
        landCover: 148581.8,
        forestCover: 102995.9,
        percentageOfForestCover: 40.9,
      },
      {
        state: "Rondonia",
        totalArea: 237590.5,
        landCover: 94941.17,
        forestCover: 142649.34,
        percentageOfForestCover: 60.03,
      },
      {
        state: "Roraima",
        totalArea: 224300.5,
        landCover: 55985.4,
        forestCover: 168315.1,
        percentageOfForestCover: 75,
      },
      {
        state: "Parana",
        totalArea: 199307.9,
        landCover: 138319.69,
        forestCover: 60988.22,
        percentageOfForestCover: 30.6,
      },
      {
        state: "Acre",
        totalArea: 164123,
        landCover: 24040.74,
        forestCover: 140082.27,
        percentageOfForestCover: 85.35,
      },
      {
        state: "Ceara",
        totalArea: 148920.5,
        landCover: 122412.65,
        forestCover: 26507.85,
        percentageOfForestCover: 17.8,
      },
      {
        state: "Amapa",
        totalArea: 142828.5,
        landCover: 23312.47,
        forestCover: 119516.3,
        percentageOfForestCover: 83.6,
      },
      {
        state: "Pernambuco",
        totalArea: 98148.3,
        landCover: 84329.02,
        forestCover: 13819.28,
        percentageOfForestCover: 14,
      },
      {
        state: "Santa Catarina",
        totalArea: 95736.2,
        landCover: 49093.52,
        forestCover: 46642.68,
        percentageOfForestCover: 48.72,
      },
      {
        state: "Paraiba",
        totalArea: 56469.8,
        landCover: 46418.17,
        forestCover: 10051.62,
        percentageOfForestCover: 17.8,
      },
      {
        state: "Rio Grande do Norte",
        totalArea: 52811,
        landCover: 44910.47,
        forestCover: 7900.52,
        percentageOfForestCover: 14.96,
      },
      {
        state: "Espirito Santo",
        totalArea: 46095.6,
        landCover: 31713.77,
        forestCover: 14381.83,
        percentageOfForestCover: 31.2,
      },
      {
        state: "Rio de Janeiro",
        totalArea: 43780.2,
        landCover: 26584.21,
        forestCover: 17195.99,
        percentageOfForestCover: 39.2,
      },
      {
        state: "Alagoas",
        totalArea: 27778.5,
        landCover: 22703.36,
        forestCover: 5075.13,
        percentageOfForestCover: 18.2,
      },
      {
        state: "Sergipe",
        totalArea: 21915.1,
        landCover: 17696.44,
        forestCover: 4218.66,
        percentageOfForestCover: 19.25,
      },
      {
        state: "Distrito Federal",
        totalArea: 5780,
        landCover: 5244.15,
        forestCover: 535.85,
        percentageOfForestCover: 9.2,
      }
    ],
  },
  {
    id: "Belgium",
    totalArea: 30689,
    landCover: 28449.32,
    forestCover: 2239.68,
    percentageOfForestCover: 7.2,
    states: [
      {
        state: "Antwerp",
        totalArea: 2876,
        landCover: 2641.03,
        forestCover: 234.97,
        percentageOfForestCover: 8.2,
      },
      {
        state: "East Flanders",
        totalArea: 3007,
        landCover: 2877.09,
        forestCover: 129.9,
        percentageOfForestCover: 4.3,
      },
      {
        state: "West Flanders",
        totalArea: 3197,
        landCover: 3075.18,
        forestCover: 121.81,
        percentageOfForestCover: 3.8,
      },
      {
        state: "Limburg",
        totalArea: 2427,
        landCover: 2229.66,
        forestCover: 197.34,
        percentageOfForestCover: 8.1,
      },
      {
        state: "Flemish Brabant",
        totalArea: 2118,
        landCover: 1975.52,
        forestCover: 142.48,
        percentageOfForestCover: 6.7,
      },
      {
        state: "Hainaut",
        totalArea: 3813,
        landCover: 3413.28,
        forestCover: 399.72,
        percentageOfForestCover: 10.4,
      },
      {
        state: "Liege",
        totalArea: 3857,
        landCover: 3565.06,
        forestCover: 291.94,
        percentageOfForestCover: 7.5,
      },
      {
        state: "Luxembourg",
        totalArea: 4459,
        landCover: 4217.01,
        forestCover: 241.99,
        percentageOfForestCover: 5.4,
      },
      {
        state: "Namur",
        totalArea: 3675,
        landCover: 3308.75,
        forestCover: 366.25,
        percentageOfForestCover: 9.9,
      },
      {
        state: "Walloon Brabant",
        totalArea: 1097,
        landCover: 951.09,
        forestCover: 145.9,
        percentageOfForestCover: 13.3,
      },
      {
        state: "Brussels Capital",
        totalArea: 162.4,
        landCover: 138.56,
        forestCover: 23.84,
        percentageOfForestCover: 14.6,
      },
    ],
  },
  {
    id: "SouthKorea",
    totalArea: 100210,
    landCover: 56464.32,
    forestCover: 43745.67,
    percentageOfForestCover: 43.6,
    states: [
      {
        state: "Seoul",
        totalArea: 605.21,
        landCover: 533.27,
        forestCover: 71.94,
        percentageOfForestCover: 11.8,
      },
      {
        state: "Busan",
        totalArea: 770.04,
        landCover: 472.64,
        forestCover: 297.4,
        percentageOfForestCover: 38.6,
      },
      {
        state: "Daegu",
        totalArea: 883.49,
        landCover: 481.55,
        forestCover: 401.93,
        percentageOfForestCover: 45.4,
      },
      {
        state: "Incheon",
        totalArea: 1062.63,
        landCover: 906.74,
        forestCover: 155.88,
        percentageOfForestCover: 14.67,
      },
      {
        state: "Gwangju",
        totalArea: 501.24,
        landCover: 373.52,
        forestCover: 127.71,
        percentageOfForestCover: 25.4,
      },
      {
        state: "Daejeon",
        totalArea: 539.85,
        landCover: 476.62,
        forestCover: 63.28,
        percentageOfForestCover: 11.71,
      },
      {
        state: "Ulsan",
        totalArea: 1057.136,
        landCover: 550.24,
        forestCover: 506.89,
        percentageOfForestCover: 47.95,
      },
      {
        state: "Sejong",
        totalArea: 465.23,
        landCover: 372.5,
        forestCover: 92.73,
        percentageOfForestCover: 19.9,
      },
      {
        state: "Gyeonggi-do",
        totalArea: 10184,
        landCover: 7532.08,
        forestCover: 2651.91,
        percentageOfForestCover: 26.04,
      },
      {
        state: "Gangwon-do",
        totalArea: 16875,
        landCover: 6388.87,
        forestCover: 10486.12,
        percentageOfForestCover: 62.14,
      },
      {
        state: "Chungcheongbuk-do",
        totalArea: 7433,
        landCover: 4454.15,
        forestCover: 2978.85,
        percentageOfForestCover: 40.07,
      },
      {
        state: "Chungcheongnam-do",
        totalArea: 8204,
        landCover: 6524.64,
        forestCover: 1679.35,
        percentageOfForestCover: 20.47,
      },
      {
        state: "Jeollabuk-do",
        totalArea: 8067,
        landCover: 5438.77,
        forestCover: 2628.29,
        percentageOfForestCover: 32.58,
      },
      {
        state: "Jeollanam-do",
        totalArea: 12247,
        landCover: 8256.93,
        forestCover: 3990.07,
        percentageOfForestCover: 32.58,
      },
      {
        state: "Gyeongsangbuk-do",
        totalArea: 19030,
        landCover: 8334.76,
        forestCover: 10695.24,
        percentageOfForestCover: 56.2,
      },
      {
        state: "Gyeongsangnam-do",
        totalArea: 10533,
        landCover: 5010.13,
        forestCover: 5522.87,
        percentageOfForestCover: 52.4,
      },
      {
        state: "Jeju",
        totalArea: 1849,
        landCover: 1032.76,
        forestCover: 816.24,
        percentageOfForestCover: 44.14,
      },
    ],
  },
  {
    id: "Denmark",
    totalArea: 42933,
    landCover: 40766.6,
    forestCover: 2166.4,
    percentageOfForestCover: 5.04,
    states: [
      {
        state: "Hovedstaden",
        totalArea: 2546.3,
        landCover: 2363.97,
        forestCover: 182.33,
        percentageOfForestCover: 7.1,
      },
      {
        state: "Midtjylland",
        totalArea: 13000.2,
        landCover: 12519.71,
        forestCover: 480.48,
        percentageOfForestCover: 3.6,
      },
      {
        state: "Nordjylland",
        totalArea: 7874,
        landCover: 7351.48,
        forestCover: 522.51,
        percentageOfForestCover: 6.6,
      },
      {
        state: " Sjaelland",
        totalArea: 7217.8,
        landCover: 6846.75,
        forestCover: 371.052,
        percentageOfForestCover: 5.1,
      },
      {
        state: "Syddanmark",
        totalArea: 12191,
        landCover: 11572.55,
        forestCover: 618.45,
        percentageOfForestCover: 5.07,
      },
    ],
  },
];

module.exports = country;
