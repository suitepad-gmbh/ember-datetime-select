# ember-datetime-select

Some simple select components to select dates and times from a given range. The
dates and times shown within this range can be configured using cron
expressions.

## Installation

```
ember install ember-datetime-select
```

## Usage

```hbs
{{date-select start=startDate end=endDate cron="0 0 * * 1,2" format="MM-DD-YYYY"}}
```

```hbs
{{time-select date=currentDate cron="*/30 10-17 * * *;0 18 * * *" format="HH:mm"}}
```

```hbs
{{datetime-select start=startDate end=endDate cron="*/30 * * * 1,2" dateFormat="MM-DD-YYYY" timeFormat="HH:mm"}}
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
