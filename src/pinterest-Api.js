import "../node_modules/gestalt/dist/gestalt.css"
import React from "react";
import { Box, Dropdown, Button, CompositeZIndex, FixedZIndex, Heading, Layer, Sheet, Text, Flex } from "gestalt";
export function ExperienceResumePanel(props) {
  const [shouldShow, setShouldShow] = React.useState(false);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const sheetZIndex = new CompositeZIndex([HEADER_ZINDEX]);

  return (
    <React.Fragment>
      <Flex>
        <Button alignItems="center" display="flex"
          text={"Experience"}
          color={shouldShow == setShouldShow ? "red" : "white"}
          size="sm"
          iconEnd="person"
          onClick={() => setShouldShow(true)}
        />
        {shouldShow && (
          <Layer zIndex={sheetZIndex} color='red'>
            <Sheet
              accessibilityDismissButtonLabel="Close"
              accessibilitySheetLabel="Example sheet to demonstrate default padding and styling"
              heading="Experience"
              onDismiss={() => setShouldShow(false)}
              size="lg"
            >
              <div>
                <object type="text/html" data="aueric_resume.pdf" width="100%" height="250px" border="1px" solid="#0000FF" position="relative" height="800px" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"></object>
              </div>

            </Sheet>
          </Layer>
        )}
        <Box rounding="pill">
          <Text color={shouldShow == setShouldShow ? "red" : "white"}>
          </Text>
        </Box>
      </Flex>
    </React.Fragment>
  );
}

export function DropNewsBlog() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const anchorRef = React.useRef(null);
  const [shouldShow, setShouldShow] = React.useState(false);
  const onSelect = ({ item }) => {
    if (selected.some(({ value }) => value === item.value)) {
      setSelected((selected) => selected.filter(({ value }) => value != item.value));
    } else {
      setSelected((selected) => [...selected, item]);
    }
  };

  return (
    <Flex justifyContent="left">
      <Button alignItems="center" display="flex"
        iconEnd="menu"
        accessibilityControls="accessibility-example"
        accessibilityExpanded={open}
        accessibilityHaspopup
        size="lg"
        accessibilityLabel="Create Pin Menu"
        text={<Text color='darkGrey' textAlign='left'>Stories</Text>}
        color={shouldShow == setShouldShow ? "red" : "red"}
        onClick={() => setOpen((prevVal) => !prevVal)}
        ref={anchorRef}
        selected={open}
      />
      {open && (
        <Dropdown
          idealDirection="left"
          anchor={anchorRef.current}
          id="accessibility-example"
          onDismiss={() => setOpen(false)}
        >
          <Dropdown.Section
            label="News">
            <Dropdown.Item
              href="https://pinterest.com"
              option={{ value: 'Under Construction... Just like my life', label: 'Under Construction... Just like my life' }}
            />
            <Dropdown.Link
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6307974/pdf/jci-129-126050.pdf"
              onSelect={onSelect}
              isExternal
              badgeText="Scientist"
              option={{
                value: 'Mary-Claire King',
                label: 'Mary-Claire King',
                subtext: 'One of my most favorite scientist of all time is in fact Mary-Claire King. While she is probably most famous for her work on the breast cancer gene BRCA1, I am a bigger fan of her work that changed our view of evolution when she demonstrated protein-coding DNA sequences of humans and chimpanzees are 99% identical.',
              }}
              selected={selected}
            />
            <Dropdown.Link
              onSelect={onSelect}
              icon="visit"
              isExternal
              option={{
                value: 'IDONTMIND mental health campaign',
                label: 'IDONTMIND mental health campaign',
                subtext: 'IDONTMIND is an awareness campaign with a mission to inspire open conversations about mental health. 100% of proceeds support the IDONTMIND campaign at Mental Health America'
              }}
              selected={selected}
              href="https://idontmind.com/"
            />
          </Dropdown.Section>
        </Dropdown>
      )}
    </Flex>
  );
}

export function ProjectsPanel(props) {
  const [shouldShow, setShouldShow] = React.useState(false);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const sheetZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  return (
    <React.Fragment>
      <Flex >
        <Button alignItems="center" display="flex"
          text={"Projects"}
          color="white"
          size="lg"
          iconEnd="graph-bar"
          onClick={() => setShouldShow(true)}
        />
        {shouldShow && (
          <Layer zIndex={sheetZIndex} color='white'>
            <Sheet
              accessibilityDismissButtonLabel="Close"
              accessibilitySheetLabel="Example sheet to demonstrate default padding and styling"
              heading="Three Spine Stickleback"
              onDismiss={() => setShouldShow(false)}
              footer={
                <Box rounding={4} >
                  <Heading size="md">References</Heading>
                </Box>
              }
              size="lg"
            >
              <object type="text/html" data="stickleback.html" width="100%" height="100%"></object>
            </Sheet>
            <Box rounding="pill">
              <Text color={"red"}>
              </Text>
            </Box>
          </Layer>
        )}
      </Flex>
    </React.Fragment>
  );
}

export function LearnMore(props) {
  const [shouldShow, setShouldShow] = React.useState(false);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const sheetZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  return (
    <React.Fragment>
      <Flex>
        <Button alignItems="center" display="flex"
          hoverStyle="none"
          color={shouldShow == setShouldShow ? "white" : "white"}
          size="sm"
          text={<Text color='blue' textAlign='left'>Learn More</Text>}
          onClick={() => setShouldShow(true)}
        />
        {shouldShow && (
          <Layer zIndex={sheetZIndex} color='transparent'>
            <Sheet
              hoverStyle="none"
              accessibilityDismissButtonLabel="Close"
              accessibilitySheetLabel="Example sheet to demonstrate default padding and styling"
              heading="Learn more about me"
              onDismiss={() => setShouldShow(false)}
              footer={
                <Box>
                  <Heading size="md"></Heading>
                </Box>
              }
              size="lg"
            >
              <object type="text/html" data="faq.html" width="100%" height="100%"></object>
            </Sheet>
          </Layer>
        )}
        <Box rounding="pill" color={shouldShow == setShouldShow ? "white" : "white"}>
          <Text color={'blue'}>
          </Text>
        </Box>
      </Flex>
    </React.Fragment>
  );
}
