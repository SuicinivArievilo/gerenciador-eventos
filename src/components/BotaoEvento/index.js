import React from 'react';
import { styled, keyframes} from '@stitches/react';
import {
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import LinkNX from '../LinkNX';


const slideDown = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });
  
  const slideUp = keyframes({
    '0%': { opacity: 0, transform: 'translateY(10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 100,
  backgroundColor:  '#023160',
  borderRadius: 6,
  padding: 10,
  animationDuration: '0.6s',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  animationFillMode: 'forwards',
  '&[data-side="top"]': { animationName: slideUp },
  '&[data-side="bottom"]': { animationName: slideDown },
    },
)
const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: "white ",
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 27,
  position: 'relative',
  paddingLeft: 5,
  userSelect: 'none',
  '&[data-disabled]': {
    backgroundColor: '#023160',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '#023160',
    backgroundColor: '#023160',
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;


const IconButton = styled('button', {
  borderRadius: '100%',
  height: 45,
  width: 45,
  position: 'fixed',
  left: '85%',
  bottom: '2%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: "white" ,
  backgroundColor: '#023160',
  '&:focus': { boxShadow: `0 0 0 2px` },
  
});

export const BotaoEvento = () => {

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton>
            <HamburgerMenuIcon/>
          </IconButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
          <LinkNX hrefLink="/registroEvento" nomeLink="Novo Evento"/>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <LinkNX hrefLink="/registroEvento" nomeLink="Perfil"/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
};

export default BotaoEvento;
