# GitHub Status Widget

Shows GitHub platform status with a breakdown of individual service components.

## Configuration

```yaml
- $include: widgets/github-status/github-status.yml
```

## Features

- Overall GitHub status indicator
- Individual component status with color-coded indicators
- Service component breakdown
- Real-time updates every 5 minutes
- Internet access to `www.githubstatus.com`

## Screenshot

![GitHub Status](./github-status-screenshot.png)

## Customization

To customize the cache duration or title:

```yaml
- type: custom-api
  title: GitHub Status (With Components)
  cache: 10m  # Change duration as needed
  url: https://www.githubstatus.com/api/v2/summary.json
  template: |
    # ... template content ...
```
