import "../node_modules/gestalt/dist/gestalt.css"
import { Box, Link, Dropdown, IconButton } from "gestalt";
import React from "react";
import { Button, Tabs, CompositeZIndex, FixedZIndex, Heading, Layer, Sheet, Text, Flex } from "gestalt";

export function MenuButton() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleChange = ({ activeTabIndex, event }) => {
    '${props.item.text}';
    setActiveIndex(activeTabIndex)
  };
  const TABS = [
    { href: "https://edotau.github.io", text: "Home", icon: "pin" },
    { href: "https://github.com/edotau", text: "Github" },
    { href: "https://pinterest.com/edotau/redefine", text: "Pinterest" },
  ];
  return (
    <Box alignItems="center" display="inlineBlock">
      <Tabs
        activeTabIndex={activeIndex}
        onChange={handleChange}
        size={'lg'}
        tabs={TABS}
      />
    </Box>
  );
}

export function DefaultPaddingExample(props) {
  const [shouldShow, setShouldShow] = React.useState(false);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const sheetZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  return (
    <React.Fragment>
      <Flex >
        <Button alignItems="center" display="flex"
          text={"Projects"}
          color="blue"
          size="lg"
          onClick={() => setShouldShow(true)}
        />
        {shouldShow && (
          <Layer zIndex={sheetZIndex} color='transparent'>
            <Sheet
              accessibilityDismissButtonLabel="Close"
              accessibilitySheetLabel="Example sheet to demonstrate default padding and styling"
              heading="Three Spine Stickleback"
              onDismiss={() => setShouldShow(false)}
              footer={
                <Box>
                  <Heading size="md">References</Heading>
                </Box>
              }
              size="lg"
            >
              <object type="text/html" data="panel_projects.html" width="100%" height="100%"></object>
            </Sheet>
            <Box rounding="pill">
              <Text color={shouldShow == setShouldShow ? "blue" : "darkGray"}>
              </Text>
            </Box>
          </Layer>
        )}
      </Flex>
    </React.Fragment>
  );
}

