---
title:  Парламентарни избори - преференциален вот по партия 
date: '2022-03-19T00:00:00'
description: Графики на преференциалния вот на парламентарните избори.
featured_image: /pages/democracy/elections.png
author: nikola.tulechki
---

# Ноември 2021

## КП Продължаваме Промяната

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "ПП ПП  - Разпределение на преференициалния вот - 14.11.2021",
  "data": {
    "url": "https://raw.githubusercontent.com/nikolatulechki/semanticElections/master/analysis/pref-viz/pp_2021_11.csv"
  },
  "width": 900,
  "height": 900,
  "mark": {
    "type": "circle",
    "opacity": 0.8,
    "stroke": "black",
    "strokeWidth": 1,
    "color": "#1e0985"
  },
  "encoding": {
    "x": {
      "field": "cand_number",
      "type": "ordinal",
      "axis": {"grid": false, "title": "Кандидат номер"}
    },
    "y": {"field": "mir_norm", "type": "ordinal", "axis": {"title": "МИР"} },
    "size": {
      "field": "pref_votes",
      "type": "quantitative",
      "scale": {"rangeMax": 5000}
    },
    "tooltip": [
      {"field": "mir_norm", "type": "ordinal", "title": "МИР"},
      {"field": "cand_number", "type": "ordinal", "title": "Номер"},
      {"field": "name", "type": "nominal", "title": "Кандидат"},
      {"field": "pref_votes", "type": "quantitative", "title": "Преференции"}
    ],
    "href": {"field": "link", "type": "nominal"}
  },
  "config": {"legend": {"disable": true} },
}
```

# КП ГЕРБ - СДС

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "ГЕРБ  - Разпределение на преференициалния вот - 14.11.2021",
  "data": {
    "url": "https://raw.githubusercontent.com/nikolatulechki/semanticElections/master/analysis/pref-viz/gerb_2021_11.csv"
  },
  "width": 900,
  "height": 900,
  "mark": {
    "type": "circle",
    "opacity": 0.8,
    "stroke": "black",
    "strokeWidth": 1,
    "color": "#2c92e6"
  },
  "encoding": {
    "x": {
      "field": "cand_number",
      "type": "ordinal",
      "axis": {"grid": false, "title": "Кандидат номер"}
    },
    "y": {"field": "mir_norm", "type": "ordinal", "axis": {"title": "МИР"} },
    "size": {
      "field": "pref_votes",
      "type": "quantitative",
      "scale": {"rangeMax": 5000}
    },
    "tooltip": [
      {"field": "mir_norm", "type": "ordinal", "title": "МИР"},
      {"field": "cand_number", "type": "ordinal", "title": "Номер"},
      {"field": "name", "type": "nominal", "title": "Кандидат"},
      {"field": "pref_votes", "type": "quantitative", "title": "Преференции"}
    ],
    "href": {"field": "link", "type": "nominal"}
  },
  "config": {"legend": {"disable": true} },
}
```