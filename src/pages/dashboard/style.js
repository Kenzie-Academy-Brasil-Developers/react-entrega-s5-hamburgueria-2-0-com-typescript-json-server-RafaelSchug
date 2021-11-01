import styled from 'styled-components';


export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-height: calc(100vh - 65px);
    justify-content: center;
    align-content: center;
    gap: 30px;
    align-items: flex-start;
    padding: 50px;
    max-width: 1400px;
    margin: auto;

    > :nth-child(odd){
        animation: fadein .7s 1 ease-in-out;
    }

    > :nth-child(even){
        animation: fadein .6s 1 ease-in-out;
    }

    @keyframes fadein {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }

        70% {
            transform: scale(1.1);
        }
    }
`

export const LoadingContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    position: relative;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        font-size: 25px;

        ::after {
            animation: dots 2s infinite linear;
            position: absolute;
            content: '.';
            bottom: -20px;

        }
    }

    @keyframes dots {
            
        30% {
           content: '..'
        }
        60% {
            content: '...'
        }
    }

    ::before {
        position: absolute;
        content: '';
        width: 200px;
        height: 200px;
        border: 2px dotted #27ae60;
        border-radius: 50%;
        top: 0;
        left: 0;
        animation: anim_before 3s infinite linear;

        @keyframes anim_before {
            from {
                transform: rotate(0deg) translateX(-10px) translateY(-10px);
            }
            to {
                transform: rotate(360deg) translateX(-10px) translateY(-10px);
            }
        }
    }

    ::after {
        position: absolute;
        content: '';
        width: 200px;
        height: 200px;
        border: 2px dotted #ec5757;
        border-radius: 50%;
        top: 0;
        left: 0;
        animation: anim_after 2s infinite linear;

        @keyframes anim_after {
            from {
                transform: rotate(0deg) translateX(-10px) translateY(-10px);
            }
            to {
                transform: rotate(360deg) translateX(-10px) translateY(-10px);
            }
        }
    }
    
    img {
        width: 150px;
    }

`