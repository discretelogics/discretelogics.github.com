---
layout: post
published: true
title: "TeaHouse released now! Browse Time Series By Chart"
description: "new product release"
category: 
tags: ["teatime", "time series", "chart"]
---

It is done, today we are pleased to announce the availability of TeaHouse - 
a Windows application to browse and visualize time series like financial, sensor or performance metrics data.<!-- more start -->

![TeaHouse](/img/teahouse2.png "TeaHouse")
  
#### Large files forced us to do it
We built TeaHouse to have a tool that opens arbitrarily large time series and draws data of any format (temperatures, 
prices, aggregated values). Leaving "advanced" analysis operations out, we set the focus on efficient data 
access and versatile data handling so that it opens just any time series file.

#### Data Access in TeaHouse
How we did it? When a file is opened with TeaHouse, the length of the file is already available from the file descriptor, 
from which the number of items in the file can be computed. Then the last (most times 4kB large) 
page is read from disk, enough to draw the available portion of the time series. So in summary, onlY a single page
is read from disk when a file of any size is opened. And this holds independent of the filesize, so the file could be Tera 
or Petabytes and the loading time would not become any longer. Upon scrolling, more pages are loaded from disk on demand, which goes 
unnoticable for local files and still smooth for files accessed via LANs.
  
![TeaHouse](/img/teahouseload.png "TeaHouse Loading Time")
  
Find out more about TeaHouse here:

[Press Release](/press/pressteahouse/)  
[Product Information](/teahouse)
<!-- more end -->
