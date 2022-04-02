<template>
  <div class="wrap">
    <div class="home">
      <div v-html="tableau"></div>
    </div>
<!--    <iframe :src="iUrl" style="width:100%;height:100vh;" frameborder="0"></iframe>-->
  </div>
</template>

<script>
import axios from 'axios'
// import XLSX from "xlsx";
import XLSX from '../utils/xlsx.core.min'
export default {
  name: "excel",
  data(){
    return{
      tableau:null,
      url:'https://cdns4.91hilife.com/review/other/2022/03/17/6101084c-283e-4f30-ba03-b31f2c37e676.xls',
      iUrl:'http://view.officeapps.live.com/op/view.aspx?src='
    }
  },
  mounted() {
    axios.get(this.url,{
      responseType: "arraybuffer", // 设置响应体类型为arraybuffer
    }).then(({data})=> {
      let workbook = XLSX.read(new Uint8Array(data), {type:"array"}); // 解析数据
      var worksheet = workbook.Sheets[workbook.SheetNames[0]]; // workbook.SheetNames 下存的是该文件每个工作表名字,这里取出第一个工作表
      this.tableau = XLSX.utils.sheet_to_html(worksheet); // 渲染
    })
    // window.open('http://view.officeapps.live.com/op/view.aspx?src='+this.url)
    // this.iUrl = this.iUrl + encodeURIComponent(this.url)
  }
}
</script>

<style lang="scss" scoped>
  .wrap{
    .home{
      display: flex;
      justify-content: center;
       ::v-deep table{
        td{
          border:1px solid black;
        }
         tr:nth-child(-n+4){//行小于等于4时
           td{
             border:none !important;
           }
         }
         tr:nth-child(4){
           td{
             text-align: left;
           }
         }
         tr:nth-child(2){
           td{
             font-size: 20px;
             font-weight: bolder;
           }
         }
      }
    }
  }
</style>

<!--<template>-->
<!--  <div>-->
<!--    <el-button @click="useExportUtil">用封装的导出工具导出excel</el-button>-->
<!--    <el-button > 导入Excel<input type="file" accept=".xlsx,.xls" @change="useImportUtil"></el-button>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import excelUtil from '../utils/dealwithExcelUtil' // *** 引入 刚刚的封装的dealwithExcelUtil.js文件。-->
<!--export default {-->
<!--  methods: {-->
<!--    useImportUtil (e) {-->
<!--      excelUtil.importExcel(e)-->
<!--    },-->
<!--    useExportUtil () {-->
<!--      const initColumn = [{-->
<!--        title: '姓名',-->
<!--        dataIndex: 'name',-->
<!--        key: 'name',-->
<!--        className: 'text-monospace'-->
<!--      }, {-->
<!--        title: '年级',-->
<!--        dataIndex: 'grade',-->
<!--        key: 'grade'-->
<!--      }, {-->
<!--        title: '部门',-->
<!--        dataIndex: 'department',-->
<!--        key: 'department'-->
<!--      }]-->

<!--      let attendanceInfoList = [-->
<!--        {-->
<!--          name: '张三',-->
<!--          grade: '2017级',-->
<!--          department: '前端部门'-->

<!--        },-->
<!--        {-->
<!--          name: '李四',-->
<!--          grade: '2017级',-->
<!--          department: '程序部门'-->

<!--        }]-->
<!--      excelUtil.exportExcel(initColumn, attendanceInfoList, '最新人员名单.xlsx')-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
