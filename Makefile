.PHONY: new-post dev build preview clean drafts help

# Default target
help:
	@echo "Astro Blog Management Commands:"
	@echo ""
	@echo "  make new-post TITLE='Post Title'  - Create a new blog post"
	@echo "  make dev                          - Start development server"
	@echo "  make build                        - Build for production"
	@echo "  make preview                      - Preview production build"
	@echo "  make clean                        - Clean build files"
	@echo "  make drafts                       - List all draft posts"
	@echo ""
	@echo "Examples:"
	@echo "  make new-post TITLE='My Amazing Post'"
	@echo "  make dev"

# Create a new post
new-post:
ifndef TITLE
	$(error TITLE is required. Usage: make new-post TITLE='Post Title')
endif
	@echo "Creating new post: $(TITLE)"
	@node scripts/new-post.js "$(TITLE)"

# Start development server
dev:
	@echo "Starting Astro development server..."
	@npm run dev

# Build for production
build:
	@echo "Building Astro site..."
	@npm run build

# Preview production build
preview:
	@echo "Previewing production build..."
	@npm run preview

# Clean build files
clean:
	@echo "Cleaning build files..."
	@rm -rf dist/ .astro/

# List draft posts
drafts:
	@echo "Draft posts:"
	@npm run drafts 