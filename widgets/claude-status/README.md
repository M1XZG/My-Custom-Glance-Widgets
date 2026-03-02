# Claude Status Widget

Shows Claude service status with component grouping and status breakdown.

## Configuration

```yaml
- $include: widgets/claude-status/claude-status.yml
```

## Features

- Overall system status with operational/minor/major/critical indicators
- Grouped and ungrouped component display
- Component status breakdown (Operational, Degraded, Partial Outage, Major Outage, Maintenance)
- Real-time updates every 2 minutes
- Services monitored:
  - claude.ai
  - platform.claude.com (formerly console.anthropic.com)
  - Claude API (api.anthropic.com)
  - Claude Code
  - Claude for Government

## Screenshot

![Claude Status](./claude-status-screenshot.png)

## Customization

To customize the cache duration or title:

```yaml
- type: custom-api
  title: Claude Status (With Components)
  cache: 5m  # Change duration as needed
  url: https://status.claude.com/api/v2/summary.json
  template: |
    # ... template content ...
```
