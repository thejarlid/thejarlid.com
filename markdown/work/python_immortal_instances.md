---
title: 'Immortal Objects for Python'
publishDate: '2023'
date: '2023'
url: 'https://engineering.fb.com/2023/08/15/developer-tools/immortal-objects-for-python-instagram-meta/'
imgSrc: 'python_logo.svg.png'
description: "In my time on the Instagram Web Server team I worked to implement and validate the implementation of immortal instances in our internal fork of Python which has since been ported upstream into the official Python Source. IG is build with django and uses a pre-fork model to handle multiple requests. We noticed an increase in private memory per process while shared memory would descrease over a series of requests. This work allowed us to improve copy on write performance resulting in both memory and millions in cost savings."
---
