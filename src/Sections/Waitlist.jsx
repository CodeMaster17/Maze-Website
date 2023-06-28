import React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const Waitlist = () => {

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };


    return (
        <div className='w-[100%] lg:h-[90vh] md:h-[70vh] xsm:h-[70vh]  bg-homeBlackBg flex flex-col items-center justify-center ' >
            <p className="text-white text-center xsm:text-[2.5rem] lg:text-[3rem] font-[700] md:text-[3rem]" >Revolutionizing the sports industry</p>
            <div className="lg:w-[80%] xsm:w-[90%] h-[80%] flex flex-col xsm:justify-center  lg:justify-around items-center  bg-FormColor rounded-[30px] shadow-FormShadow mt-8 " >
                <div className="w-[100%] ">
                    <p className="text-center text-white xsm:text-[2rem] lg:text-[3rem] font-[700] md:text-[2.5rem]" >Join the waitlist</p>
                </div>
                <div className="lg:w-[70%] xsm:w-[90%] md:w-[80%]">
                    <p className="text-center text-white xsm:text-[1.5rem]  lg:text-[1.8rem] leading-[2.5rem] " >{"Be the first to experience our exciting talent launch! Join our waitlist for exclusive early access and stay ahead of the game. Don't miss this opportunity!"}</p>
                </div>
                <div className="lg:w-[50%] md:w-[50%] xsm:w-[80%] xsm:h-[60%] xsm:flex lg:h-[45%] xsm:flex-col xsm:justify-between xsm:items-center  ">
                    <div className="flex lg:flex-row  items-center justify-between xsm:flex-col xsm:h-[45%] xsm:w-[100%]  xsm:justify-around lg:h-[40%] " >
                        <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%] lg:w-[45%]  h-[4.7rem]" />
                        <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%] lg:w-[45%] h-[4.7rem] " />
                    </div>
                    <div className="flex lg:flex-row  items-center justify-between lg:mt-8 xsm:mt-0 xsm:flex-col xsm:h-[45%] xsm:w-[100%] xsm:justify-around lg:h-[40%] "  >
                        <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%]  lg:w-[45%]  h-[4.7rem]" />
                        {/* <input type="text" placeholder="Name" className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%]  lg:w-[45%] h-[4.7rem] " /> */}
                        <div className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%]  lg:w-[45%] h-[4.7rem] ">
                            <FormControl className="pl-10 bg-waitListInput rounded-[23.5px] xsm:w-[100%]  lg:w-[100%] h-[4.7rem] border-0 text-white">
                                <Select
                                    // multiple
                                    className='text-white'
                                    displayEmpty
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput />}
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em className='text-left text-white' >Placeholder</em>;
                                        }

                                        return personName;
                                    }}
                                    MenuProps={MenuProps}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem disabled value="">
                                        <em className='text-white' >Placeholder</em>
                                    </MenuItem>
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            // style={getStyles(name, personName, theme)}
                                            className='text-white'
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <button className=" lg:mt-8 bg-bgBtn rounded-[23.5px] xsm:w-[50%] lg:w-[20%] xsm:mt-0 md:h-[4rem] xsm:h-[3.5rem] lg:h-[4.7rem] md:text-[2rem] xsm:text-[1rem] text-center text-white lg:text-[1.4rem]" >Join Now</button>
                </div>
            </div>
        </div>
    )
}

export default Waitlist
