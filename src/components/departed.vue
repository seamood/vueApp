<template>
  <el-container class='box'>
    <el-tree :data='data5' @node-expand='reload' @node-click='handleNodeClick'>
      <span class='custom-tree-node' slot-scope='{node, data}'>
        <span>
          <i :class='data.iconCls'></i>
          {{node.label}}
        </span>
      </span>
    </el-tree>
  </el-container>
</template>
<script>
import tree1 from './tree'
import { jsajx } from '../url/jsajx'
export default {
  components: {
    'v-tree': tree1
  },
  data () {
    return {
      data5: '',
      departed: {
        id: '',
        name: ''
      }
    }
  },
  mounted () {
    // this.getDepartment(0)
  },
  methods: {
    reload (data) {
      const id = data.id || ''
      this.getDepartment(id, data)
    },
    handleNodeClick (data) {
      this.departed.id = data.id || ''
      this.departed.name = data.label || ''
      this.$emit('clickRow', this.departed)
    },
    getDepartment (id, indexData) {
      // 获取部门列表
      let paramData = {
        pid: id
      }
      paramData = JSON.stringify(paramData)
      jsajx(
        '',
        'post',
        '/admin/department/getdepartmenttreedata.json',
        paramData,
        res => {
          res = JSON.parse(res)
          const data = res.data || []
          if (res.status === 200) {
            if (data && data.length > 0) {
              data.forEach(i => {
                if (!i.children && i.hasChildren > 0) {
                  this.$set(i, 'children', [{ iconCls: 'el-icon-loading' }])
                }
              })
              // console.log(data)
              switch (id) {
                case 0:
                  this.data5 = res.data
                  break
                default:
                  if (indexData) {
                    const newChild = res.data || []
                    if (!indexData.children) {
                      this.$set(indexData, 'children', newChild)
                    } else {
                      indexData.children = newChild
                    }
                  }
              }
            } else {
              this.$message({
                title: '错误',
                message: '暂无数据',
                type: 'warning'
              })
            }
          } else {
            this.$message.error({
              title: '错误',
              message: res.msg || '获取数据失败'
            })
          }
        }
      )
    }
  }
}
</script>
<style scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.icon-img {
  display: none;
}
.custom-tree-node:hover .icon-img {
  display: block;
}
.addAll {
  border-bottom: 1px solid #cccccc;
  padding: 0.1rem 0.2rem;
  font-size: 0.4rem;
}
.tree1 {
  width: 5rem;
}
.box {
  border: 1px solid #ccc;
  margin-top: 0.2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 13px 1px #ccc;
  height: 3rem;
  overflow: auto;
}
.left-box {
  border-right: 1px solid #ccc;
}
</style>
