import React from 'react';
import { styled, keyframes} from '@stitches/react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import LinkNX from '../LinkNX';
import { useState, useEffect } from 'react';
import axios from '../../services/axios';


const slideDown = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideUp = keyframes({
    '0%': { opacity: 0, transform: 'translateY(10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
});

const StyledContent = styled(DropdownMenuPrimitive.Content, {
    minWidth: 200,
    backgroundColor: '#023160',
    borderRadius: 10,
    color: 'black',
    padding: 10,
    animationDuration: '0.6s',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    '&[data-side="top"]': { animationName: slideUp },
    '&[data-side="bottom"]': { animationName: slideDown }
});
const itemStyles = {
    all: 'unset',
    fontSize: 16,
    lineHeight: 2,
    color: 'white',
    borderBottom: '1px solid white',
    display: 'flex',
    alignItems: 'center',
    height: 50,
    position: 'relative',
    paddingLeft: 5,
    userSelect: 'none',
    '&[data-disabled]': {
        pointerEvents: 'none'
    }
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;

const IconButton = styled('button', {
    borderRadius: '20px',
    height: 46,
    width: 68,
    color: 'white',
    position: 'fixed',
    left: '78%',
    bottom: '2%',
    display: 'flex',
    zIndex: '99',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: '#023160'
});

export const BotaoEvento = () => {

    const [userDocente, setUserDocente] = useState([]);
    useEffect(() => {
        const userTokenID = localStorage.getItem('usertoken')
       if(userTokenID !== null) {
          axios.get('/usuario/' + userTokenID)
          .then((response) => {
             setUserDocente(response.data.docente);
          })
       }
    
       
        //eslint-disable-next-line
    }, [])

    return typeof userDocente !== true ? (
        (
            userDocente ? (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <IconButton>
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.000000pt"
                        height="20.000000pt"
                        viewBox="0 0 50.000000 50.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g
                            transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                            fill="#FFFFFF"
                            stroke="none"
                        >
                            <path
                                d="M50 290 c-11 -11 -20 -29 -20 -40 0 -26 34 -60 60 -60 26 0 60 34 60
60 0 26 -34 60 -60 60 -11 0 -29 -9 -40 -20z"
                            />
                            <path
                                d="M210 290 c-11 -11 -20 -29 -20 -40 0 -26 34 -60 60 -60 26 0 60 34
60 60 0 11 -9 29 -20 40 -11 11 -29 20 -40 20 -11 0 -29 -9 -40 -20z"
                            />
                            <path
                                d="M370 290 c-11 -11 -20 -29 -20 -40 0 -11 9 -29 20 -40 11 -11 29 -20
40 -20 26 0 60 34 60 60 0 11 -9 29 -20 40 -11 11 -29 20 -40 20 -11 0 -29 -9
-40 -20z"
                            />
                        </g>
                    </svg>
                </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <svg
                        className="mr-2"
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.000000pt"
                        height="20.000000pt"
                        viewBox="0 0 30.000000 30.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g
                            transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
                            fill="#fff"
                            stroke="none"
                        >
                            <path
                                d="M110 250 c-11 -11 -20 -31 -20 -45 0 -30 32 -65 60 -65 28 0 60 35
60 65 0 30 -32 65 -60 65 -11 0 -29 -9 -40 -20z"
                            />
                            <path
                                d="M80 92 c-19 -9 -35 -24 -35 -32 0 -12 18 -15 105 -15 87 0 105 3 105
15 0 20 -62 50 -105 50 -19 0 -51 -8 -70 -18z"
                            />
                        </g>
                    </svg>
                    Usuario
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LinkNX hrefLink="/registroEvento" nomeLink="Novo Evento" />
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LinkNX hrefLink="/" nomeLink="Sair" />
                </DropdownMenuItem>
                <div className="mt-3"></div>
            </DropdownMenuContent>
        </DropdownMenu>
    ) : (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <IconButton>
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.000000pt"
                        height="20.000000pt"
                        viewBox="0 0 50.000000 50.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g
                            transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                            fill="#FFFFFF"
                            stroke="none"
                        >
                            <path
                                d="M50 290 c-11 -11 -20 -29 -20 -40 0 -26 34 -60 60 -60 26 0 60 34 60
60 0 26 -34 60 -60 60 -11 0 -29 -9 -40 -20z"
                            />
                            <path
                                d="M210 290 c-11 -11 -20 -29 -20 -40 0 -26 34 -60 60 -60 26 0 60 34
60 60 0 11 -9 29 -20 40 -11 11 -29 20 -40 20 -11 0 -29 -9 -40 -20z"
                            />
                            <path
                                d="M370 290 c-11 -11 -20 -29 -20 -40 0 -11 9 -29 20 -40 11 -11 29 -20
40 -20 26 0 60 34 60 60 0 11 -9 29 -20 40 -11 11 -29 20 -40 20 -11 0 -29 -9
-40 -20z"
                            />
                        </g>
                    </svg>
                </IconButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <svg
                        className="mr-2"
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.000000pt"
                        height="20.000000pt"
                        viewBox="0 0 30.000000 30.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g
                            transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
                            fill="#fff"
                            stroke="none"
                        >
                            <path
                                d="M110 250 c-11 -11 -20 -31 -20 -45 0 -30 32 -65 60 -65 28 0 60 35
60 65 0 30 -32 65 -60 65 -11 0 -29 -9 -40 -20z"
                            />
                            <path
                                d="M80 92 c-19 -9 -35 -24 -35 -32 0 -12 18 -15 105 -15 87 0 105 3 105
15 0 20 -62 50 -105 50 -19 0 -51 -8 -70 -18z"
                            />
                        </g>
                    </svg>
                    Usuario
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LinkNX hrefLink="/" nomeLink="Sair" />
                </DropdownMenuItem>
                <div className="mt-3"></div>
            </DropdownMenuContent>
        </DropdownMenu>
    )) ) : (
        <></>
    )
};

export default BotaoEvento;
