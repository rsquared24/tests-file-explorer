# File Explorer Component

A simple, interactive file explorer component built with JavaScript/React that renders a nested data structure as a collapsible tree view.

## 🚀 Features

- **Hierarchical Display**: Renders files and folders in a nested tree structure
- **Interactive Navigation**: Click to expand/collapse folders
- **Visual Indicators**: Clear icons for folders (▶/▼) and files (📄)
- **Default State**: All folders start collapsed for clean initial view
- **Responsive Design**: Clean, intuitive interface

## 📋 Requirements

### Functional Requirements

1. **Render nested file structure** from provided data
2. **Toggle folder states** on click (expand/collapse)
3. **Display appropriate icons** for different states and file types
4. **Start with all folders collapsed** by default

### Technical Requirements

- JavaScript/React implementation
- Handle nested data structures
- Maintain component state for folder expansion
- Responsive click handlers

## 📊 Data Structure

The component expects data in the following format:

```javascript
const data = [
  {
    type: "folder",
    name: "src",
    children: [
      {
        type: "folder", 
        name: "components",
        children: [
          { type: "file", name: "Button.js" },
          { type: "file", name: "Card.js" }
        ]
      },
      { type: "file", name: "index.js" }
    ]
  },
  {
    type: "folder",
    name: "public", 
    children: [
      { type: "file", name: "index.html" }
    ]
  }
];
```

### Data Schema

| Property | Type | Description |
|----------|------|-------------|
| `type` | string | Either "folder" or "file" |
| `name` | string | Display name of the item |
| `children` | array | Child items (only for folders) |

## 🎯 Expected Behavior

### Initial State (All Collapsed)
```
▶ src
▶ public
```

### After Clicking "src"
```
▼ src
  ▶ components
  📄 index.js
▶ public
```

### After Clicking "components"
```
▼ src
  ▼ components
    📄 Button.js
    📄 Card.js
  📄 index.js
▶ public
```

## 🎨 Visual Design

### Icons
- **Collapsed Folder**: ▶ (right arrow)
- **Expanded Folder**: ▼ (down arrow) 
- **File**: 📄 (document icon)

### Layout
- Nested indentation for hierarchy
- Clear visual separation between levels
- Consistent spacing and alignment

## 🛠️ Implementation Guidelines

### Core Components
- Main FileExplorer component
- Recursive rendering for nested structures
- State management for folder expansion
- Click event handlers

### Key Considerations
- **Performance**: Efficient re-rendering of large trees
- **Accessibility**: Keyboard navigation support
- **Scalability**: Handle deeply nested structures
- **State Management**: Track expansion state for each folder

## 🚦 Getting Started

1. Create the main FileExplorer component
2. Implement recursive rendering logic
3. Add state management for folder expansion
4. Handle click events for toggle functionality
5. Apply styling and icons
6. Test with provided data structure

## 📝 Development Notes

- Use React hooks (useState) for state management
- Implement recursive component rendering
- Consider using unique keys for list items
- Handle edge cases (empty folders, deep nesting)
- Optimize for performance with large datasets

## 🎯 Success Criteria

- ✅ Correctly renders nested file structure
- ✅ Folders toggle open/closed on click
- ✅ Appropriate icons display for each state
- ✅ All folders start collapsed
- ✅ Smooth, intuitive user interaction
- ✅ Clean, readable code structure

---

*This component demonstrates fundamental React concepts including state management, recursive rendering, and event handling while creating a practical, user-friendly interface.*