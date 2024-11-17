---
title: 'Immortal Objects for Python'
publishDate: '2023'
date: '2023'
url: 'https://engineering.fb.com/2023/08/15/developer-tools/immortal-objects-for-python-instagram-meta/'
imgSrc: 'python_logo.svg.png'
description: "In my time on the Instagram Web Server team I worked to implement and validate immortal instances in our internal fork of Python and optimize refcounting behaviour to support backwards compatibility with C-Extensions. This feature has since been ported upstream into the official CPython Source (PEP-683). tldr; IG uses django and a pre-fork server architecture on its frontend web server that handles all incoming requests. We notcied that, due to Copy-On-Writes triggered by Python's Garbage Collection refcount management, private memory per process increased while shared memory descreased over a series of requests. This work allowed us to ensure that Python objects can be truly immutable."
---
