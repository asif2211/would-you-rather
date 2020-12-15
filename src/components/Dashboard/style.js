import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const TabContainer = styled.div`
  width:70%;
  align-items:center;
  margin:0 auto;
  
  `

export const Contact_list = styled.ol `
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
  `
  export const Contact_list_item = styled.li`
    padding: 20px;
    background: white;
    display: flex;
    @media (min-width: 600px) {
   
      margin: 20px;
      border: 1px solid #d5d8df;
      border-radius: 4px;
    }
  `
 export const  Contact_details = styled.div`
  padding-left: 20px;
  border-left: 1px solid #eee;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
 `;
 export const Paragraph = styled.p`
  
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

 `;
