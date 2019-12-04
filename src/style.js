const string = `
.skin{ 
    position: fixed;
    top: 50vh;
    left: 0;
    background-color: #FEE433;
    width:100%;
    height: 50vh;
}
.face{
margin-left:auto;
margin-right: auto;
margin-top:50px;
padding-left: 10px;
position: relative;
}
.eye{
width: 50px;
height: 50px;
border:solid 2px ;
border-radius: 50%;
position: absolute;
background-color: #2E2E2E;
}
.eye::after{
    position: absolute;
    top: 5px;
    left:10px;
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    border:solid 2px ;
    
}
.eye.left{
right: 50%;
margin-right: 90px;
}
.eye.right{
left: 50%;
margin-left: 90px;
}
.nose{
    width: 12px;
    height: 12px;
    background-color: #000;
    position: absolute;
    top: 30px;
    left: 50%;
    border-radius: 50px 0 0 0; 
    transform-origin:bottom right;
    transform:translateX(-12px) rotate(45deg);
}
.lip{
    position: absolute;
    width: 150px;
    height: 110px;
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;

}
.lip-up{
    width: 80px;
    height: 25px;
    border: solid#000 2px;
    position: absolute;
    top: 10px;
    z-index: 3;
    background-color: #FEE433;

}
.lip-up.left{
    right: 50%;
    margin-left: 10px;
    border-top:none ;
    border-right:none ;
    border-bottom-left-radius: 40px 25px;
    transform: rotate(-20deg) translateX(7px);
    transform-origin: left bottom;
}
.lip-up.right{
    left: 50%;
    border-top:none ;
    border-left:none ;
    border-bottom-right-radius: 40px 25px;
    transform: rotate(20deg) translateX(-7px);
    transform-origin: right bottom;
}
.mouth-down .tongue{
    width: 300px;
    height: 3500px;
    background-color: #990513;
    border:solid 1px #2E2E2E;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius:200px/2000px;
    overflow: hidden;
}
.mouth-down .tongue .tongue-shadow{
    width:100px;
    height: 90px;
    background-color: #fc4a62;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
}
.cheek{
    width: 70px;
    height: 70px;
    border:solid 2px ;
    border-radius: 50%;
    position: absolute;
    top: 80px;
    background-color: #FC0D1C;
    border:solid 2px black;
}
.cheek.left{
    right: 50%;
    /* background-color: red; */
    margin-right: 120px;
    
    }
.cheek.right{
    left: 50%;
    /* background-color:blue; */
    margin-left: 120px;
    }
    @keyframes wave{
        0%{
         
            transform:translateX(-12px)  rotate(45deg);
        }
        33%{
            
            transform: translateX(-12px) rotate(50deg);
        }
        66%{
            
            transform: translateX(-12px) rotate(45deg);
        }
        100%{
          
            transform:translateX(-12px) rotate(40deg);
        }
    }
 .nose:hover{
        animation: wave 300ms infinite linear;
      }  
`
export default string