# Northern Trust API

This documentation explains how calls to the API should be made and what responses to expect.

## Get Site Information

To get general site information, as well as information about the REST API, including its various namespaces and endpoints, make a `GET` request to the following url:

```
GET http://localhost:8000/wp-json/
```

You should receive a response that looks like this:

```JSON
{
    "name": "Northern Trust TV App",
    "description": "Just another WordPress site",
    "url": "http://localhost:8000",
    "home": "http://localhost:8000",
    "gmt_offset": "0",
    "timezone_string": "",
    "namespaces": [
        "oembed/1.0",
        "torque-map/v1/",
        "northern-trust/v1/",
        "torque/v1",
        "wp/v2"
    ],
    "authentication": [],
    "routes": {
        "/": {
            "namespace": "",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "context": {
                            "required": false,
                            "default": "view"
                        }
                    }
                }
            ],
            "_links": {
                "self": "http://localhost:8000/wp-json/"
            }
        },
        ...
        "/torque-map/v1/map/(?P<id>[\\d]+)": {
            "namespace": "torque-map/v1/",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "id": {
                            "required": false
                        }
                    }
                }
            ]
        },
        ...
        "/northern-trust/v1/portrait-grid/(?P<slug>[a-zA-Z0-9-_]+)": {
            "namespace": "northern-trust/v1/",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "slug": {
                            "required": false
                        }
                    }
                }
            ]
        },
        "/northern-trust/v1/icon-grid/(?P<slug>[a-zA-Z0-9-_]+)": {
            "namespace": "northern-trust/v1/",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "slug": {
                            "required": false
                        }
                    }
                }
            ]
        },
        ...
    },
    "_links": {
        "help": [
            {
                "href": "http://v2.wp-api.org/"
            }
        ]
    }
}
```

## Get Nav Items

Whether you are getting a navigation for the footer or for or the main nav, you will make a request to the same url:

```
GET http://localhost:8000/wp-json/northern-trust/v1/nav/{nav-slug}
```

In order to find out which navs are available in the backend, simply make the following `GET` request:

```
GET http://localhost:8000/wp-json/northern-trust/v1/navs-available
```

You should receive something that looks like this:

```JSON
{
    "success": true,
    "navs": [
        {
            "term_id": 3,
            "name": "Footer Menu",
            "slug": "footer-menu",
            "term_group": 0,
            "term_taxonomy_id": 3,
            "taxonomy": "nav_menu",
            "description": "",
            "parent": 0,
            "count": 3,
            "filter": "raw"
        },
        {
            "term_id": 2,
            "name": "Menu 1",
            "slug": "menu-1",
            "term_group": 0,
            "term_taxonomy_id": 2,
            "taxonomy": "nav_menu",
            "description": "",
            "parent": 0,
            "count": 3,
            "filter": "raw"
        }
    ]
}
```

If you wanted to get the nav items for the Footer Menu, for example. You can make a `GET` request to the following url:

```
GET http://localhost:8000/wp-json/northern-trust/v1/nav/footer-menu
```

You will get a response that looks like this:

```JSON
{
    "success": true,
    "nav": [
        {
            "id": 17,
            "title": "test grid",
            "slug": "test-grid",
            "status": "publish",
            "post_type": "portrait_grid"
        },
        {
            "id": 41,
            "title": "test",
            "slug": "test",
            "status": "publish",
            "post_type": "event"
        },
        {
            "id": 33,
            "title": "test grid",
            "slug": "test-grid",
            "status": "publish",
            "post_type": "icon_grid"
        }
    ]
}
```

## Get Resting State Content

To get the Resting State content you will make a request to the following url:

```
GET http://localhost:8000/wp-json/northern-trust/v1/resting-state
```

You should receive something that looks like this:

