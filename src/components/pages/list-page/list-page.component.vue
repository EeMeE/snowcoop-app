<template>
  <div id="listPage">Address List</div>
  <div class="list-wrapper">
    <div class="map-view-wrapper">
      <map-view v-if="addressList" v-bind:showList="false" v-bind:addressList="addressList"></map-view>
    </div>
  </div>
</template>
<script src="./list-page.component.js"></script>
<style src="./list-page.component.css"></style>
