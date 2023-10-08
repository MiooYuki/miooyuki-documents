<template>
  <div class="container">

    <div class="row" style="margin-top: 20px;">
      <div class="col" v-for="doc in currentData">
        <div class="card" style="">
          <img v-bind:src="doc.img" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title" style="padding-top: 10px;"><strong>{{ doc.title }}</strong></h5>
            <p class="card-text">{{ doc.desc }}</p>
            <a v-bind:href="doc.link" class="btn text-bg-primary">阅读文档</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 20px;">
      <div class="col text-center">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
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
import "../public/js/bootstrap.min"

export default {
  data: function () {
    return {
      docList: [
        [
          {
            title: "Fabric wiki",
            desc: "Fabric 官方中文文档",
            link: "/docs/fabric/install/1",
            img: "/imgs/cover/03_HD.554121.jpg"
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

<style>
@import ".vuepress/public/css/bootstrap.min.css";
</style>