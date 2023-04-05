<template>
    <div class="area-logo"> 
        
        <div class="logo">
            <img src="@/assets/logo3.jpg"/>
            
        </div>
        <ul class="social-media">
            <li>
                <a href="https://github.com/AlexsandroGomesClemente">
                    <img src="../../../assets/icons8-github-100.png" />
                </a>
            </li>
            <li>
                <a href="https://linkedin.com/in/alexsandro-gomes-clemente-7842a21ba/">
                    <img src="../../../assets/icons8-linkedin-circled-100.png" />
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.area-logo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12%;
    width: 100%;

    border-bottom: 1px solid #FFF;
    font-weight: 400;
    color: #00374C;

}

.social-media  {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    width: 10%;
    margin-right: 30px;
} 
.social-media li {
    list-style: none;
}

a {
    cursor: pointer;
}

a:hover{
    opacity: 0.5;
}

img {
    width: 30px;
    height: 30px;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0px 20px;
}

.logo img {
    margin-right: 8px;
    width: 100px;
    height: 90px;
}

</style>