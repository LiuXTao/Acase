<template>
    <div class="board">
        <header class="header">
        <div class="logo">教务系统</div>
        <div class="clear"></div>
        <div class="nav">
            <el-menu @select="handleSelect" class="el-menu-demo" :default-active="$route.path" mode="horizontal" theme="dark" id="navigator" unique-opened router>
                <template v-for="item in items">
                    <template v-if="item.subs">
                    <el-submenu :index="item.index" class="modules">
                            <template slot="title">{{ item.title }}</template>
                            <template v-for="subItem in item.subs">
                                <el-menu-item :index="subItem.index">{{ subItem.title }}
                                </el-menu-item>
                            
                            </template>
                        </el-submenu>
                </template>
                    <template v-else>
                        <el-menu-item :index="item.index"class="modules">
                            <i class="el-icon-menu"></i>{{ item.title }}
                        </el-menu-item>
                    </template>
                </template>
            </el-menu>
            
        </div>
        
        </header>
        <div class="pos"></div>
    </div>
</template>
<script>
import Bus from '../pages/bus.js'
export default {

  name:'studentHead',
  
  data(){
      return{
          selectedIndex:'',
         
          items:[{
              index:'personal',
              title:'个人档案管理',
              subs:[{
                  index:'/student/fileInfo',
                  title:'个人档案',
              },{
                  index:'/student/password',
                  title:'修改密码'
              }]
          },{
              index:'queryManage',
              title:'查询管理',
              subs:[{
                  index:'/student/classTable',
                  title:'查询课表'
              },{
                  index:'/student/notification',
                  title:'查询通知'
                  },{
                      index:'/student/scoreQuery',
                      title:'查询成绩'
                  }]
          },{
              index:'/student/courseQuery',
              title:'查找课程',
              
          },{
              index:'/student/elective',
              title:'学生选课',
			   subs:[{
                  index:'/student/selectclass',
                  title:'选课'
              },{
                  index:'/student/dropclass',
                  title:'退课'
                  },{
                      index:'/student/selectedclass',
                      title:'查看已选课程'
                  }]
			  
          },{
              index:'login',
              title:'退出登录'
          }],

      }
  },
  methods:{
      handleSelect:function(key,keyPath){  
          this.selectedIndex=key;
        // //   if(this.selectedIndex=='/student/fileInfo'){
        // //       console.log(Bus);
        // //       Bus.$emit('stuid',this.stuId);
        // //       console.log('发送');
        //   }
      }
  },

 

}
</script>
<style scoped>
.clear{
    clear: both;
}
.board{
  
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
}
.header{

  background-color:#2D2F33;
  
    top:0;
    left: 0;
    width:100%;
    height: 70px;
    padding-bottom:10px;
    line-height:70px;
    z-index:100;
    display: table;
    position: fixed;

}
.logo{
   font-family: "STKaiti";
    float: left;
    padding-left:40px;
    font-size:30px;
    color:cornflowerblue;
}
.nav{
    width:100%;
}
.el-menu-demo{
    padding-left: 15px;
    padding-right:15px;
}
.modules{
    width:20%;
    height: 60px;
    line-height:60px;
    text-align:center;
    background: transparent;
    padding:0px;
}
.pos{
    height:38px;
}
a:link {
 text-decoration: none;
}
a:visited {
 text-decoration: none;
}
a:hover {
 text-decoration: none;
}
a:active {
 text-decoration: none;
}

</style>
