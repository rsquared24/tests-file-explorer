import { useState } from 'react';
import { Box, Stack, Typography } from "@mui/material";
import { InsertDriveFile as FileIcon, ArrowRight as ArrowRightIcon, ArrowDropDown as ArrowDownIcon } from "@mui/icons-material";
import type { SxProps, Theme } from '@mui/material/styles';

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

interface FactoryProps {
  type: string;
  name: string;
  items: any;
  sx?: SxProps<Theme>;
}
export const Factory = (props: FactoryProps) => {
  const { name, type, items } = props;

  const kvp: Record<string, any> = {
    "folder": <Folder name={name} items={items} />,
    "file": <File name={name} />
  }

  return (
    <Box sx={{ ml: 2 }} >
      {kvp[type]}
    </Box>
  )
}

interface FolderProps {
  name: string;
  items: any;
  sx?: SxProps<Theme>;
}
export const Folder = (props: FolderProps) => {
  const { name, items, sx } = props;
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{ ...sx }}
    >
      <Stack
        direction="row"
        alignItems="center"
        onClick={() => {
          setOpen(!open)
        }}
      >
        {open ? <ArrowDownIcon /> : <ArrowRightIcon />}
        <Typography variant="body1">{name}</Typography>
      </Stack>

      {Boolean(open && items) && items.map((x, idx) => (
        <Factory
          key={idx}
          name={x.name}
          type={x.type}
          items={x.children}
        />
      ))}
    </Box>
  )
}

interface FileProps {
  name: string;
}
export const File = (props: FileProps) => {
  const { name } = props;
  return (
    <Stack direction="row">
      <FileIcon />
      <Typography variant="body1">{name}</Typography>
    </Stack>
  )
}

function App() {
  return (
    <>
      {data.map((x, i) => (
        <Factory
          key={i}
          type={x.type}
          name={x.name}
          items={x.children}
        />
      ))}
    </>
  )
}

export default App
