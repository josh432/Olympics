# Olympics
Problem: Who won gold medals in the Olympics? Silver? Bronze? Who won the most medals? Olympics Medal Tracker has you covered. We asked ourselves these questions and wanted to create an app which summarizes the Winter Olympics medal results. We wanted a "birds-eye-view" of the Olympics on a country level so we decided a map would give us the best overview of the results. Most existing online medal tracking tools are not as straightforward as a map. We found existing medal trackers quite cumbersome. You really have to dig deep into a table, or a graph. They simply aren't user friendly and they don't provide as much information as OMT. 

Solution: We obtained the medal count from sportsradar api and imported the information into an array. In the array, we created objects with properties and values for our medal data.  We used Google maps for display. On clicking a country, a modal opens showing countries data: country, medal count, and event of the medal. We divided the maps by medal so one can see at a glance winners by country of gold, silver, and bronze medals.

Improvement: We would eventually like to get more data to display in the modal, perhaps athlete name, pictures, video of event, etc. We also would like to broaden the scope to cover more sporting events. This would make OMT the goto site for sports events statistics.

Built Using: HTML, CSS, Materialize, Node.JS, MySQL, Sequelize
