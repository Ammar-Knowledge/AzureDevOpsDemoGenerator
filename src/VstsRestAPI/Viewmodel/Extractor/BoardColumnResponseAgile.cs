﻿using Newtonsoft.Json;
using System.Collections.Generic;
namespace VstsRestAPI.Viewmodel.Extractor
{
    public class BoardColumnResponseAgile
    {
        public class StateMappings
        {
            [JsonProperty(PropertyName = "User Story")]
            public string UserStory { get; set; }
            [JsonProperty(PropertyName = "Bug")]
            public string bug { get; set; }
        }

        public class Value
        {
            public string id { get; set; }
            public string name { get; set; }
            public int itemLimit { get; set; }
            public StateMappings stateMappings { get; set; }
            public string columnType { get; set; }
            public bool? isSplit { get; set; }
            public string description { get; set; }
        }

        public class ColumnResponse
        {
            public int count { get; set; }
            public List<Value> value { get; set; }
        }
    }
}
