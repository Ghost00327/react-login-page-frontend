import React, { Component } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import GreenCheckbox from './GreenCheckbox';


const useStyles = makeStyles({
  root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
  },
  icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(58,184,48,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
  },
  checkedIcon: {
      backgroundColor: '#55b947',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#55b947',
      },
    },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

class LeftMain extends Component {

  render() {
    return (
      <div style={{backgroundColor:'#1c2232'}} className="flex-1 flex-col py-12 px-4 sm:px-6 lg:px-8">
        <div className="pl-4">
          <FormControl component="fieldset">
          <FormLabel style={{color:'#909dad'}} component="legend">SELECT EXCHANGE</FormLabel>
          <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
          <FormControlLabel value="female" control={<StyledRadio />} style={{color:'#e0dfe4'}} label="PancakeSwap" />
          <FormControlLabel value="male" control={<StyledRadio />} style={{color:'#e0dfe4'}} label="UniSwap" />
          </RadioGroup>
          </FormControl>
          <p style={{color:'#909dad'}} className="my-2">BALANCE:BNB</p>
          <p style={{color:'#909dad'}} className="my-2">CHECKBOXES</p>
          
        </div>
        <div className="pl-3">
          <GreenCheckbox />
        </div>
      <div>
          <Checkbox
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
          <span style={{color:'#848a9a'}} className="ml-2">Disabled</span>
      </div>
      <div>
          <Checkbox
            color="default"
            indeterminate
            inputProps={{ 'aria-label': 'indeterminate checkbox' }}
          />
          <span style={{color:'#848a9a'}} className="ml-2">Dis. Selected</span>
      </div>
      <div>
          <Checkbox
            defaultChecked
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
          <span style={{color:'#848a9a'}} className="ml-2">Dis. Indeterminate</span>
      </div>
      <div className="py-2">
        <p style={{color:'#858e9d'}} className="pb-2">NODE</p>
        <input placeholder="Node"  style={{backgroundColor:'#222a3d', border:'solid 2px #393e51'}} className="rounded-md w-72 h-10 border-3 p-4 mr-4"></input>
        <button style={{background:'#7b5be3'}} className="rounded-md py-2 px-8 text-white">Set</button>
      </div>
      <div className="py-2">
        <p style={{color:'#858e9d'}} className="pb-2">DISCORD WEBSOCKED TO SEND DATA</p>
        <input placeholder="Discord web"  style={{backgroundColor:'#222a3d', border:'solid 2px #393e51'}} className="rounded-md w-72 h-10 border-3 p-4 mr-4"></input>
        <button style={{background:'#7b5be3'}} className="rounded-md py-2 px-8 text-white">Set</button>
      </div>
      <div className="py-2">
        <p style={{color:'#858e9d'}} className="pb-2">WALLET ADDRESS FOR AUTO WITHDRAW</p>
        <input placeholder="Adress"  style={{backgroundColor:'#222a3d', border:'solid 2px #393e51'}} className="rounded-md w-72 h-10 border-3 p-4 mr-4"></input>
        <button style={{background:'#7b5be3'}} className="rounded-md py-2 px-8 text-white">Set</button>
      </div>
      </div>
    );
  }
}

export default LeftMain;
