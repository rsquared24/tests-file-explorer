import { render, screen, fireEvent } from '@testing-library/react';
import App, { Factory, File, Folder } from './App';

describe("All", () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText('src')).toBeInTheDocument();
    expect(screen.getByText('public')).toBeInTheDocument();
  });

  test('Factory renders Folder and File correctly', () => {
    // Folder
    const folderItems = [
      { type: 'file', name: 'test.js' }
    ];
    const { rerender } = render(<Factory type="folder" name="my-folder" items={folderItems} />);
    expect(screen.getByText('my-folder')).toBeInTheDocument();

    // File
    rerender(<Factory type="file" name="my-file.js" items={undefined} />);
    expect(screen.getByText('my-file.js')).toBeInTheDocument();
  });

  test('Folder toggles open state and renders children', () => {
    const items = [
      { type: 'file', name: 'child.js' }
    ];
    render(<Folder name="parent-folder" items={items} />);
    // Initially closed, child not rendered
    expect(screen.queryByText('child.js')).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(screen.getByText('parent-folder'));
    expect(screen.getByText('child.js')).toBeInTheDocument();
  });

  test('File renders file name', () => {
    render(<File name="example.txt" />);
    expect(screen.getByText('example.txt')).toBeInTheDocument();
  });
});
