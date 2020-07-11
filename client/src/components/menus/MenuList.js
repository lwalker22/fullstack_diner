import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuList = ({ menus, deleteMenu, history }) => (
  <>
    { 
      menus.map( m => 
        <Link to={{
          pathname: `/menus/${m.id}`,
          state: { ...m }
        }}>
          <Card>
            <Card.Header>{m.title}</Card.Header>
            <Card.Content>
              <Button onClick={() => deleteMenu(m.diner_id, m.id, history)}>
                <Icon name='trash' />
              </Button>
            </Card.Content>
          </Card>
        </Link>
      )
    }
  </>
)

export default MenuList;