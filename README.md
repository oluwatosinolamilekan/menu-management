<p align="center"><a href="#" target="_blank">
    Menu Managment
</a>
</p>

## Overview

The Menu Management API is a simple RESTful API built with Laravel 10 for managing menu. This API allows you to create, read, update, and delete menu. It also includes basic authentication for secure access.


## Minimum system requirements

- PHP >= 8.1
- Laravel 10


## How to run the application
Below are the steps you need to successfully setup and run the application.

- Clone the app from the repository and cd into the root directory of the app

- Run `composer install`
- Copy `.env.example into .env`
- Update DB credentials to match with your db
- Run `php artisan migrate`
- To run quick database generation for menus run `php artisan db:seed` (MenuFactory already implemented in the databaseeder);
- Run `php artisan serve`
- Run `npm  start`
## Features

- Create, read, update, and delete menus.

### REST API's

Realize classic RESTful API's for menus management:

*   `GET /api/menus`
*   `POST /api/menus`
*   `GET /api/menus/{id}`
*   `PUT /api/menus/{id}`
*   `DELETE /api/menus`




## List All Menu
- Endpoint: GET `/api/menu`
- Description: Retrieve a list of all menus.
- Response:

```json
    {
    "data": [
        {
            "id": 1,
            "name": "tempora",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 101,
                    "name": "ullam",
                    "depth": 0,
                    "parent_id": 1,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                },
                {
                    "id": 149,
                    "name": "laboriosam",
                    "depth": 3,
                    "parent_id": 1,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 2,
            "name": "corrupti",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 3,
            "name": "magnam",
            "depth": 3,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 119,
                    "name": "tenetur",
                    "depth": 0,
                    "parent_id": 3,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                },
                {
                    "id": 142,
                    "name": "vel",
                    "depth": 0,
                    "parent_id": 3,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 4,
            "name": "autem",
            "depth": 0,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 145,
                    "name": "est",
                    "depth": 1,
                    "parent_id": 4,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 5,
            "name": "sequi",
            "depth": 0,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 6,
            "name": "incidunt",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 7,
            "name": "commodi",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 8,
            "name": "esse",
            "depth": 0,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 9,
            "name": "eveniet",
            "depth": 0,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 111,
                    "name": "odit",
                    "depth": 1,
                    "parent_id": 9,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 10,
            "name": "aut",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 11,
            "name": "autem",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 171,
                    "name": "odio",
                    "depth": 0,
                    "parent_id": 11,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 12,
            "name": "tempore",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 13,
            "name": "labore",
            "depth": 3,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 14,
            "name": "non",
            "depth": 0,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 15,
            "name": "voluptatem",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 16,
            "name": "hic",
            "depth": 3,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 116,
                    "name": "ipsam",
                    "depth": 1,
                    "parent_id": 16,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 17,
            "name": "rerum",
            "depth": 0,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 18,
            "name": "explicabo",
            "depth": 3,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 19,
            "name": "nisi",
            "depth": 3,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 20,
            "name": "nulla",
            "depth": 3,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 21,
            "name": "non",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 22,
            "name": "velit",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 23,
            "name": "dolor",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 24,
            "name": "sit",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 127,
                    "name": "voluptas",
                    "depth": 0,
                    "parent_id": 24,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 25,
            "name": "sit",
            "depth": 3,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 26,
            "name": "omnis",
            "depth": 0,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 27,
            "name": "dignissimos",
            "depth": 3,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 28,
            "name": "vel",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 29,
            "name": "autem",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 30,
            "name": "distinctio",
            "depth": 3,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 31,
            "name": "fugiat",
            "depth": 0,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 32,
            "name": "voluptas",
            "depth": 3,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 33,
            "name": "ipsum",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 34,
            "name": "qui",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 174,
                    "name": "quis",
                    "depth": 2,
                    "parent_id": 34,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 35,
            "name": "vel",
            "depth": 0,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 36,
            "name": "sint",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 37,
            "name": "dolorem",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 161,
                    "name": "suscipit",
                    "depth": 1,
                    "parent_id": 37,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 38,
            "name": "laborum",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 130,
                    "name": "quia",
                    "depth": 2,
                    "parent_id": 38,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                },
                {
                    "id": 144,
                    "name": "quia",
                    "depth": 3,
                    "parent_id": 38,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                },
                {
                    "id": 173,
                    "name": "fugiat",
                    "depth": 3,
                    "parent_id": 38,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 39,
            "name": "vitae",
            "depth": 0,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 133,
                    "name": "est",
                    "depth": 1,
                    "parent_id": 39,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 40,
            "name": "sapiente",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 41,
            "name": "ab",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 154,
                    "name": "cum",
                    "depth": 1,
                    "parent_id": 41,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 42,
            "name": "officia",
            "depth": 0,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 106,
                    "name": "rerum",
                    "depth": 0,
                    "parent_id": 42,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                },
                {
                    "id": 135,
                    "name": "facere",
                    "depth": 0,
                    "parent_id": 42,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                },
                {
                    "id": 175,
                    "name": "nisi",
                    "depth": 3,
                    "parent_id": 42,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 43,
            "name": "ad",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 44,
            "name": "deleniti",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 45,
            "name": "tempora",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 165,
                    "name": "aut",
                    "depth": 1,
                    "parent_id": 45,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 46,
            "name": "ut",
            "depth": 1,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 47,
            "name": "quibusdam",
            "depth": 3,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 48,
            "name": "quia",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        },
        {
            "id": 49,
            "name": "rerum",
            "depth": 0,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": [
                {
                    "id": 134,
                    "name": "doloremque",
                    "depth": 2,
                    "parent_id": 49,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                },
                {
                    "id": 159,
                    "name": "vitae",
                    "depth": 2,
                    "parent_id": 49,
                    "created_at": "2024-08-21T01:32:11.000000Z",
                    "updated_at": "2024-08-21T01:32:11.000000Z"
                }
            ]
        },
        {
            "id": 50,
            "name": "in",
            "depth": 2,
            "parent_id": null,
            "created_at": "2024-08-21T01:32:11.000000Z",
            "updated_at": "2024-08-21T01:32:11.000000Z",
            "children": []
        }
    ],
    "links": {
        "first": "http://127.0.0.1:8000/api/menus?page=1",
        "last": "http://127.0.0.1:8000/api/menus?page=3",
        "prev": null,
        "next": "http://127.0.0.1:8000/api/menus?page=2"
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 3,
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/menus?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "http://127.0.0.1:8000/api/menus?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/menus?page=3",
                "label": "3",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/menus?page=2",
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "path": "http://127.0.0.1:8000/api/menus",
        "per_page": 50,
        "to": 50,
        "total": 140
    }
}
```


