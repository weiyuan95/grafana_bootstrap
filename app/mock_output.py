search_endpoint_array = [
    'foo',
    'bar',
    'baz'
]

search_endpoint_array2 = [
    'foo2',
    'bar2',
    'baz2'
]

search_endpoint_map = [
    {
        "text": "upper_25",
        "value": 1
    },
    {
        "text": "upper_75",
        "value": 2
    }
]

query_fake_data = [
    {
        "columns": [
            {
                "type": "string",
                "text": "Batch Id"
            },
            {
                "type": "number",
                "text": "Successfully Processed"
            },
            {
                "type": "number",
                "text": "Suppressed due to P1 missing"
            },
            {
                "type": "number",
                "text": "Files missing in LZ"
            },
            {
                "type": "number",
                "text": "Failed at A"
            }
        ],
        "rows": [
            [
                {"value": "00112222_0000_AA_SG_batch", "color": "none"},
                {"value": 33, "color": "none"},
                {"value": 1, "color": "red"},
                {"value": 0, "color": "green"},
                {"value": 0, "color": "green"},
            ],
            [
                {"value": "00112222_0000_BB_SG_batch", "color": "none"},
                {"value": 330, "color": "none"},
                {"value": 0, "color": "green"},
                {"value": 72, "color": "red"},
                {"value": 0, "color": "green"},
            ],
            [
                {"value": "00112222_0000_CC_SG_batch", "color": "none"},
                {"value": 490, "color": "none"},
                {"value": 0, "color": "green"},
                {"value": 0, "color": "green"},
                {"value": 2, "color": "red"},
            ]
        ]
    }
]

