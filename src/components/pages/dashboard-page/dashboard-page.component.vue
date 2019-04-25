<template>
  <div id="dashboardPage">
    <p class="dash">Hi {{firstName}}, welcome to Snowcoop</p>
    <el-container>
      <el-main>
        <div class="list-wrapper">
          <div class="list-view-wrapper">
            <el-card class="map-view-card">
              <!-- Hiding the addressList -->
              <map-view v-if="addressList" v-bind:showList="false" v-bind:addressList="addressList"></map-view>
            </el-card>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script src="./dashboard-page.component.js"></script>
<style src="./dashboard-page.component.css"></style>
