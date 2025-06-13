#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Get title from command line arguments
const title = process.argv.slice(2).join(' ');

if (!title) {
  console.error('❌ Error: Post title is required');
  console.log('Usage: node scripts/new-post.js "Your Post Title"');
  console.log('Example: node scripts/new-post.js "My Amazing Blog Post"');
  process.exit(1);
}

// Create slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .trim();

// Get current date in MM-DD-YYYY format
const now = new Date();
const createdAt = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}-${now.getFullYear()}`;

// Create post content with proper frontmatter
const postContent = `---
title: "${title}"
description: ""
createdAt: ${createdAt}
draft: true
tags:
  - blog
---

# ${title}

Write your content here...

## Heading 2

Add your thoughts, ideas, and insights.

## Tips

- Remember to add a description for SEO
- Update the tags to match your content
- Set draft: false when ready to publish
- Replace the default image with a relevant one
`;

// Create the file path
const postsDir = path.join(rootDir, 'src', 'content', 'posts');
const filePath = path.join(postsDir, `${slug}.mdx`);

// Check if file already exists
if (fs.existsSync(filePath)) {
  console.error(`❌ Error: Post "${slug}.mdx" already exists`);
  process.exit(1);
}

// Ensure posts directory exists
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// Write the file
fs.writeFileSync(filePath, postContent);

console.log('✅ Post created successfully!');
console.log(`📝 Title: ${title}`);
console.log(`📂 File: src/content/posts/${slug}.mdx`);
console.log(`🗓️  Date: ${createdAt}`);
console.log('');
console.log('Next steps:');
console.log('1. Add your content to the post');
console.log('2. Update the description and tags');
console.log('3. Set draft: false when ready to publish');
console.log('4. Run "npm run dev" to preview');
console.log(`5. Edit: code src/content/posts/${slug}.mdx`); 