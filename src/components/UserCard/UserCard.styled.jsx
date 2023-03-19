import styled from 'styled-components'; 

export const CardItem = styled.div`
position: relative;
width: 380px;
height: 460px;
display: flex;
align-items: center;
justify-content: flex-end;
flex-direction: column;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
margin-bottom: 20px;
`;

export const Logo = styled.img`
position: absolute;
top: 20px;
left: 20px;
`;

export const Background = styled.img`
position: absolute;
top: 28px;
left: 36px;
`;

export const Wrapper = styled.div`
width: 80px;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
background: #ebd8ff;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
  inset 0px -2.19582px 4.39163px #ae7be3,
  inset 0px 4.39163px 3.29372px #fbf8ff;
border-radius: 50%;

&:before {
position: absolute;
content: "";
left: 0;
width: 150px;
height: 8px;
background: #ebd8ff;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3,
    inset 0px 3.43693px 2.5777px #fbf8ff;
}

&:after {
position: absolute;
content: "";
right: 0;
width: 150px;
height: 8px;
background: #ebd8ff;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3,
    inset 0px 3.43693px 2.5777px #fbf8ff;   
}
`;

export const AvatarWrapper = styled.div`
background: #5736a3;
  border-radius: 50%;
  width: 62px;
  height: 62px;
  position: absolute;
`;

export const Avatar = styled.img`
position: absolute;
width: 62px;
height: 62px;
`;

export const UserList = styled.ul`
`;

export const UserItem = styled.li`
&:not(:last-child) {
    margin-bottom: 18px;
}
`;

export const UserText = styled.p`
font-weight: 500;
font-size: 20px;
line-height: 1.2;
text-transform: uppercase;
text-align: center;
color: #EBD8FF;
`;

export const Button = styled.button`
width: 196px;
height: 50px;
margin-bottom: 36px;
cursor: pointer;
padding: 14px 28px;
background: ${(p) => {
    switch (p.isFollow) {
        case true:
            return "#5CD3A8";
            case false:
                return "#EBD8FF";
                default:
                    return "#EBD8FF";
    }
}};
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
font-weight: 600;
font-size: 18px;
line-height: 1.2;
text-transform: uppercase;
color: #373737;
`;