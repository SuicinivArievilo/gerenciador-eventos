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
    color: '#E8E8E8',
    borderBottom: '1px solid #E8E8E8',
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
    color: '#E8E8E8',
    position: 'fixed',
    left: '78%',
    bottom: '2%',
    display: 'flex',
    zIndex: '99',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#E8E8E8',
    backgroundColor: '#023160'
});

export const BotaoEvento = () => {
    const [userDocente, setUserDocente] = useState([]);
    useEffect(() => {
        const userTokenID = localStorage.getItem('usertoken');
        if (userTokenID !== null) {
            axios.get('/usuario/' + userTokenID).then((response) => {
                setUserDocente(response.data.docente);
            });
        }

        //eslint-disable-next-line
    }, []);

    return typeof userDocente !== true ? (
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
                                fill="#E8E8E8"
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
                    <svg className="mr-2"version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="20.000000pt" height="20.000000pt" viewBox="0 0 50.000000 50.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
fill="#FFFFFF" stroke="none">
<path d="M212 455 c-17 -8 -37 -26 -42 -40 -14 -36 -6 -134 13 -172 29 -55 23
-70 -38 -99 -58 -28 -85 -55 -85 -86 0 -16 11 -18 115 -18 70 0 115 4 115 10
0 6 -42 10 -105 10 -103 0 -105 1 -95 20 6 11 33 31 60 45 39 20 58 24 94 19
30 -5 46 -3 46 4 0 6 -15 12 -32 14 -27 2 -34 8 -36 28 -2 14 -11 41 -20 60
-24 51 -26 143 -4 169 25 31 71 36 110 11 32 -20 32 -21 30 -85 -2 -36 -6 -65
-10 -65 -5 0 -8 -4 -8 -10 0 -8 28 -15 31 -7 5 15 8 127 4 144 -5 22 -70 63
-97 63 -7 -1 -28 -7 -46 -15z"/>
<path d="M310 120 l0 -120 95 0 95 0 0 93 c0 89 -1 94 -28 120 -25 24 -36 27
-95 27 l-67 0 0 -120z m110 70 c0 -27 3 -30 30 -30 l30 0 0 -70 0 -70 -75 0
-75 0 0 100 0 100 45 0 c43 0 45 -1 45 -30z m40 5 c10 -12 10 -15 -4 -15 -9 0
-16 7 -16 15 0 8 2 15 4 15 2 0 9 -7 16 -15z"/>
<path d="M350 130 c0 -5 25 -10 55 -10 30 0 55 5 55 10 0 6 -25 10 -55 10 -30
0 -55 -4 -55 -10z"/>
<path d="M350 90 c0 -5 16 -10 35 -10 19 0 35 5 35 10 0 6 -16 10 -35 10 -19
0 -35 -4 -35 -10z"/>
<path d="M350 50 c0 -5 23 -10 50 -10 28 0 50 5 50 10 0 6 -22 10 -50 10 -27
0 -50 -4 -50 -10z"/>
</g>
</svg>
                        Usuario
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <LinkNX
                            hrefLink="/registroEvento"
                            nomeLink="Novo Evento"
                        />
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
                                fill="#E8E8E8"
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
                                fill="#E8E8E8"
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
        )
    ) : (
        <></>
    );
};

export default BotaoEvento;
