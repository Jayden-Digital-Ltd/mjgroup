# MJ Group redesign package

This is a fast static redesign concept for `mjgroup.nz`.

## Included pages

- `index.html` - group home page
- `mj-home.html` - MJ Home landing page
- `mj-living.html` - MJ Living landing page
- `mj-commercial.html` - MJ Commercial landing page
- `mj-asset.html` - MJ Asset landing page
- `mj-healthcare.html` - MJ Healthcare landing page
- `partnerships.html` - scholarships, research and future-focus landing page
- `contact.html` - shared enquiry page

## Implementation notes

- Built as plain HTML, CSS and JavaScript for speed.
- Uses local image assets in `assets/images/` instead of generic remote stock images.
- MJ Home, MJ Living and MJ Commercial use actual public imagery downloaded from their brand websites.
- MJ Asset's site was protected by a Cloudflare challenge during scraping; the page now uses a generated Māori property-services hero plus reachable MJ Asset public icons.
- Three Māori/community-focused images were generated with the built-in image tool and saved into `assets/images/`.
- Enquiry forms open an email draft to `enquiries@mjgroup.nz`.
- Existing external company routes are preserved for MJ Home, MJ Living, MJ Commercial and MJ Asset.

## Generated image prompts

- Māori whānau and property professional outside a modern New Zealand home.
- Māori property services professionals inspecting a modern commercial building.
- Māori healthcare and community professionals in a welcoming clinic space.

## Local preview

Run a static server from this folder, then open `index.html`.
