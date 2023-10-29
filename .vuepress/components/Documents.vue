<template>

  <div class="container">
    <h1 style="width: fit-content; margin: 0 auto 50px; text-align: center; font-size: 4rem; font-weight: bold; background: linear-gradient(to right, rgb(95,102,229), rgb(173,84,142)); -webkit-background-clip: text; color: transparent;">
      文档</h1>
    <div class="row">
      <div class="col" v-for="doc in currentData">
        <div class="card" style="border: rgb(200,200,200) solid 1px; border-radius: 10px; overflow: hidden;">
          <img v-bind:src="doc.img" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title" style="padding-top: 10px;"><strong>{{ doc.title }}</strong></h5>
            <p class="card-text" style="height: 50px;">{{ doc.desc }}</p>
            <a v-bind:href="doc.link" class="btn btn-primary" style="border-radius: 5px;">阅读文档</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="margin: 20px 0;">
      <div class="col text-center">
        <div class="btn-group" role="group" style="border: rgb(13,110,253) solid 1px; border-radius: 5px;">
          <template v-for="index in sumPage">
            <button @click="changePage(index)"
                    v-if="index === currentPage"
                    type="button"
                    class="btn btn-primary">
              {{ index }}
            </button>
            <button @click="changePage(index)"
                    v-else
                    type="button"
                    class="btn btn-outline-primary">
              {{ index }}
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      docList: [
        [
          {
            title: "Fabric wiki",
            desc: "Fabric 官方中文文档。",
            link: "/docs/fabric/install/setup",
            img: "/imgs/cover/fabric.png"
          },
          {
            title: "1.2",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          },
          {
            title: "1.3",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          },
          {
            title: "1.4",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          },
          {
            title: "1.5",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          }
        ],
        [
          {
            title: "2.1",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          },
          {
            title: "2.2",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          },
          {
            title: "2.3",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          },
          {
            title: "2.4",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          },
          {
            title: "2.5",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          }
        ],
        [
          {
            title: "3.1",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          },
          {
            title: "3.2",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          },
          {
            title: "3.3",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          },
          {
            title: "3.4",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          },
          {
            title: "3.5",
            desc: "占位",
            link: "#",
            img: "/imgs/cover/default.png"
          }
        ]
      ],
      // 当前展示数据
      currentData: [],
      // 当前页码
      currentPage: 1,
      // 总页数
      sumPage: 1,

      changePage(index) {
        this.currentPage = index
        this.currentData = this.docList.slice(index - 1, index)[0]
      }

    }
  },

  mounted() {
    this.sumPage = this.docList.length
    this.currentData = this.docList[0]
  }

}
</script>

<style src="../public/css/bootstrap.min.css" scoped />