# Astro Blog Management Guide

## Quick Post Creation 🚀

### Method 1: Using Make (Recommended)
```bash
# Create a new post
make new-post TITLE="My Amazing Blog Post"

# Start development server
make dev

# Build for production
make build
```

### Method 2: Using npm scripts
```bash
# Create a new post
npm run new-post "My Blog Post Title"

# Start development server
npm run dev

# Build and preview
npm run build && npm run preview
```

### Method 3: Using Node directly
```bash
# Create a new post
node scripts/new-post.js "My Blog Post Title"
```

## File Structure

```
src/
├── content/
│   ├── posts/          # All blog posts (.mdx files)
│   ├── projects/       # Project showcase
│   ├── other/          # Other content
│   ├── assets/         # Images and media
│   └── *.json          # Data files (tags, socials, etc.)
├── components/         # Astro components
├── layouts/           # Page layouts
├── pages/             # Astro pages
└── styles/            # CSS files
```

## Post Writing Workflow

1. **Create**: `make new-post TITLE="Your Post Title"`
2. **Edit**: Open `src/content/posts/your-post-title.mdx`
3. **Preview**: `make dev` (available at http://localhost:4321)
4. **Publish**: Set `draft: false` in the post frontmatter
5. **Deploy**: `make build` then deploy the `dist/` folder

## Frontmatter Fields

```yaml
---
title: "Your Post Title"           # Required
description: "SEO description"     # Required for SEO
createdAt: MM-DD-YYYY             # Auto-generated
updatedAt: MM-DD-YYYY             # Optional
draft: true                       # Set to false to publish
tags:                             # Array of tag IDs
  - blog
  - technology
image: "../../assets/image.png"   # Featured image
---
```

## Available Tags

Current tags (defined in `src/content/tags.json`):
- `first`
- `blog`
- `images`
- `design`
- `inspiration`
- `creativity`

To add new tags, edit `src/content/tags.json`:
```json
[
  { "id": "your-new-tag" }
]
```

## Useful Commands

```bash
# Development
make dev                    # Start dev server
make build                  # Build for production
make preview               # Preview production build
make clean                 # Clean build files

# Content Management
make new-post TITLE="..."  # Create new post
make drafts               # List all draft posts
npm run drafts            # Alternative way to list drafts

# Direct npm commands
npm run dev               # Start development
npm run build             # Build site
npm run preview           # Preview build
```

## Tips & Best Practices

### Content Writing
- Always add a meaningful description for SEO
- Use relevant tags from the available list
- Include a featured image when possible
- Write descriptive file names (they become URLs)

### Workflow Tips
- Keep drafts with `draft: true` until ready
- Preview posts locally before publishing
- Use consistent tag naming
- Organize images in `src/content/assets/`

### Development
- Run `make dev` for hot reloading during development
- Use `.mdx` extension for rich content with components
- Images should be relative to the post location

## Image Handling

Place images in `src/content/assets/` and reference them:
```yaml
image: "../../assets/your-image.png"
```

For inline images in posts:
```markdown
![Alt text](../../assets/inline-image.png)
```

## Publishing Checklist

Before setting `draft: false`:
- [ ] Added meaningful title and description
- [ ] Selected appropriate tags
- [ ] Added featured image (if applicable)
- [ ] Proofread content
- [ ] Tested locally with `make dev`
- [ ] Verified images load correctly 