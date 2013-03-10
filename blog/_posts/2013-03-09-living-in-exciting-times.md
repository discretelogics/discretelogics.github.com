---
  layout: post
  title: "NoSQL = Living in Exciting Times"
  description: NoSQL
  tags: ["NoSQL", "Computer Science"] 
  author: Thomas Hulka
---

”We live in the most exciting time!” the professor said back in school spreading his enthusiasm for 
computer science. We had 2000, the internet reached out to everyone, so the field was obviously 
unpreceded excitement. Since then? Even more exciting!


#### Having the Choice
Back then, google invented [Big Table](https://en.wikipedia.org/wiki/BigTable) and applied 
[Map Reduce](https://en.wikipedia.org/wiki/MapReduce) to solve their persistence and processing 
needs,   <!-- more start --> demonstrating how software architects should think about their needs before going traditional ways 
(using relational SQL databases). The “NoSQL” movement evolved and new products approached data 
storage and processing in new ways. Alex Popescu's [blog](http://nosql.mypopescu.com/kb/nosql) 
collects citations what poeple actually consider NoSQL to be. “Having the choice” is Jan Lehnardt’s view.

#### Even more Choices
Freed from old traditions, software engineering became a much more creative challenge (a good thing) and - more important - offers many new possibilities. Nearby,
  
  * advances in programming languages,
  * developer collaboration (open source projects),
  * advances in the software engineering process,
  * more powerful operating system features

made it possible that we now see database products started by [single](http://ravendb.net/) [individuals](http://couchdb.com) that compete with the large ones. This is fair competition in favor for all in the discipline, and for customers anyway. And adds even more choices.

#### Decision Time
Choice requires decision, so NoSQL also means "Think before you store and process." 
Understanding the own problem before buying a solution got more challenging then in the old days 
when buying from the big companies was always safe. But these "Nobody gets fired for buying X" rules are no more. To cope 
with the challenge of choice, software makers provide more information about their products, publish benchmarks and  
got into a new habit: They compare their own products against potentially competitive products, as MongoDB once did with CouchDB, [Riak with MongoDB](http://docs.basho.com/riak/latest/references/appendices/comparisons/Riak-Compared-to-MongoDB/)
or lately [RethinkDB with MongoDB](http://www.rethinkdb.com/docs/comparisons/mongodb/). This is constructive public discussion
in favor for all and we thought we should communicate our reasoning about 
time series analysis, vizualisation and persistence in a blog too. So here it is. Posts will cover 

  * why we designed a new file format for time series persistence
  * the (tight) relation between visualization and data access
  * time series analysis, historical and real time
  * discrete event simulation
  * persistence: file systems and NoSQL databases
  * products and tools

Please stay tuned.

<!-- more end -->