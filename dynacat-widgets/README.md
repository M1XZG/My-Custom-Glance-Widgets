# Dynacat Widget Candidates

These packages use the directory and file format required by the
[Dynawidgets contribution guide](https://dynacat.artur.zone/#contributing).
They are staged here for review before any upstream pull request is opened.

## Candidates

| Widget | Purpose | Origin |
| --- | --- | --- |
| `statuspage-components` | Generic Atlassian Statuspage health and component display | Consolidates the GitHub, Claude, Bambu Lab, and VRChat widgets |
| `immich-server-stats` | Immich photo, video, storage, and disk-capacity statistics | Converts the advanced Immich statistics widget |
| `portainer-endpoint-summary` | Portainer endpoint connectivity and Docker resource counts | Generalizes the per-host Portainer status widgets |
| `portainer-container-list` | Remote container status through the authenticated Portainer API | Generalizes the per-host remote Docker container widgets |

The FUR/HELP Open Collective and 3D-printer storage widgets are intentionally
excluded. The private remote Docker templates remain unchanged; the candidate
version removes their host-specific names, descriptions, icons, and endpoint
identifiers. The custom weather and Twitch widgets are not candidates because
Dynawidgets or Dynacat already provide overlapping functionality.

## Local validation

Run the same structural checks required by the upstream repository:

```bash
npm install
npm run validate
```

Each package under `widgets/` contains:

- `template.txt`, containing only the Dynawidgets template and optional
  `required` block.
- `widget.md`, containing configuration and setup instructions.
- `meta.yml`, containing the catalog title, description, and author.
