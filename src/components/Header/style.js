import styled from 'styled-components';

export const CartCard = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    

    .image_content {
        background: #d9d9d9;
        width: 82px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;

        img {
            width: 60px;
            height: 100%;
        }
    }

    .item_information {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 3;

        .item_control {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }

    .button_content {
        flex: 1;
        align-self: flex-start;
    }


`