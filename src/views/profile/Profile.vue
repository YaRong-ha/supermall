<template>
  <div id="profile">
    <nav-bar class="navbar"><div slot="middle">鸭绒商城</div></nav-bar>
    <profile-register></profile-register>
    <profile-remain></profile-remain>
    <profile-list></profile-list>
  </div>
</template>

<script>
/*eslint-disable */
import NavBar from "components/common/navbar/NavBar";
import ProfileRegister from "views/profile/childProfile/ProfileRegister";
import ProfileRemain from "views/profile/childProfile/ProfileRemain";
import ProfileList from "views/profile/childProfile/ProfileList";
export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileRegister,
    ProfileRemain,
    ProfileList
  }
};
</script>

<style scoped>
.navbar {
  color: white;
}
</style>
