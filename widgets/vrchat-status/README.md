# VRChat Status Widget

Monitors VRChat service status with component grouping and status breakdown.

## Configuration

```yaml
- $include: widgets/vrchat-status/vrchat-status.yml
```

## Features

- Overall VRChat service status
- Grouped components with hierarchical display
- Individual component status with color-coded indicators
- Supports maintenance status tracking
- Real-time updates every 2 minutes
- Internet access to `status.vrchat.com`

## Screenshot

![VRChat Status](./vrchat-status-screenshot.png)

## Customization

To customize the cache duration or title:

```yaml
- type: custom-api
  title: VRChat Status (With Components)
  cache: 5m  # Change duration as needed
  url: https://status.vrchat.com/api/v2/summary.json
  template: |
    # ... template content ...
```
