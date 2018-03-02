// ===============================================================================
// DATA
// Below data will hold 2018 standings.
// ===============================================================================

var standings = [
{
  "place":1,
  "country":"Norway",
  "gold":[
    ["Cross-country skiing", "Men's 30 km skiathlon"],
    ["Cross-country skiing", "Men's sprint"],
    ["Cross-country skiing", "Women's 10 km freestyle"],
    ["Biathlon", "Men's individual"],
    ["Ski jumping", "Women's normal hill individual"],
    ["Alpine skiing","Men's downhill"],
    ["Cross-country skiing","Wome's 4 x 5 km relay"],
    ["Freestyle skiing","Men's slopestyle"],
    ["Cross-country skiing","Men's 4 x 10 km relay"],
    ["Speed skating","Men's 500 m"],
    ["Ski jumping","Men's large hill team"],
    ["Cross-country skiing","Men's team sprint"],
    ["Speed skating","Men's team sprint"],
    ["Cross-country skiing","Women's 30 km classical"]
  ],
  "silver":[
    ["Alpine skiing","Men's downhill"],
    ["Alpine skiing","Women's giant slalom"],
    ["Alpine skiing","Women's downhill"],
    ["Cross-country skiing","Women's 15 km skiathlon"],
    ["Biathlon","Women's sprint"],
    ["Ski jumping","Men's normal hill individual"],
    ["Cross-country skiing","Men's 30 km skiathlon"],
    ["Cross-country skiing","Men's 15 kilometre freestyle"],
    ["Cross-country","Women's sprint"],
    ["Alpine skiing","Men's giant slalom"],
    ["Biathlon","Mixed relay"],
    ["Nordic Combined","Team large hill/4x5km"],
    ["Speed skating","Men's 100m"],
    ["Biathlon","Men's relay"]    
  ],
  "bronze":[
    ["Ski jumping","Men's normal hill individual"],
    ["Speed skating","Men's 5000 m"],
    ["Cross-country skiing","Men's 30 km skiathlon"],
    ["Cross-country skiing","Women's 10 kilometre freestyle"],
    ["Alpine skiing","Men's super-G"],
    ["Biathlon","Women's mass start"],
    ["Ski jumping","Men's large hill individual"],
    ["Biathlon","Men's mass start"],
    ["Cross-country skiing","Women's team sprint"],
    ["Curling","Mixed doubles"],
    ["Apline skiing","Team event"] 
  ],
  "total":39
},
{
  "place":2,
  "country":"Germany",
  "gold":[
    ["Biathlon","Women's sprint"],
    ["Ski jumping","Men's normal hill individual"],
    ["Biathlon","Men's sprint"],
    ["Biathlon","Women's pursuit"],
    ["Luge","Wome's singles"],
    ["Nordic combined","Individual normal hill/10km"],
    ["Luge","Doubles"],
    ["Figure skating","Pairs"],
    ["Luge","Team relay"],
    ["Bobsleigh","Two-man"],
    ["Nordic combined","Individual large hill/10km"],
    ["Bobsleigh","Two-woman"],
    ["Nordic combined","Team large hill/4 x 5 km"],
    ["Bobsleigh","Four-man"]
  ],
  "silver":[
    ["Ski jumping","Women's normal hill individual"],
    ["Luge","Women's singles"],
    ["Skeleton","Women's"],
    ["Ski jumpinig","Men's large hill individual"],
    ["Biathlon","Men's mass start"],
    ["Ski jumping","Men's large hill team"],
    ["Nordic combined","Individual large hill/10 km"],
    ["Snowboarding","Women's parallel giant slalom"],
    ["Bobsleigh","Four-man"],
    ["Ice hockey","Men's tournament"]
  ],
  "bronze":[
    ["Luge","Men's singles"],
    ["Biathlon","Men's pursuit"],
    ["Luge","Doubles"],
    ["Biathlon","Women's individual"],
    ["Nordic combined","Individual large hill/10 km"],
    ["Biathlon","Men's relay"],
    ["Snowboarding","Women's parallel giant slalom"]
  ],
  "total":31
},
{
  "place":3,
  "country":"Canada",
  "gold":[
    ["Figure skating","Team event"],
    ["Freestyle skiing","Men's moguls"],
    ["Curling","Mixed doubles"],
    ["Speed skating","Men's 10,000 metres"],
    ["Short track speed skating","Men's 1000 metres"],
    ["Bobsleigh","Two-man"],
    ["Freestyle skiing","Women's halfpipe"],
    ["Figure skating","Ice dancing"],
    ["Freestyle skiing","Men's ski cross"],
    ["Freestyle skiing","Women's ski cross"],
    ["Snowboarding","Men's big air"]
  ],
  "silver":[
    ["Snowboarding","Men's slopestyle"],
    ["Speed skating","Men's 5000 metres"],
    ["Freestyle skiing","Women's moguls"],
    ["Snowboarding","Women's slopestyle"],
    ["Luge","Team relay"],
    ["Ice hockey","Women's tournament"],
    ["Short track speed skating","Women's 1000 metres"],
    ["Freestyle skiing","Women's ski cross"]
  ],
  "bronze":[
    ["Snowboarding","Men's slopestyle"],
    ["Short track speed skating","Women's 500 metres"],
    ["Luge","Women's singles"],
    ["Figure skating","Pairs"],
    ["Short track speed skating","Women's 1500 metres"],
    ["Freestyle skiing", "Men's slopestyle"],
    ["Bobsleigh","Two-woman"],
    ["Short track speed skating","Men's 5000 metre relay"],
    ["Figure skating","Ladies singles"],
    ["Ice hockey","Men's tournament"]
  ],
  "total":29
},
{
  "place":4,
  "country":"United States",
  "gold":[
    ["Snowboarding","Men's slopestyle"],
    ["Snowboarding","Women's slopestyle"],
    ["Snowboarding","Women's halfpipe"],
    ["Snowboarding","Men's halfpipe"],
    ["Alpine skiing","Women's giant slalom"],
    ["Cross-country","skiing"],
    ["Ice hockey","Women's tournament"],
    ["Freestyle skiing","Men's halfpipe"],
    ["Curling","Men's tournament"]
  ],
  "silver":[
    ["Luge","Men's singles"],
    ["Short track speed skating","Men's 1000 m"],
    ["Freestyle skiing","Men's slopestyle"],
    ["Bobsleigh","Two-woman"],
    ["Alpine skiing","Women's combined"],
    ["Freestyle skiing","Men's halfpipe"],
    ["Snowboarding","Women's big air"],
    ["Snowboarding","Men's big air"]
  ],
  "bronze":[
    ["Figure skating","Team event"],
    ["Snowboarding","Women's halfpipe"],
    ["Figure skating","Ice dancing"],
    ["Freestyle skiing","Women's halfpipe"],
    ["Alpine skiing","Women's downhill"],
    ["Speed skating","Women's team pursuit"]
  ],
  "total":23
},
{
  "place":5,
  "country":"Netherlands",
  "gold":[
    ["Speed Skating","Women's 3000 metres"],
    ["Speed Skating","Men's 5000 metres"],
    ["Speed Skating","Women's 1500 metres"],
    ["Speed Skating","Men's 150 metres"],
    ["Speed Skating","Women's 1000 metres"],
    ["Speed Skating","Women's 5000 metres"],
    ["Speed Skating","Men's 1000 metres"],
    ["Short track speed skating","Women's 1000 metres"]
  ],
  "silver":[
    ["Speed skating","Women's 3000 metres"],
    ["Speed skating","Men's 1500 metres"],
    ["Speed skating","Men's 10000 metres"],
    ["Speed skating","Women's team pursuit"],
    ["Short track speed skating","Men's 1500 metres"],
    ["Short track speed skating","Women's 500 metres"]
  ],
  "bronze":[
    ["Speed skating","Women's 3000 metres"],
    ["Speed skating","Women's 1500 metres"],
    ["Speed skating","Men's team pursuit"],
    ["Speed skating","Women's mass start"],
    ["Speed skating","Men's mass start"],
    ["Short track speed skating","Women's 3000 metre relay"]
  ],
  "total":20
},
{
  "place":6,
  "country":"South Korea",
  "gold":[
    ["Short track speed skating","Men's 1500 metres"],
    ["Skeleton","Men's"],
    ["Short track speed skating","Women's 1500 metre relay"],
    ["Short track speed skating","Women's 3000 metre relay"],
    ["Speed skating","Men's mass start"]
  ],
  "silver":[
    ["Speed skating","Women's 500 metres"],
    ["Speed skating","Men's 500 metres"],
    ["Speed skating","Men's team pursuit"],
    ["Short track speed skating","Men's 500 metres"],
    ["Snowboarding","Men's parallel giant slalom"],
    ["Speed skating","Women's mass start"],
    ["Curling","Women's tournament"],
    ["Bobleigh","Four-man"]
  ],
  "bronze":[
    ["Speed skating","Men's 1500 metres"],
    ["Short track speed skating","Men's 1000 metres"],
    ["Short track speed skating","Men's 500 metres"],
    ["Speed skating","Men's 1000 metres"]
  ],
  "total":17
},
{
  "place":7,
  "country":"Olympic Athlete from Russia",
  "gold":[
    ["Figure skating","Ladies' singles"],
    ["Ice hockey","Men's tournament"]
  ],
  "silver":[
    ["Figure skating","Team event"],
    ["Skeleton","Men's"],
    ["Cross-country skiing","Men's 4 x 10 km relay"],
    ["Cross-country skiing","Men's team sprint"],
    ["Figure Skating","Ladies' singles"],
    ["Cross-country skiing","Men's 1500 metres"]
  ],
  "bronze":[
    ["Short track speed skating","Men's 1500 metres"],
    ["Cross-country skiing","Women's sprint"],
    ["Cross-country skiing","Men's sprint"],
    ["Cross-country skiing","Men's 15 km freestyle"],
    ["Speed skating","Women's 5000 m"],
    ["Cross-country skiing","Women's 4 x 5 km relay"],
    ["Freestyle skiing","Men's aerials"],
    ["Freestyle skiing","Men's ski cross"],
    ["Cross-country skiing","Men's 50 km classical"]
  ],
  "total":17
},
{
  "place":8,
  "country":"Switzerland",
  "gold":[
      ["Cross-country skiing", "Men's 15 kilometre freestyle"],
      ["Freestyle skiing", "Women's slopestyle"],
      ["Alpine skiing", "Women's combined"],
      ["Alpine skiing", "Mixed Team"],
      ["Snowboarding", "Men's parallel giant slalom"]
  ],
  "silver":[
      ["Curling", "Mixed doubles"],
      ["Alpine skiing", "Men's super G"],
      ["Alpine skiing", "Women's slalom"],
      ["Freestyle skiing", "Women's slopestyle"],
      ["Freestyle skiing", "Men's ski cross"],
      ["Alpine skiing", "Men's slalom"]
  ],
  "bronze":[
      ["Alpine skiing", "Men's downhill"],
      ["Alpine skiing", "Women's combined"],
      ["Freestyle skiing", "Women's ski cross"],
      ["Curling", "Men's"]
  ],
  "total":15
},
{
  "place":9,
  "country":"France",
  "gold":[
      ["Freestyle skiing", "Women's moguls"],
      ["Biathlon", "Men's pursuit"],
      ["Snowboarding", "Men's snowboard cross"],
      ["Biathlon", "Men's mass start"],
      ["Biathlon", "Mixed relay"]
  ],
  "silver":[
      ["Alpine skiing", "Men’s combined"],
      ["Snowboarding", "Women's snowboard cross"],
      ["Figure skating", "Ice dancing"],
      ["Freestyle skiing", "Women's halfpipe"]
  ],
  "bronze":[
      ["Biathlon", "Women's pursuit"],
      ["Alpine skiing", "Men’s combined"],
      ["Alpine skiing", "Men's giant slalom"],
      ["Cross-country skiing", "Men's 4×10 km relay"],
      ["Cross-country skiing", "Men's team sprint"],
      ["Biathlon", "Women's relay"]
  ],
  "total":15
},
{
  "place":10,
  "country":"Sweden",
  "gold":[
      ["Cross-country skiing", "Women's 15 km skiathlon"],
      ["Cross-country skiing", "Women's sprint"],
      ["Biathlon", "Women's individual"],
      ["Alpine skiing", "Women's slalom"],
      ["Alpine skiing", "Men's slalom"],
      ["Biathlon", "Men's relay"],
      ["Curling", "Women's tournament"]
  ],
  "silver":[
      ["Biathlon", "Men's pursuit"],
      ["Cross-country skiing", "Women's 10 km freestyle"],
      ["Cross-country skiing", "Women's 4×5 km relay"],
      ["Cross-country skiing", "Women's team sprint"],
      ["Biathlon", "Women's relay"],
      ["Curling", "Men's tournament"]
  ],
  "bronze":[
      ["Cross-country skiing", "Women's 30 km classical"]
  ],
  "total":14
},
{
  "place":11,
  "country":"Austria",
  "gold":[
      ["Luge", "Men's singles"],
      ["Alpine skiing", "Men’s combined"],
      ["Alpine skiing", "Men’s super-G"],
      ["Alpine skiing", "Men’s giant slalom"],
      ["Snowboarding", "Women's big air "]
  ],
  "silver":[
      ["Luge", "Men's doubles"],
      ["Alpine skiing", "Women's super-G"]
  ],
  "bronze":[
      ["Nordic combined", "Individual normal hill/10km"],
      ["Biathlon", "Men's individual"],
      ["Luge", "Team relay"],
      ["Alpine skiing", "Women's slalom"]
  ],
  "total":11
},
{
  "place":12,
  "country":"Japan",
  "gold":[
      ["Figure skating", "Men's singles"],
      ["Speed skating", "Women's 500 metres"],
      ["Speed skating", "Women's team pursuit"],
      ["Speed skating", "Women's mass start "]
  ],
  "silver":[
      ["Speed skating", "Women's 1500 metres"],
      ["Nordic combined", "Individual normal hill/10 km"],
      ["Snowboarding", "Men's halfpipe"],
      ["Speed skating", "Women's 1000 metres"],
      ["Figure skating", "Men's singles"]
  ],
  "bronze":[
      ["Freestyle skiing", "Men's moguls"],
      ["Ski jumping", "Women's normal hill individual"],
      ["Speed skating", "Women's 1000 metres"],
      ["Curling", "Women's curling"]
  ],
  "total":13
},
{
  "place":13,
  "country":"Italy",
  "gold":[
      ["Short track speed skating", "Women's 500 metres"],
      ["Snowboarding", "Women's snowboard cross "],
      ["Alpine skiing", "Women's downhill"]
  ],
  "silver":[
      ["Cross-country skiing", "Men's sprint"],
      ["Short track speed skating", "Women's 3000 metre relay"]
  ],
  "bronze":[
      ["Biathlon", "Men's sprint"],
      ["Alpine skiing", "Women's giant slalom"],
      ["Speed skating", "Men's 10000 meters"],
      ["Biathlon", "Mixed relay"],
      ["Short track speed skating", "Women's 1000 metres"]
  ],
  "total":10
},
{
  "place":14,
  "country":"China",
  "gold":[
      ["Short track speed skating","Men's 500 metres"]
  ],
  "silver":[
      ["Snowboarding", "Women's halfpipe"],
      ["Figure skating", "Pairs "],
      ["Freestyle skiing", "Women's aerials"],
      ["Short track speed skating", "Women's 1500 metres"],
      ["Freestyle skiing", "Men's aerials"],
      ["Short track speed skating", "Men's 5000 metre relay"]
  ],
  "bronze":[
      ["Freestyle skiing", "Women's aerials"],
      ["Speed skating", "Men's 500 m"]
  ],
  "total":9
},
{
  "place":15,
  "country":"Czech Republic",
  "gold":[
      ["Alpine skiing", "Women's super-G"],
      ["Snowboarding", "Women's parallel giant slalom"]
  ],
  "silver":[
      ["Biathlon","Mens sprint"],
      ["Speed skating", "Women's 5000 m"]
  ],
  "bronze":[
      ["Biathlon", "Women's sprint"],
      ["Snowboarding", "Women's snowboard cross"],
      ["Speed skating", "Women's 500 m"]
  ],
  "total":7
},
{
  "place":16,
  "country":"Finland",
  "gold":[
      ["Cross-country skiing", "Men's kilometre classical"]
  ],
  "silver":[
      ["Cross-country skiing", "Women's 30 kilometre classical"]
  ],
  "bronze":[
      ["Cross-county skiing", "Women's 15 kilometre skiathlon"],
      ["Snowboarding", "Women's slopestyle"],
      ["Cross-country skiing", "Women's 10 kilometre freestyle"],
      ["Ice hockey", "Women's tournament"]
  ],
  "total":6
},
{
  "place":17,
  "country":"Great Britain",
  "gold":[
    ["Skeleton", "Women's"],
],
  "silver":0,
  "bronze":[
      ["Skeleton", "Men's"],
      ["Freestyle skiing", "Women's Slopestyle"],
      ["Skeleton", "Wome's"],
      ["Snowboarding", "Men's Big Air"]
  ],
  "total":5
},
{
  "place":18,
  "country":"Belarus",
  "gold":[
      ["Freestyle skiing", "Women's aerials"],
      ["Biathlon", "Women's relay"]
  ],
  "silver":[
      ["Biathlon", "Woman's mass start"]
  ],
  "bronze":0,
  "total":3
},
{
  "place":19,
  "country":"Slovakia",
  "gold":[
      ["Biathlon", "Women's mass start"]
  ],
  "silver":[
      ["Biathlon", "Women's persuit"],
      ["Biathlon", "Women's individual"]
  ],
  "bronze":0,
  "total":3
},
{
  "place":20,
  "country":"Australia",
  "gold":0,
  "silver":[
      ["Freestyle skiing", "Men's moguls"],
      ["Snowboarding", "Men's snowboarding cross"]
  ],
  "bronze":[
      ["Snowboarding", "Men's halfpipe"]
  ],
  "total":3
},
{
  "place":21,
  "country":"Poland",
  "gold":[
      ["Ski jumpings","Men's large hill individual"]
  ],
  "silver":0,
  "bronze":[
      ["Ski jumping", "Men's large hill team"]
  ],
  "total":2
},
{
  "place":22,
  "country":"Slovenia",
  "gold":0,
  "silver":[
      ["Biathlon", "Men's individual"]
  ],
  "bronze":[
      ["Snowboarding", "Men's parallel giant slalom"]
  ],
  "total":2
},
{
  "place":23,
  "country":"Spain",
  "gold":0,
  "silver":0,
  "bronze":[
      ["Snowboarding", "Men's snowboard cross"],
      ["Figure skating", "Men's singles"]
  ],
  "total":2
},
{
  "place":24,
  "country":"New Zealand",
  "gold":0,
  "silver":0,
  "bronze":[
      ["Snowboarding", "Women's big air"],
      ["Freestyle skiing", "Men's halfpipe"]
  ],
  "total":2
},
{
  "place":25,
  "country":"Hungary",
  "gold":[
      ["Short track speed skating", "Men's 5000 metre relay"]
  ],
  "silver":0,
  "bronze":0,
  "total":1
},
{
  "place":26,
  "country":"Ukraine",
  "gold":[
      ["Freestyle skiing", "Men's aerials"]
  ],
  "silver":0,
  "bronze":0,
  "total":1
},
{
  "place":27,
  "country":"Belgium",
  "gold":0,
  "silver":[
      ["Speed skating", "Men's mass start"]
  ],
  "bronze":0,
  "total":1
},
{
  "place":28,
  "country":"Kazakhstan",
  "gold":0,
  "silver":0,
  "bronze":[
      ["Freestyle skiing", "Women's moguls"]
  ],
  "total":1
},
{
  "place":29,
  "country":"Latvia",
  "gold":0,
  "silver":0,
  "bronze": [
      ["Bobsleigh", "Two-man"]
  ],
  "total":0
},
{
  "place":30,
  "country":"Liechtenstein",
  "gold":0,
  "silver":0,
  "bronze":[
      ["Alpine skiing", "Women's super-G"]
  ],
  "total":1
},
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = standings;