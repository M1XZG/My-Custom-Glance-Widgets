# Dynacat Widget Candidates

These packages use the directory and file format required by the
[Dynawidgets contribution guide](https://dynacat.artur.zone/#contributing).
They are staged here for review before any upstream pull request is opened.

## Candidates

| Widget | Purpose | Origin |
| --- | --- | --- |
| `github-status-components` | GitHub service health and component status | Converts the GitHub Status widget |
| `claude-status-components` | Claude service health and grouped component status | Converts the Claude Status widget |
| `bambu-lab-status` | Bambu Lab service health and component status | Converts the Bambu Lab Status widget |
| `bambuddy-printer-status` | Live printer state, print progress, layers, remaining time, and temperatures | Uses Bambuddy's read-only printer status API |
| `vrchat-status-components` | VRChat service health and grouped component status | Converts the VRChat Status widget |
| `immich-server-stats` | Immich photo, video, storage, and disk-capacity statistics | Converts the advanced Immich statistics widget |
| `portainer-endpoint-summary` | Portainer endpoint connectivity and Docker resource counts | Generalizes the per-host Portainer status widgets |
| `portainer-container-list` | Remote container status through the authenticated Portainer API | Generalizes the per-host remote Docker container widgets |

The FUR/HELP Open Collective and 3D-printer storage widgets are intentionally
excluded. Bambuddy Printer Status is stored here for personal reuse and is not
an upstream contribution candidate. The private remote Docker templates remain
unchanged; the candidate version removes their host-specific names,
descriptions, icons, and endpoint identifiers. The custom weather and Twitch
widgets are not candidates because Dynawidgets or Dynacat already provide
overlapping functionality.

## Local validation

Run the same structural checks required by the upstream repository:

```bash
npm install
npm run validate
```

Each package under `widgets/` contains a template, setup instructions, and
catalog metadata.
