<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <!-- 全屏显示 -->
      <screenfull id="screenfull" class="right-menu-item hover-effect" />
      <!-- 消息中心 -->
      <reply-msg />
      <!-- 个人头像名称 -->
      <el-dropdown class="avatar-container">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <!-- <span class="user-name">某某某</span> -->
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/userSetting">
            <el-dropdown-item>
              信息设置
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Breadcrumb, Hamburger, Screenfull, ReplyMsg } from '@/components'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    Screenfull,
    ReplyMsg
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout () {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    display: flex;
    align-items: center;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 18px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
      &.select-container {
        width: 120px;
      }
    }
    // .btn-bell{
    //   position: relative;
    //   right: 5px;
    //   text-align: center;
    //   border-radius: 15px;
    //   cursor: pointer;
    //   line-height: 50px;
    //   top: 5px;
    // }
    // .btn-bell-badge {
    //   border-radius: 12px;
    //   background: #f56c6c;
    //   color: #fff;
    //   position: relative;
    //   top: -16px;
    //   padding: 2px 5px;
    //   right: 8px;
    //   font-size: 12px;
    // }
    // .el-icon-chat-dot-round::before{
    //   font-size: 26px;
    //   color: #5CC96B;
    // }
    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        // margin-top: 5px;
        // position: relative;
        display: flex;
        align-items: center;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .user-name {
          margin-left: 8px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          // position: absolute;
          // right: -20px;
          // top: 15px;
          font-size: 12px;
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
