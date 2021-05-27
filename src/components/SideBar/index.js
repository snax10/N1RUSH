import React, { useState } from 'react';
import { Container, SidebarMenu } from './styles';

export function Sidebar({ isOpen, toggle }  ) {
  return(
      <Container isOpen={isOpen} onClick={toggle} >
          <SidebarMenu >
            <p>Luta</p>
            <p>Ação</p>
            <p>Corrida</p>
          </SidebarMenu>
      </Container>
  )
}

