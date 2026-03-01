# Custom Glance Widgets

This directory contains custom widget YAML files for the Glance dashboard application.

## How to Use These Widgets

### Method 1: Include in Your Configuration

To use these custom widgets in your Glance dashboard, use the `$include` directive in your Glance configuration YAML files:

```yaml
- type: group
  widgets:
    - $include: widgets/github-status.yml
    - $include: widgets/vrchat-status.yml
    - $include: widgets/bambu-labs-status.yml
```

### Method 2: Copy to Your Config Directory

Alternatively, copy the desired YAML files directly to your Glance `widgets` configuration directory and reference them in your page configurations.

## Widget Files

### bambu-labs-status.yml
Displays real-time status of Bambu Lab services and components with color-coded indicators.

**Configuration:**
```yaml
- $include: widgets/bambu-labs-status.yml
```

**Requirements:**
- Internet access to `status.bambulab.com`
- Optional: Customize cache duration (default: 5m)

---

### github-status.yml
Shows GitHub platform status with a breakdown of individual service components.

**Configuration:**
```yaml
- $include: widgets/github-status.yml
```

**Requirements:**
- Internet access to `www.githubstatus.com`
- Optional: Customize cache duration (default: 5m)

---

### vrchat-status.yml
Monitors VRChat service status with component grouping and status breakdown.

**Configuration:**
```yaml
- $include: widgets/vrchat-status.yml
```

**Requirements:**
- Internet access to `status.vrchat.com`
- Optional: Customize cache duration (default: 2m)

---

## Environment Variables

These widgets use the standard Glance custom-api widget type and don't require any environment variables. However, ensure your Glance instance has internet access to fetch the status data from the respective APIs.

## Customization

To customize any widget (e.g., change cache duration or title), copy the YAML content directly into your configuration and modify the `cache`, `title`, or `template` properties as needed.

## Reference

- [Glance Documentation](https://github.com/glanceapp/glance)
- [Glance Widget Types](https://github.com/glanceapp/glance/blob/main/docs)
- [Custom API Widget](https://github.com/glanceapp/glance#custom-api-widget)
