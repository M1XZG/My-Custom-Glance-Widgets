# Statuspage Components

Displays the overall status and individual components from services powered by
Atlassian Statuspage. The widget handles grouped and ungrouped components.

## Configuration

```yaml
- type: dynawidgets
  widget: statuspage-components
  title: GitHub Status
  url: https://www.githubstatus.com/api/v2/summary.json
  cache: 5m
  options:
    service-name: GitHub
    status-url: https://www.githubstatus.com/
    show-components: true
```

Replace the URL and options to monitor another public Statuspage service:

```yaml
- type: dynawidgets
  widget: statuspage-components
  title: Claude Status
  url: https://status.claude.com/api/v2/summary.json
  cache: 2m
  options:
    service-name: Claude
    status-url: https://status.claude.com/
```

Other compatible examples include:

| Service | Summary endpoint | Status page |
| --- | --- | --- |
| Bambu Lab | `https://status.bambulab.com/api/v2/summary.json` | `https://status.bambulab.com/` |
| VRChat | `https://status.vrchat.com/api/v2/summary.json` | `https://status.vrchat.com/` |

Set `show-components: false` to display only the overall status.
