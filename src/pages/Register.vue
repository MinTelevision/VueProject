<template>
  <div id="content_for_layout" class="yhsd-base">
    <div class="login login-out">
      <div style="display:block;">
        <div class="input-group">
          <form action="javascript:void(0);" id="yhsdRegisterForm">
            <table>
              <tbody>
                <tr class="input-row">
                  <th>
                    <div class="input-row-border">
                      <label for="yhsdRegisterAccount">账号</label>
                    </div>
                  </th>
                  <td>
                    <div class="input-row-border">
                      <input
                        v-model="user"
                        @click="focus"
                        type="text"
                        id="yhsdRegisterAccount"
                        placeholder="手机"
                      >
                    </div>
                  </td>
                </tr>

                <tr class="input-row">
                  <th>
                    <div class="input-row-border">
                      <label for="yhsdRegisterPassword">设置密码</label>
                    </div>
                  </th>
                  <td>
                    <div class="input-row-border">
                      <input
                        v-model="password"
                        type="password"
                        id="yhsdRegisterPassword"
                        placeholder="请输入密码"
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
              class="btn btn-lg btn-primary btn-block"
              form="yhsdRegisterForm"
              type="submit"
              @click="register"
            >注册</button>
          </div>
        </div>
        <div class="login-out-sub-txt">
          <span class="login-out-sub-txt-l">已有账号？请
            <router-link to="/app/login" href="javascript:;">直接登录</router-link>
          </span>
        </div>
        <div v-show="show" style="" v-text="details"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ServerUrl } from "../configs/ServerUrl.js";
import qs from "qs";

export default {
  name: "Register",
  data() {
    return {
      user: "",
      password: "",
      details: "",
      show: false,
    };
  },
  methods: {
    register() {
      if (this.user.trim().length > 0 && this.password.trim().length > 0) {
        if (/^1[3578]\d{9}$/.test(this.user)) {
          this.$axios
            .post(
              ServerUrl + "/users/register",
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
            .then(() => {
              location.hash = "/app/login";
             });
        } else {
          this.show = true;
          this.details = "手机号有误";
          this.user = "";
          this.password = "";
        }
      } else {
        this.show = true;
        this.details = "手机号或密码不能为空";
        this.user = "";
        this.password = "";
      }
    },
    focus() {
      this.show = false;
    }
  }
};
</script>

<style>
</style>
