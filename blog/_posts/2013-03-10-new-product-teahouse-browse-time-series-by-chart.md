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
Why another chart? While looking for a chart component that can draw large time series we found 
components that can draw some thousand values, but we wanted unlimited range, so we can open files 
with Millions of values as well. Being able to chart such large time series is necessary 
to visualize financial tick data over longer periods. Most chart components 
focus on features like "fibonacci fans" or other "advanced studies" but much less on efficient data access. 
This is why we implmemented a raw chart with the focus on efficient data access and versatile data handling so that it 
opens just any time series file.

#### Data Access in TeaHouse
How did we do it? When a file is opened with TeaHouse, the length of the file is already available from the file descriptor, 
from which the number of items in the file can be computed. Then the last (most times 4kB large) 
page is read from disk, enough to draw the available portion of the time series. So in summary, onle a single page
is read from disk when a file of any size is opened. And this holds independent of the filesize, so the file could be Tera 
or Petabytes and the loading time would not become any longer. Upon scrolling, more pages are loaded from disk on demand, which goes 
unnoticable for local files and still smooth for files accessed via LANs.
  
![TeaHouse](/img/teahouseload.png "TeaHouse Loading Time")
  
Find out more about TeaHouse here:

[Press Release](/press/pressteahouse/)  
[Product Information](/teahouse)
<!-- more end -->