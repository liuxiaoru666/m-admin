<template>
  <div>
    <el-row v-for="item in rightData" :key="item.authName">
      <el-col :span="4" v-if='item.children'>
        <el-tag type="success" closable @close="closeTag(item.id)">{{
          item.authName
        }}</el-tag>
        <i class="el-icon-arrow-right" v-if="item.children"></i>
      </el-col>
      <el-col :span="20">
        <el-row v-for="item1 in item.children" :key="item1.authName">
          <el-col :span="4">
            <el-tag type="warning" closable @close="closeTag(item1.id)">{{
              item1.authName
            }}</el-tag>
            <i class="el-icon-arrow-right" v-if="item1.children"></i>
          </el-col>
          <el-col :span="20">
              <el-tag
              v-for="item2 in item1.children"
              :key="item2.authName"
              type="info"
              @close="closeTag(item2.id)"
              closable             
              >{{ item2.authName }}</el-tag
            >
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["rightData"],
  created(){
    console.log(this.rightData)
  },
  methods:{
     closeTag(id){
      this.$emit('closeRight',id)
    }
  }
};
</script>
<style style="scoped"></style>
