# Bar Assistant Homepage

Landing and marketing page of https://barassistant.app/

Built with [Eleventy (11ty)](https://www.11ty.dev/) static site generator.

## Development

### Prerequisites

- Docker and Docker Compose

### Running Locally

Build and start the container:

```bash
docker compose up -d --build
```

The site will be available at http://localhost:8092

To stop the container:

```bash
docker compose down
```

### Project Structure

```
.
├── src/                      # Source files
│   ├── _includes/           # Templates and components
│   │   ├── layouts/         # Page layouts
│   │   │   └── base.njk     # Base HTML layout
│   │   └── components/      # Reusable components
│   │       ├── header.njk   # Site header
│   │       ├── footer.njk   # Site footer
│   │       └── background.njk # Dynamic background
│   ├── _data/               # Data files (JSON)
│   │   ├── faq.json         # FAQ items
│   │   ├── plans.json       # Pricing plans
│   │   └── extraFeatures.json # Feature list
│   ├── index.njk            # Home page
│   ├── privacy.njk          # Privacy policy
│   └── terms.njk            # Terms of service
├── public/                   # Static assets
│   ├── css/                 # Stylesheets
│   ├── img/                 # Images
│   └── *.json               # Schema files
├── _site/                    # Build output (generated, not in git)
├── .eleventy.js             # 11ty configuration
├── Dockerfile               # Multi-stage Docker build
├── docker-compose.yml       # Docker Compose config
└── package.json             # Node.js dependencies
```

## Building

The Docker build process:

1. **Builder stage**: Uses Node.js Alpine to install dependencies and run 11ty build
2. **Production stage**: Uses nginx Alpine to serve the static files

The build automatically:
- Installs npm dependencies
- Runs the 11ty build process
- Copies the generated `_site/` directory to nginx
- Exposes the site on port 8092

## Making Changes

### Updating Content

**FAQ, Plans, or Extra Features**: Edit the JSON files in `src/_data/`:
- `src/_data/faq.json` - FAQ items
- `src/_data/plans.json` - Pricing plans
- `src/_data/extraFeatures.json` - Additional features

**Pages**: Edit the `.njk` files in `src/`:
- `src/index.njk` - Home page
- `src/privacy.njk` - Privacy policy
- `src/terms.njk` - Terms of service

**Components**: Edit files in `src/_includes/components/`:
- `src/_includes/components/header.njk` - Site header
- `src/_includes/components/footer.njk` - Site footer

After making changes, rebuild the container:

```bash
docker compose up -d --build
```

### Adding New Pages

1. Create a new `.njk` file in `src/`
2. Add front matter with layout and metadata
3. Write your content
4. Rebuild the container

Example:

```njk
---
layout: layouts/base.njk
title: My New Page · Bar Assistant
description: Page description
showFullNav: true
---

<div class="page-content">
    <h1>My New Page</h1>
    <p>Content goes here</p>
</div>
```

### Updating Styles or Images

- **CSS**: Edit files in `public/css/`
- **Images**: Add/replace files in `public/img/`

These are passed through to the build output automatically.

## Deployment

The built site is served from the `_site/` directory inside the nginx container.

To deploy:

1. Build the Docker image: `docker compose build`
2. Push to your container registry (if using)
3. Deploy the container to your hosting platform

The site runs on port 8092 by default. Update `docker-compose.yml` to change the port mapping.

## Benefits of This Setup

- **No Duplication**: Header, footer, and navigation defined once and reused
- **Data-Driven**: Update features, plans, and FAQ by editing JSON files
- **Maintainable**: Clear separation of content, templates, and static assets
- **Extensible**: Easy to add new pages, blog posts, or dynamic features
- **Containerized**: Consistent builds across development and production
- **Fast**: Static HTML generation with nginx serving

## Troubleshooting

**Container won't start**: Check logs with `docker compose logs`

**Changes not appearing**: Make sure to rebuild with `docker compose up -d --build`

**Port already in use**: Change the port in `docker-compose.yml` from `8092:80` to `<your-port>:80`

---

All Rights Reserved
