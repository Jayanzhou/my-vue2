<template>

    <div class="login-box">
        <div class="login-content">
            <ul>
                <li>
                    <label for="account">Account</label>
                    <input ref="account" type="text" id="account" placeholder="Input your account" @keyup="inputChange"/>
                </li>
                <li>
                    <label for="password">Password</label>
                    <input ref="password" type="password" id="password" placeholder="Input your password" @keyup="inputChange"/>
                </li>
            </ul>
            <div class="btn-box">
                <p :class="{btn_red}" @click="btnClick" ref="btnLogin">Login</p>
            </div>
        </div>
    </div>

</template>

<script>
import md5 from 'md5'
import $ from '../util/common.js'
import userInfo from '../data/userInfo.js'
console.log(md5('123456'));
export default{
    name: 'Login',
    data () {
        return {
            btn_red: false,
            accountInput: '',
            psdInput: ''
        }
    },
    methods: {
        inputChange(){
            this.accountInput = this.$refs.account.value.trim();
            this.psdInput = this.$refs.password.value.trim();
            if(this.accountInput != '' && this.psdInput != ''){
                this.btn_red = true;
            }else{
                this.btn_red = false;
            }
        },
        btnClick(){
            const self = this;
            if(!$.hasClass(this.$refs.btnLogin, 'btn_red')){
                return;
            }
            console.log('加密后：'+md5(this.psdInput));
            //账户不存在
            if(!userInfo[this.accountInput]){
                alert('该账户不存在，请输入正确的账户');
            }else if(userInfo[this.accountInput].password == md5(this.psdInput)){
                console.log('登录成功，正在跳转。。。');
                setTimeout(()=>{
                    self.$router.push({
                        path: '/',
                        replace: true
                    });
                }, 1500);
            }else{
                alert('密码与账户不匹配');
            }

        }
    }
}

</script>

<style>
    
    .login-box{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-content{
        background: #fff;
        width: 6rem;
        height: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 6px;
    }
    .login-content ul li{
        height: 0.94rem;
        line-height: 0.94rem;
        border-bottom: 1px solid #d5d5d5;
    }
    .login-content li label{
        font-size: 0.28rem;
    }
    .login-content li input{
        font-size: 0.32rem;
        border: 0;
        outline: 0;
        padding-left: 0.2rem;
    }
    .btn-box{
        padding: .24rem .24rem .3rem .24rem;
        width: 80%;
    }
    .btn-box p{
        height: .9rem;
        line-height: 0.9rem;
        font-size: .32rem;
        color: #fff;
        background: #888;
    }
    .btn-box .btn_red{
        background: #c70034;
        color: #fff;
    }

    
</style>