## Create a New menu
- Endpoint: POST `/api/menu`
- Description: Create a new menu.
- Request Body:

```json
    {
  "name": "Dashboard",
  "depth": 1,
  "parent_id": null
}

```

Response:
```json
    {
    "data": {
        "name": "Dashboard",
        "depth": 1,
        "parent_id": null,
        "updated_at": "2024-08-21T14:45:56.000000Z",
        "created_at": "2024-08-21T14:45:56.000000Z",
        "id": 181
    }
}
```

### View a Specific Menu
- Endpoint: POST `/api/menus/{id}`
- Description: Retrieve details of a specific menu by menu ID.
- Response:

```json
    {
    "data": {
        "id": 1,
        "name": "tempora",
        "depth": 2,
        "parent_id": null,
        "created_at": "2024-08-21T01:32:11.000000Z",
        "updated_at": "2024-08-21T01:32:11.000000Z",
        "children": [
            {
                "id": 101,
                "name": "ullam",
                "depth": 0,
                "parent_id": 1,
                "created_at": "2024-08-21T01:32:11.000000Z",
                "updated_at": "2024-08-21T01:32:11.000000Z"
            },
            {
                "id": 149,
                "name": "laboriosam",
                "depth": 3,
                "parent_id": 1,
                "created_at": "2024-08-21T01:32:11.000000Z",
                "updated_at": "2024-08-21T01:32:11.000000Z"
            }
        ]
    }
}

```

## Update a menu
- Endpoint: PUT `/api/menu/{id}`
- Description: Update details of a specific menu by menu ID.
- Request Body:
```json
    {
        "name": "Updated Menu Name",
        "depth": 2,
        "parent_id": 5
        }


```

- Response:
```json
    {
    "data": {
        "id": 1,
        "name": "Updated Menu Name",
        "depth": 2,
        "parent_id": 5,
        "created_at": "2024-08-21T01:32:11.000000Z",
        "updated_at": "2024-08-21T14:43:45.000000Z"
    }
}
```

## Delete a menu
- Endpoint: DELETE `/api/menu/{id}`
- Description: Delete a specific menu by menu ID.
- Response: 204 No Content

