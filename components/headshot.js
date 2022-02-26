import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'

export default function NameTag() {

  return (
    <div>
      <p>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Stack
            direction="row"
            alignItems="baseline"
            spacing={1}
          >
            <Avatar alt="Eric Au" size="small" src="/pictures/headshot.png" sx={{ width: 35, height: 35 }} />
            <FormHelperText>Software Engineer and Molecular Geneticist </FormHelperText>
          </Stack>
        </Box>
      </p>
    </div>
  )

}

