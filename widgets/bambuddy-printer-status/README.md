# Bambuddy Printer Status Widget

Displays live status for one printer monitored by
[Bambuddy](https://github.com/maziggy/bambuddy).

## Configuration

```yaml
- $include: widgets/bambuddy-printer-status/bambuddy-printer-status.yml
```

Add the Bambuddy base URL, printer ID, and a read-only API key to the dashboard
environment:

```dotenv
BAMBUDDY_URL=http://bambuddy.example:8000
BAMBUDDY_PRINTER_ID=1
BAMBUDDY_READONLY=bb_your_read_only_key
```

The key only needs Bambuddy's read-status scope. The widget performs a cached
GET request to `/api/v1/printers/{id}/status` and does not send printer-control
commands.

## Screenshot

![Bambuddy Printer Status](./bambuddy-printer-status-screenshot.png)