export function ExperienceResumePanel(props) {
  const [shouldShow, setShouldShow] = React.useState(false);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const sheetZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  return (
    <React.Fragment>
      <Flex>
        <Button alignItems="center" display="flex"
          text={"Experience"}
          color="blue"
          size="lg"
          onClick={() => setShouldShow(true)}
        />
        {shouldShow && (
          <Layer zIndex={sheetZIndex} color='transparent'>
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
          <Text color={shouldShow == setShouldShow ? "blue" : "darkGray"}>
          </Text>
        </Box>
      </Flex>
    </React.Fragment>
  );
}

export function PaddingSkills(props) {
  const [shouldShow, setShouldShow] = React.useState(false);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const sheetZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  return (
    <React.Fragment>
      <Flex>
        <Button alignItems="center" display="flex"
          text={"Skills"}
          hoverStyle="none"
          color="blue"
          size="lg"
          //text={<Text color='blue' textAlign='left'>Learn More</Text>}//<Icon iconName="ChevronRight" />
          onClick={() => setShouldShow(true)}
        />
        {shouldShow && (
          <Layer zIndex={sheetZIndex} color='white'>
            <Sheet
              hoverStyle="none"
              accessibilityDismissButtonLabel="Close"
              accessibilitySheetLabel="Example sheet to demonstrate default padding and styling"
              heading="Skills"
              onDismiss={() => setShouldShow(false)}
              footer={
                <Box>
                  <Heading size="md"></Heading>
                </Box>
              }
              size="lg"
            >
              <object type="text/html" data="panel_skills.html" width="100%" height="100%"></object>
            </Sheet>
          </Layer>
        )}
        <Box rounding="pill" color={shouldShow == setShouldShow ? "red" : "white"}>
          <Text color={'blue'}>
          </Text>
        </Box>
      </Flex>
    </React.Fragment>
  );
}

export function DropdownText() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const anchorRef = React.useRef(null);
  const onSelect = ({ item }) => {
    if (selected.some(({ value }) => value === item.value)) {
      setSelected((selected) => selected.filter(({ value }) => value != item.value));
    } else {
      setSelected((selected) => [...selected, item]);
    }
  };

  return (
    <Flex justifyContent="left">
      <Button
        accessibilityControls="accessibility-example"
        accessibilityExpanded={open}
        accessibilityHaspopup
        size="md"
        accessibilityLabel="Create Pin Menu"
        text="Stories"
        color="blue"
        onClick={() => setOpen((prevVal) => !prevVal)}
        ref={anchorRef}
        selected={open}
      />
      {open && (
        <Dropdown
          anchor={anchorRef.current}
          id="accessibility-example"
          onDismiss={() => setOpen(false)}
        >
          <Dropdown.Section
            label="Learn More"
            bgColor="maroon"
            size="xl">
            <Dropdown.Item
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6307974/pdf/jci-129-126050.pdf"
              onSelect={onSelect}
              isExternal
              badgeText="Scientist"
              option={{
                value: 'Mary-Claire King',
                label: 'Mary-Claire King',
                subtext: 'One of my most favorite scientist of all time. While she is probably most famous for her work on the breast cancer gene BRCA1, I am a bigger fan of her work that changed our view of evolution when she demonstrated protein-coding DNA sequences of humans and chimpanzees are 99% identical.',
              }}
              selected={selected}
            />
            <Dropdown.Item
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
            <Dropdown.Item
              href="https://pinterest.com"
              option={{ value: 'Under Construction... Just like my life', label: 'Under Construction... Just like my life' }}
            />
          </Dropdown.Section>

        </Dropdown>
      )}
    </Flex>
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

function loadURL(url) {
  var oRequest = new XMLHttpRequest();
  oRequest.open('GET', url, false);
  oRequest.setRequestHeader("User-Agent", navigator.userAgent);
  oRequest.send(null)

  return oRequest.responseText;

};

export function GithubPanel(props) {
  const [shouldShow, setShouldShow] = React.useState(false);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const sheetZIndex = new CompositeZIndex([HEADER_ZINDEX]);
  return (
    <React.Fragment>
      <Flex >
        <Button alignItems="center" display="flex"
          color={shouldShow == setShouldShow ? "blue" : "white"}
          size="lg"
          text={<Text color='blue'>Github</Text>}
          onClick={() => setShouldShow(true)}
        />
        {shouldShow && (
          <Layer zIndex={sheetZIndex} color='transparent'>
            <Sheet
              horizontalAlign="center"
              verticalAlign="center"
              accessibilityDismissButtonLabel="Close"
              accessibilitySheetLabel="Example sheet to demonstrate default padding and styling"
              heading="Github"
              onDismiss={() => setShouldShow(false)}
              size="lg"
            >
              <div>

                <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
                < src loadURL="https://github.com/edotau" width='600' height='800' />
                <b>Projects:</b>
                <ol id="new-projects"></ol>
                <script>
                  $( "#new-projects" ).load( "https://github.com/edotau" );
                </script>

              </div>

            </Sheet>
          </Layer>
        )}
      </Flex>
    </React.Fragment>
  );
}

export function TabExample() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <Flex>
      <Box display="flex" alignItems="center" role="tablist">
        {['Experience'].map((text, index) => (
          <Box
            color={index === activeIndex ? "transparent" : "transparent"}
            display="inlineBlock"
            key={text}
          >
            <Link
              accessibilitySelected={index === activeIndex}
              hoverStyle="none"
              href={"https://edotau.github.io/21-08-11-aueric.pdf"}
              onClick={({ event }) => {
                '${props.item.text}';
                setActiveIndex(index);
              }
              }
            >
              <Box rounding="pill">
                <Text color={index === activeIndex ? "blue" : "darkGray"}>
                  {text}
                </Text>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}


