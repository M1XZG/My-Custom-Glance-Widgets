# Custom Glance Widgets

This directory contains custom widget YAML files organized by widget. Each widget directory contains the YAML configuration and optional documentation and screenshots.

## Structure

Each widget is organized in its own subdirectory:
```
widgets/
├── bambu-labs-status/
│   ├── bambu-labs-status.yml
│   ├── README.md (optional)
│   └── screenshots/ (optional)
├── claude-status/
│   ├── claude-status.yml
│   ├── README.md (optional)
│   └── screenshots/ (optional)
├── github-status/
│   ├── github-status.yml
│   ├── README.md (optional)
│   └── screenshots/ (optional)
├── vrchat-status/
│   ├── vrchat-status.yml
│   ├── README.md (optional)
│   └── screenshots/ (optional)
└── README.md
```

## Adding Screenshots

To add screenshots for each widget:

1. Create a `screenshots/` directory in the widget's subdirectory
2. Add PNG/JPG images with descriptive names (e.g., `widget-overview.png`, `status-example.png`)
3. Update the widget's `README.md` (in the widget subdirectory) to reference the screenshots:

```markdown
## Screenshots

### Overall Status
![Claude Status Overview](./screenshots/claude-status-overview.png)

### Component Details
![Claude Status Components](./screenshots/claude-status-components.png)
```

## How to Use These Widgets

### Method 1: Include in Your Configuration

To use these custom widgets in your Glance dashboard, use the `$include` directive in your Glance configuration YAML files:

```yaml
- type: group
  widgets:
    - $include: widgets/claude-status/claude-status.yml
    - $include: widgets/github-status/github-status.yml
    - $include: widgets/vrchat-status/vrchat-status.yml
    - $include: widgets/bambu-labs-status/bambu-labs-status.yml
```

### Method 2: Copy to Your Config Directory

Alternatively, copy the desired widget subdirectories to your Glance `widgets` configuration directory and reference them in your page configurations.

## Widget Directory Details

### bambu-labs-status/

Displays real-time status of Bambu Lab services and components with color-coded indicators.

**Configuration:**
```yaml
- $include: widgets/bambu-labs-status/bambu-labs-status.yml
```

**Requirements:**
- Internet access to `status.bambulab.com`
- Optional: Customize cache duration (default: 5m)

**Features:**
- Overall service status indicator
- Component status breakdown with color-coded status indicators
- Real-time updates every 5 minutes

---

### claude-status/

Shows Claude service status with component grouping and status breakdown.

**Configuration:**
```yaml
- $include: widgets/claude-status/claude-status.yml
```

**Requirements:**
- Internet access to `status.claude.com`
- Optional: Customize cache duration (default: 2m)

**Features:**
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

---

### github-status/

Shows GitHub platform status with a breakdown of individual service components.

**Configuration:**
```yaml
- $include: widgets/github-status/github-status.yml
```

**Requirements:**
- Internet access to `www.githubstatus.com`
- Optional: Customize cache duration (default: 5m)

**Features:**
- Overall GitHub status indicator
- Individual component status with color-coded indicators
- Service component breakdown
- Real-time updates every 5 minutes

---

### vrchat-status/

Monitors VRChat service status with component grouping and status breakdown.

**Configuration:**
```yaml
- $include: widgets/vrchat-status/vrchat-status.yml
```

**Requirements:**
- Internet access to `status.vrchat.com`
- Optional: Customize cache duration (default: 2m)

**Features:**
- Overall VRChat service status
- Grouped components with hierarchical display
- Individual component status with color-coded indicators
- Supports maintenance status tracking
- Real-time updates every 2 minutes

---

## Environment Variables

These widgets use the standard Glance custom-api widget type and don't require any environment variables. However, ensure your Glance instance has internet access to fetch the status data from the respective APIs.

## Customization

To customize any widget (e.g., change cache duration or title), copy the YAML content directly into your configuration and modify the `cache`, `title`, or `template` properties as needed.

Example: Adjusting cache duration
```yaml
- type: custom-api
  title: Claude Status (With Components)
  cache: 5m  # Change from 2m to 5m
  url: https://status.claude.com/api/v2/summary.json
  template: |
    # ... template content ...
```

## Status Indicators

All widgets use a consistent color scheme:
- **Green (Positive)**: All Systems Operational
- **Yellow (Highlight)**: Minor Issues / Degraded Performance
- **Red (Negative)**: Major Outage / Partial Outage / Critical Issues
- **Gray (Muted)**: Under Maintenance / Offline

## Reference

- [Glance Documentation](https://github.com/glanceapp/glance)
- [Glance Widget Types](https://github.com/glanceapp/glance/blob/main/docs)
- [Custom API Widget](https://github.com/glanceapp/glance#custom-api-widget)
- [Statuspage API](https://developer.statuspage.io/)
