<template>
  <div id="content_for_layout" class="yhsd-base">
    <div class="login login-out">
      <div class="input-group">
        <form action="javascript:void(0);" id="yhsdLoginForm">
          <table>
            <tbody>
              <tr class="input-row">
                <th>
                  <div class="input-row-border">
                    <label for="yhsdLoginAccount">账号</label>
                  </div>
                </th>
                <td>
                  <div class="input-row-border">
                    <!-- @click="focus" -->
                    <input
                      @click="hidden"
                      v-model="user"
                      type="text"
                      id="yhsdLoginAccount"
                      name="account"
                      placeholder="手机"
                      tabindex="1"
                    >
                  </div>
                </td>
              </tr>
              <tr class="input-row">
                <th>
                  <div class="input-row-border">
                    <label for="yhsdLoginPassword">密码</label>
                  </div>
                </th>
                <td>
                  <div class="input-row-border">
                    <input
                      v-model="password"
                      type="password"
                      id="yhsdLoginPassword"
                      placeholder="请输入密码"
                      tabindex="2"
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div class="input-group-hint"></div>
        <div class="input-group-submint">
          <button
            @click="login"
            class="btn btn-lg btn-primary btn-block"
            form="yhsdLoginForm"
            type="submit"
          >登录</button>
        </div>
      </div>
      <div class="login-out-sub-txt">
        <span class="login-out-sub-txt-l">
          <a href="/account/forget_password">忘记密码？</a>
        </span>
        <span class="login-out-sub-txt-r">
          <router-link to="/app/register" href="javascript:;">立即注册</router-link>
        </span>
      </div>
      <div v-show="xianshi" style v-text="details"></div>
    </div>
  </div>
</template>

<script>
import { ServerUrl } from "../configs/ServerUrl.js";
import qs from "qs";
import Cookie from "../configs/cookiefun.js"

export default {
  name: "login",
  data() {
    return {
      user: "",
      password: "",
      details: "",
      xianshi: false
    };
  },
  methods: {
    login() {
      if (this.user.trim().length > 0 && this.password.trim().length > 0) {
        this.$axios
          .post(
            ServerUrl + "/users/login",
            qs.stringify({
              user: this.user,
              password: this.password
            }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then(data => {
            if (data.data.status == "success") {
              

              var now = new Date();
              now.setDate(now.getDate() + 7);
              Cookie.set("name", this. user, { expires: now }); 
              location.href = "/";
            } else {
              this.xianshi = true;
              this.details = "请输入正确密码";
              this.user = "";
              this.password = "";
            }
          });
      } else {
        this.xianshi = true;
        this.detail = "账号密码不能为空";
        this.user = "";
        this.password = "";
      }
    },
    hidden() {
      this.xianshi = false;
    }
    
  }
};
</script>

<style>
</style>