```JSON
{
    "success": true,
    "resting_state": {
        "background_images": [
            {
                "ID": 80,
                "id": 80,
                "title": "NOTR-0001-Touchscreen-Designs-assets-32-1920px",
                "filename": "NOTR-0001-Touchscreen-Designs-assets-32-1920px.jpg",
                "filesize": 189471,
                "url": "http://localhost:8000/wp-content/uploads/2020/01/NOTR-0001-Touchscreen-Designs-assets-32-1920px.jpg",
                "link": "http://localhost:8000/notr-0001-touchscreen-designs-assets-32-1920px/",
                "alt": "",
                "author": "3",
                "description": "",
                "caption": "",
                "name": "notr-0001-touchscreen-designs-assets-32-1920px",
                "status": "inherit",
                "uploaded_to": 0,
                "date": "2020-01-10 21:34:34",
                "modified": "2020-01-10 21:35:01",
                "menu_order": 0,
                "mime_type": "image/jpeg",
                "type": "image",
                "subtype": "jpeg",
                "icon": "http://localhost:8000/wp-includes/images/media/default.png",
                "width": 1920,
                "height": 864,
                "sizes": {
                    "thumbnail": "http://localhost:8000/wp-content/uploads/2020/01/NOTR-0001-Touchscreen-Designs-assets-32-1920px-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://localhost:8000/wp-content/uploads/2020/01/NOTR-0001-Touchscreen-Designs-assets-32-1920px-300x135.jpg",
                    "medium-width": 300,
                    "medium-height": 135,
                    "medium_large": "http://localhost:8000/wp-content/uploads/2020/01/NOTR-0001-Touchscreen-Designs-assets-32-1920px-768x346.jpg",
                    "medium_large-width": 768,
                    "medium_large-height": 346,
                    "large": "http://localhost:8000/wp-content/uploads/2020/01/NOTR-0001-Touchscreen-Designs-assets-32-1920px-1024x461.jpg",
                    "large-width": 1024,
                    "large-height": 461,
                    "1536x1536": "http://localhost:8000/wp-content/uploads/2020/01/NOTR-0001-Touchscreen-Designs-assets-32-1920px-1536x691.jpg",
                    "1536x1536-width": 1536,
                    "1536x1536-height": 691,
                    "2048x2048": "http://localhost:8000/wp-content/uploads/2020/01/NOTR-0001-Touchscreen-Designs-assets-32-1920px.jpg",
                    "2048x2048-width": 1920,
                    "2048x2048-height": 864
                }
            },
            ...
        ]
    }
}
```

## Portrait Grids

To make a request to get a portrait grid, simply make a `GET` request to the following url:

```
GET http://localhost:8000/wp-json/northern-trust/v1/portrait-grid/test-grid
```

You should get a response like the following:

```JSON
{
    "success": true,
    "grid": {
        "id": 17,
        "title": "test grid",
        "portraits": [
            {
                "name": "Mario Vallejo",
                "date_started": "13/12/2019",
                "department": "some accounts",
                "photo": {
                    "ID": 18,
                    "id": 18,
                    "title": "Screen Shot 2019-10-18 at 12.32.16 PM",
                    "filename": "Screen-Shot-2019-10-18-at-12.32.16-PM.png",
                    "filesize": 0,
                    "url": "http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-18-at-12.32.16-PM.png",
                    "link": "http://localhost:8000/portrait-grid/test-grid/screen-shot-2019-10-18-at-12-32-16-pm/",
                    "alt": "",
                    "author": "1",
                    "description": "",
                    "caption": "",
                    "name": "screen-shot-2019-10-18-at-12-32-16-pm",
                    "status": "inherit",
                    "uploaded_to": 17,
                    "date": "2019-12-08 01:48:02",
                    "modified": "2019-12-08 01:48:02",
                    "menu_order": 0,
                    "mime_type": "image/png",
                    "type": "image",
                    "subtype": "png",
                    "icon": "http://localhost:8000/wp-includes/images/media/default.png",
                    "width": 1351,
                    "height": 724,
                    "sizes": {
                        "thumbnail": "http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-18-at-12.32.16-PM-150x150.png",
                        "thumbnail-width": 150,
                        "thumbnail-height": 150,
                        "medium": "http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-18-at-12.32.16-PM-300x161.png",
                        "medium-width": 300,
                        "medium-height": 161,
                        "medium_large": "http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-18-at-12.32.16-PM-768x412.png",
                        "medium_large-width": 768,
                        "medium_large-height": 412,
                        "large": "http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-18-at-12.32.16-PM-1024x549.png",
                        "large-width": 1024,
                        "large-height": 549,
                        "1536x1536": "http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-18-at-12.32.16-PM.png",
                        "1536x1536-width": 1351,
                        "1536x1536-height": 724,
                        "2048x2048": "http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-18-at-12.32.16-PM.png",
                        "2048x2048-width": 1351,
                        "2048x2048-height": 724
                    }
                },
                "tagline": "something"
            },
            ...
        ]
    }
}
```

## Icon Grids

To make a request to get a icon grid, simply make a `GET` request to the following url:

