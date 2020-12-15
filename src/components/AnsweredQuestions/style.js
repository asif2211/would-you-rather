import styled from "styled-components";
export const TabContainer = styled.div`
  width: 70%;
  align-items: center;
  margin: 0 auto;
`;

export const ContactList = styled.ol`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
export const ContactListItem = styled.li`
  padding: 20px;
  background: white;
  display: flex;
  @media (min-width: 600px) {
    margin: 20px;
    border: 1px solid #d5d8df;
    border-radius: 4px;
  }
`;
export const ContactDetails = styled.div`
  padding-left: 20px;
  border-left: 1px solid #eee;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Authorname = styled.p`
  text-align: center;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Paragraph = styled.p`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const List = styled.ul`
list-style-type:none;
margin:.5rem;
padding:.5rem;
`;
export const ListItem = styled.li`

margin:.5rem;
padding:.5rem;
`;