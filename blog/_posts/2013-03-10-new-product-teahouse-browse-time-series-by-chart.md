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
Why another chart? Aren't there that many charts out there already? It turned out, not. 
When looking for a chart component that can draw large time series we found at best 
components that can draw some thousand values, but we wanted unlimited range, so we can open files 
with Millions of values as well. Being able to chart such large time series is necessary 
to visualize financial tick data over longer periods. Most chart components 
focus on features like "fibonacci fans" or other "advanced studies" and less on efficient data access. 
So we implmemented a raw chart with the focus on efficient data access that opens just any time series file.

#### Data Access in TeaHouse
When a file is opened with TeaHouse, the lenght of the file is available from the file descriptor, then the last (most times 4kB large) 
page is read from disk and this is enough to draw the available portion of the time series. This holds 
independent of the filesize, so the file could be Tera or Petabytes and the loading time would not change.
Upon scrolling, more pages are loaded on demand, which goes unnoticable for local files and still smooth for files accessed via LANs.

  
![TeaHouse](/img/teahouseload.png "TeaHouse Loading Time")
  

Please find more about TeaHouse here:

[Press Release](/press/pressteahouse/)  
[Product Information](/teahouse)
<!-- more end -->