```
GET http://localhost:8000/wp-json/northern-trust/v1/icon-grid/test-grid
```

You should get a response like the following:

```JSON
{
    "success": true,
    "grid": {
        "id": 33,
        "title": "test grid",
        "tiles": [
            {
                "title": "something",
                "icon": false,
                "background_image": false,
                "background_color": "turquoise",
                "content": "<p><img class=\"alignnone size-medium wp-image-19\" src=\"http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-14-at-10.05.09-AM-2-300x188.png\" alt=\"\" width=\"300\" height=\"188\" srcset=\"http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-14-at-10.05.09-AM-2-300x188.png 300w, http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-14-at-10.05.09-AM-2-1024x640.png 1024w, http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-14-at-10.05.09-AM-2-768x480.png 768w, http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-14-at-10.05.09-AM-2-1536x960.png 1536w, http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-14-at-10.05.09-AM-2-2048x1280.png 2048w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></p>\n"
            },
            ...
        ]
    }
}
```

## Events

To make a request to get a events, simply make a `GET` request to the following url:

```
GET http://localhost:8000/wp-json/northern-trust/v1/event/test
```

You should get a response like the following:

```JSON
{
    "success": true,
    "event": {
        "id": 41,
        "title": "test",
        "start_date": "10/12/2019 11:00 am",
        "presentation": [
            {
                "acf_fc_layout": "video",
                "video_url": "https://www.youtube.com/watch?v=nnEeu_1iKS0"
            }
        ],
        "agenda": [
            {
                "acf_fc_layout": "wysiwyg",
                "content": "<p>jakHDLKAJHSFLK</p>\n"
            }
        ]
    }
}
```

To make a request to get all published events, simply make a `GET` request to the following url:

```
GET http://localhost:8000/wp-json/northern-trust/v1/events
```

You should get a response like the following:

```JSON
{
    "success": true,
    "events": [
        {
            "id": 71,
            "title": "Event 3",
            "start_date": "25/01/2020 12:00 am",
            "presentation": [
                {
                    "acf_fc_layout": "video",
                    "video_url": "https://www.youtube.com/watch?v=aXH-QsPTeEI"
                }
            ],
            "agenda": [
                {
                    "acf_fc_layout": "wysiwyg",
                    "content": "<p>Event 3 agenda!</p>\n"
                }
            ]
        },
        {
            "id": 70,
            "title": "Event 2",
            "start_date": "08/01/2020 12:00 am",
            "presentation": [
                {
                    "acf_fc_layout": "video",
                    "video_url": "https://www.youtube.com/watch?v=aXH-QsPTeEI"
                }
            ],
            "agenda": [
                {
                    "acf_fc_layout": "wysiwyg",
                    "content": "<p>Event 2 agenda&#8230;. </p>\n"
                }
            ]
        },
        {
            "id": 41,
            "title": "Event",
            "start_date": "10/12/2019 11:00 am",
            "presentation": [
                {
                    "acf_fc_layout": "video",
                    "video_url": "https://www.youtube.com/watch?v=nnEeu_1iKS0"
                }
            ],
            "agenda": [
                {
                    "acf_fc_layout": "wysiwyg",
                    "content": "<p>Event 1 agenda&#8230;</p>\n"
                }
            ]
        }
    ]
}
```

## Maps

To make a request to get a maps, simply make a `GET` request to the following url:

```
GET http://localhost:8000/wp-json/torque-map/v1/map/40
```

You should get a response like the following:

```JSON
{
    "success": true,
    "api_key": "",
    "map_details": {
        "id": 40,
        "title": "Some map",
        "center": "400 W demng pl, chicago IL 60614",
        "zoom": "",
        "center_marker": {
            "url": "http://localhost:8000/wp-content/uploads/2019/12/Screen-Shot-2019-10-18-at-12.32.16-PM.png",
            "size": "",
            "infowindow": ""
        }
    },
    "map_styles": null,
    "pois": [
        {
            "name": "dining",
            "keyword": "dining",
            "marker": {
                "url": "",
                "size": ""
            }
        },
        {
            "name": "shopping",
            "keyword": "shopping",
            "marker": {
                "url": "",
                "size": ""
            }
        },
        {
            "name": "Transportation",
            "keyword": "transportation",
            "marker": {
                "url": "",
                "size": ""
            }
        }
    ],
    "pois_title": "section title",
    "pois_location": "top",
    "display_poi_list": false
}
```
