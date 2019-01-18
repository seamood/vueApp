<template>
  <div class='custom-tree-container'>
    <div class='block'>
      <div class='addAll'>
        <span class='title'>菜单管理</span>
        <el-button type="success" icon="el-icon-plus" circle  @click='append(data4,0)'></el-button>
      </div>
      <el-tree
        :data='data4'
        node-key='id'
        default-expand-all
        :expand-on-click-node='false'
        :props='props4'
      >
        <span class='custom-tree-node' slot-scope='{ node, data }'>
          <!-- @click='$router.push(data.link)' 路由跳转 -->
          <span @click='() => rowClick(data)'>
            <i :class='data.iconCls'></i>
            {{ node.label }}
          </span>
          <span class='icon-img'>
            <el-button
              v-if='!node.parent.parent'
              type='text'
              size='mini'
              @click='() => append(data,1)'
              title='添加'
            >
              <i class='el-icon-plus'></i>
            </el-button>
            <el-button type='text' size='mini' @click='() => adopt(node, data)' title='修改'>
              <i class='el-icon-edit'></i>
            </el-button>
            <el-button type='text' size='mini' @click='() => remove(node, data)' title='删除'>
              <i class='el-icon-delete'></i>
            </el-button>
          </span>
        </span>
      </el-tree>
      <el-dialog title='添加角色' :visible.sync='outerVisible'>
        <v-from v-on:data='sure' v-on:cancel='cancel' :initData='form'></v-from>
      </el-dialog>
      <el-dialog title='修改角色' :visible.sync='outerVisible1'>
        <v-from v-on:data='sure1' v-on:cancel='cancel1' :initData='form1'></v-from>
      </el-dialog>
    </div>

  </div>
</template>
<script>
import { jsajx } from '../url/jsajx'
import from1 from './from'
export default {
  components: {
    'v-from': from1
  },
  data () {
    return {
      outerVisible: false,
      outerVisible1: false,
      data4list: '',
      type: '',
      data4: '',
      props4: {
        label: 'name'
      },
      form: {
        model: 'addRole',
        name: '',
        link: '',
        iconCls: '',
        pid: ''
      },
      form1: {
        model: 'addRole',
        type: 'detail',
        name: '',
        link: '',
        iconCls: '',
        pid: '',
        id: ''
      }
    }
  },
  mounted () {
    // jsajx('json','get', '/admin/menu/getmenumgdata.json', '', res => {
    //   res = JSON.parse(res)
    //   this.data4 = res.data || []
    //   // console.log(this.data4)
    // })
  },
  methods: {
    // 添加
    append (data, type) {
      this.outerVisible = true
      this.form.type = type
      switch (type) {
        case 0:
          this.form.pid = 0
          break
        case 1:
          this.form.pid = data.id
          break
      }
      this.data4list = data
    },
    // 修改
    adopt (node, data) {
      this.outerVisible1 = true
      this.form1.id = data.id
      this.form1.pid = node.parent.parent ? node.parent.data.id : 0
      this.form1.name = data.name || ''
      this.form1.link = data.link || ''
      this.form1.iconCls = data.iconCls || ''
      this.data4list = data
      // console.log('frome=' , this.form1)
    },
    // 删除
    remove (node, data) {
      const id = data.id
      var param = {
        id: id
      }
      // console.log(node, data)
      param = JSON.stringify(param)
      if (data.children && data.children.length > 0) {
        this.$message({
          message: '此菜单下还有子菜单不能删除',
          type: 'warning'
        })
      } else {
        jsajx('json', 'post', '/admin/menu/delmenu.json', param, res => {
          res = JSON.parse(res)
          if (res.status === 200) {
            const parent = node.parent
            const children = parent.data.children || parent.data
            const index = children.findIndex(d => d.id === data.id)
            children.splice(index, 1)
            this.$message({
              message: '删除成功！',
              type: 'success'
            })
          } else {
            this.$message.error(res.msg || '删除失败')
          }
          // console.log(res)
        })
      }
      this.outerVisible1 = false
    },
    sure (param) {
      const data = JSON.parse(param)
      const newChild = {
        name: data.name,
        link: data.link,
        iconCls: data.iconCls,
        children: []
      }
      jsajx('json', 'post', '/admin/menu/addmenu.json', param, res => {
        res = JSON.parse(res)
        if (res.status === 200) {
          switch (this.form.type) {
            case 0:
              this.data4list.push(newChild)
              break
            case 1:
              if (!this.data4list.children) {
                this.$set(this.data4list, 'children', [])
              }
              this.data4list.children.push(newChild)
              break
          }
          this.$message({
            message: '添加成功！',
            type: 'success'
          })
        } else {
          this.$message.error(res.msg || '添加失败')
        }
        // console.log(res)
      })
      this.outerVisible = false
    },
    sure1 (param) {
      const data = JSON.parse(param)
      // console.log(this.data4list)
      jsajx('json', 'post', '/admin/menu/editmenu.json', param, res => {
        res = JSON.parse(res)
        if (res.status === 200) {
          this.outerVisible1 = false
          const name = data.name || ''
          const link = data.link || ''
          const iconCls = data.iconCls || ''
          this.data4list.name = name
          this.data4list.link = link
          this.data4list.iconCls = iconCls
          this.$message({
            message: '添加成功！',
            type: 'success'
          })
        } else {
          this.$message.error(res.msg || '修改失败')
        }
        // console.log(res)
      })
    },
    cancel (data) {
      this.outerVisible = false
    },
    cancel1 (data) {
      this.outerVisible1 = false
    },
    rowClick (data) {
      this.$emit('rowClick', data)
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
.el-button.is-circle {
  border-radius: 50%;
  padding: 2px;
}
</style>
