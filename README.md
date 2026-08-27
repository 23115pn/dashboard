# dashboard

colour palette:

#EF4971
#F17193 
#F9C5D2
#AACD5B
#8FB151
#6F9248

/* Underline animation */

.nav-left a::after{
    position:absolute;
    left:0;
    bottom:-8px;
    width:0%;
    height:3px;
    background:#F53E73;
    border-radius:10px;
    transition:.3s;
}

.nav-left a:hover{
    color:#F53E73;
}

.nav-left a:hover::after{
    width:100%;
}

/* Button */

.nav-btn{
    text-decoration:none;
    background:#F53E73;
    color:white;
    padding:14px 28px;
    border-radius:50px;
    font-weight:600;
    transition:.3s;
}

.nav-btn:hover{
    transform:translateY(-3px);
    background:#E43167;
    box-shadow:0 12px 20px rgba(245,62,115,.35);
}


/* menu dessert */

    .tabs-dessert {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin: 0 auto 32px;
    }

    .tab-box-dessert {
      text-decoration:none;
      background:#F53E73;
      color:white;
      padding:14px 28px;
      border-radius:50px;
      font-weight:600;
      transition:.3s;
      font-size: 30px;
    }

    .tab-active {
      background: #ec0c48;
    }


/* menu drink */

    .tabs-drink {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin: 0 auto 32px;
    }

    .tab-box-drink{
      text-decoration:none;
      background:#F53E73;
      color:white;
      padding:14px 28px;
      border-radius:50px;
      font-weight:600;
      transition:.3s;
      font-size: 30px;
    }

    .tab-active-drink {
      background: #ffaec3;
    }

