---
title:  Парламентарни избори Октомври 2022 - преференциален вот по партия
date: '2022-10-27T00:00:00'
description: Графики на преференциалния вот на парламентарните избори.
featured_image: /pages/democracy/elections.png
author: nikola.tulechki
lang: bg
---

Тези инфографики показват разпределението на преференциалния вот за всяка партия на избора на 02.10.2022.

Всеки ред представлява кандидатската листа в даден избирателен район.
Всеки кръг е отделен кандидат, и редът им е същия като реда на кандидатите в листата.
Колкото по-голям е кръгът, толкова повече преференции е получил съответния кандидат.
Кръговете не са пропорционални от партия на партия.

Графиките са интерактивни. 
Щракване с мишката върху отделен кръг показва преференциите на кандидата секция по секция, 
както и тяхното отношение към общия вот за партията в секцията.
 
## КП ГЕРБ - СДС
```json:vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "КП ГЕРБ СДС  - Разпределение на преференициалния вот - 02.10.2022",
  "data": {
    "url": "https://raw.githubusercontent.com/nikolatulechki/semanticElections/master/analysis/pref-viz/gerb_2022.csv"
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
    "y": {"field": "mir_norm", "type": "ordinal", "axis": {"title": "МИР"}},
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
  "config": {"legend": {"disable": true}}
}
```

## КП Продължаваме Промяната
```json:vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "ПП ПП  - Разпределение на преференициалния вот - 02.10.2022",
  "data": {
    "url": "https://raw.githubusercontent.com/nikolatulechki/semanticElections/master/analysis/pref-viz/pp_2022.csv"
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
    "y": {"field": "mir_norm", "type": "ordinal", "axis": {"title": "МИР"}},
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
  "config": {"legend": {"disable": true}}
}
```

## ПП ДПС
```json:vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "ДПС  - Разпределение на преференициалния вот - 02.10.2022",
  "data": {
    "url": "https://raw.githubusercontent.com/nikolatulechki/semanticElections/master/analysis/pref-viz/dps_2022.csv"
  },
  "width": 900,
  "height": 900,
  "mark": {
    "type": "circle",
    "opacity": 0.8,
    "stroke": "black",
    "strokeWidth": 1,
    "color": "#0d518898"
  },
  "encoding": {
    "x": {
      "field": "cand_number",
      "type": "ordinal",
      "axis": {"grid": false, "title": "Кандидат номер"}
    },
    "y": {"field": "mir_norm", "type": "ordinal", "axis": {"title": "МИР"}},
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
  "config": {"legend": {"disable": true}}
}
```

## ПП Възраждане
```json:vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Възраждане  - Разпределение на преференициалния вот - 02.10.2022",
  "data": {
    "url": "https://raw.githubusercontent.com/nikolatulechki/semanticElections/master/analysis/pref-viz/vuz_2022.csv"
  },
  "width": 900,
  "height": 900,
  "mark": {
    "type": "circle",
    "opacity": 0.8,
    "stroke": "black",
    "strokeWidth": 1,
    "color": "#7b5804"
  },
  "encoding": {
    "x": {
      "field": "cand_number",
      "type": "ordinal",
      "axis": {"grid": false, "title": "Кандидат номер"}
    },
    "y": {"field": "mir_norm", "type": "ordinal", "axis": {"title": "МИР"}},
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
  "config": {"legend": {"disable": true}}
}
```

## KП БСП За България
```json:vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "БСП  - Разпределение на преференициалния вот - 02.10.2022",
  "data": {
    "url": "https://raw.githubusercontent.com/nikolatulechki/semanticElections/master/analysis/pref-viz/bsp_2022.csv"
  },
  "width": 900,
  "height": 900,
  "mark": {
    "type": "circle",
    "opacity": 0.8,
    "stroke": "black",
    "strokeWidth": 1,
    "color": "#BB3214"
  },
  "encoding": {
    "x": {
      "field": "cand_number",
      "type": "ordinal",
      "axis": {"grid": false, "title": "Кандидат номер"}
    },
    "y": {"field": "mir_norm", "type": "ordinal", "axis": {"title": "МИР"}},
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
  "config": {"legend": {"disable": true}}
}
```

## KП Демократична България
```json:vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "ДБ  - Разпределение на преференициалния вот - 02.10.2022",
  "data": {
    "url": "https://raw.githubusercontent.com/nikolatulechki/semanticElections/master/analysis/pref-viz/db_2022.csv"
  },
  "width": 900,
  "height": 900,
  "mark": {
    "type": "circle",
    "opacity": 0.8,
    "stroke": "black",
    "strokeWidth": 1,
    "color": "#DD06F4"
  },
  "encoding": {
    "x": {
      "field": "cand_number",
      "type": "ordinal",
      "axis": {"grid": false, "title": "Кандидат номер"}
    },
    "y": {"field": "mir_norm", "type": "ordinal", "axis": {"title": "МИР"}},
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
  "config": {"legend": {"disable": true}}
}
```

## ПП Български Възход
```json:vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "БВ  - Разпределение на преференициалния вот - 02.10.2022",
  "data": {
    "url": "https://raw.githubusercontent.com/nikolatulechki/semanticElections/master/analysis/pref-viz/bv_2022.csv"
  },
  "width": 900,
  "height": 900,
  "mark": {
    "type": "circle",
    "opacity": 0.8,
    "stroke": "black",
    "strokeWidth": 1,
    "color": "#770C03"
  },
  "encoding": {
    "x": {
      "field": "cand_number",
      "type": "ordinal",
      "axis": {"grid": false, "title": "Кандидат номер"}
    },
    "y": {"field": "mir_norm", "type": "ordinal", "axis": {"title": "МИР"}},
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
  "config": {"legend": {"disable": true}}
}
```

<div className="chart-container">
  <div id="vis_2022_bv"></div>
</div>

Графиките и производните им данни могат да се използват съгласно условията на отворения лиценз [CC-BY](https://creativecommons.org/licenses/by/2.0/).
