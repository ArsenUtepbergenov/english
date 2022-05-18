import { useState } from 'react'
import { Tabs, Tab, Box } from '@mui/material'
import DefaultTable from 'components/Tables/DefaultTable'
import {
  headers,
  activeRows,
  passiveRows,
  conditionalHeaders,
  conditionalRows,
} from 'assets/data/tenses'

function TabPanel({
  children,
  value,
  index,
  ...tabPanelProps
}: {
  children: React.ReactNode
  value: number
  index: number
}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tenses-tabpanel-${index}`}
      aria-labelledby={`tenses-tab-${index}`}
      {...tabPanelProps}
    >
      {value === index && <Box sx={{ my: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `tenses-tab-${index}`,
    'aria-controls': `tenses-tabpanel-${index}`,
  }
}

export default function Tenses() {
  const [value, setValue] = useState<number>(0)

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
    setValue(newValue)
  }

  const subject = (
    <>
      <b>S</b> - Subject
    </>
  )
  const object = (
    <>
      <b>O</b> - Object
    </>
  )
  const verb = (
    <>
      <b>V</b> - Verb (V1 - present, V2 - past, V3 - past participle)
    </>
  )

  return (
    <section>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} aria-label="tenses tabs" onChange={handleChange}>
          <Tab label="Active" {...a11yProps(0)} />
          <Tab label="Passive" {...a11yProps(1)} />
          <Tab label="Conditionals" {...a11yProps(2)} />
          <Tab label="Check yourself" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DefaultTable headers={headers} rows={activeRows} />
        <br />
        <legend>
          {subject}
          <br />
          {verb}
        </legend>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DefaultTable headers={headers} rows={passiveRows} />
        <br />
        <legend>
          {object}
          <br />
          {verb}
        </legend>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DefaultTable
          headerName="Conditional"
          headers={conditionalHeaders}
          rows={conditionalRows}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Check yourself
      </TabPanel>
    </section>
  )
}
