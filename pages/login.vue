<template>
    <div class="login-form">
        <div class="login-info">Sign in to your account</div>
        <form>
            <a-form-item>
                <a-input placeholder="Username" />
            </a-form-item>
            <a-form-item>
                <a-input-password placeholder="Password" />
            </a-form-item>
            <a-form-item>
                <a-checkbox>Remember me</a-checkbox>
            </a-form-item>
            <a-form-item>
                <a-button class="btn" type="primary">Login</a-button>
            </a-form-item>
        </form>
    </div>
</template>
<script setup>
definePageMeta({
    layout: false
})
</script>
<style>
.login-form {
    width: 400px;
    margin: 200px auto;
    .btn{
        margin: 0 auto;
        width: 100%;
    }
}
.login-info {
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
    font-weight: bold;
}
</style>