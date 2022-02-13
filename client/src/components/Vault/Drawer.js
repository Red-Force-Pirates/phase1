import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const tmp = `PiratesDAO의 초기 판매 수익의 50%와
  이후 Opensea를 통해 발생하는
  모든 수익의 100%는 볼트에
  저장됩니다.
  
  이렇게 벌어들인 수익은
  DAO의 로드맵을 진행하기 위한 지출
  실물 자산, 신규 프로젝트, 바닥정리
  등
  
  DAO의 가치 부양을 위해 사용됩니다.`

  const close = `close`;

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 380, height: "100%"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <div className="rside-bar" style={{display : "flex", width : "100%", height : "100%"}}>
      <div>
        <List sx={{width : 320}}>
            <ListItem>
              <ListItemText primary="Vault" />
              <ListItemText primary="PHASE1" />
            </ListItem>
            <Divider />
        </List>
        <List sx={{width : 320}}>
            <ListItem>
                <ListItemText 
                primary="Vault는 파이럿이 만들어내는
                모든 가치를 저장합니다.
                저장된 가치는 DAO의 결정에 따라
                파이럿의 가치를 부양하기 위해
                사용됩니다.
                "/>
            </ListItem>
            <Divider />
        </List>

        <List sx={{width : 320}}>
            <ListItem>
              <ListItemText primary="MECHANISM" />
            </ListItem>
            <Divider />
        </List>

        <List>
          <ListItem>
            <ListItemText 
            primaryTypographyProps={{ style: { whiteSpace: "pre-line"} }}
            primary={tmp}/>
          </ListItem>
        </List>
      </div>
      <Divider orientation='vertical' flexItem/>
      <div>
        <List sx={{height: 570, width : 50}}>
        </List>
        <Divider />
        <List sx={{height: 188, width : 50}}>
          <ListItem sx={{height : "100%"}} button key="close">
            <ListItemText 
            primaryTypographyProps={{style: { fontSize: "24px", transform: "rotate(90deg)", margin : "auto"}}}
            primary={close}/>
          </ListItem>
        </List>
      </div>
    </div>
    </Box>
  );

  return (
    <div className="contentBox">
        <span className="mainText" onClick={toggleDrawer("right", true)}>VAULT TREASURY</span><br />
        <span className="mainVault" onClick={toggleDrawer("right", true)}>$871,239,120</span>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
    </div>
  );
}