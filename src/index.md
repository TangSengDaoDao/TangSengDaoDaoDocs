---
layout: home

title: 唐僧叨叨
titleTemplate: 唐僧叨叨

hero:
  name: 唐僧叨叨
  text: 让企业轻松拥有自己的即时通讯
  tagline: 历时八年时间打造的运营级别的开源即时通讯聊天软件(WuKongIM提供通讯动力)
  actions:
   	- theme: brand
      text: 马上开始
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/TangSengDaoDao/TangSengDaoDaoServer

features:
  - icon: <span class="i-carbon:api"></span>
    title: 开源免费
    details: 服务端源码，APP源码，Web/PC端源码全部开源，Apache2.0开源协议（可商用），没人能拿捏你
  - icon: <span class="i-carbon:deployment-pattern"></span>
    title: 私有化部署
    details: 所有程序和数据都在自己的服务器上，不用担心数据泄露，不用担心数据被用于其他用途  
  - icon: <span class="i-carbon:ibm-cloud-pak-integration"></span>
    title: 消息必达
    details: 采用 tcp + ack机制，保证消息必达，支持离线消息，支持消息漫游。
  - icon: <span class="i-carbon:plug"></span>
    title: 内容安全
    details: 消息传输采用私有二进制加密协议、DH+流式加密，防止消息内容泄露
  - icon: <span class="i-carbon:ibm-cloud-hyper-protect-crypto-services"></span>
    title: 多设备消息同步
    details: 支持 1 个移动端、多个 Web/PC 端同时在线时，并且支持多端之间的消息实时同步。
  - icon: <span class="i-carbon:ibm-cloud-pak-manta-automated-data-lineage"></span>
    title: 消息永久存储
    details: 消息支持永久存储，得益于WuKongIM的自研消息db，永久存储不影响性能，只浪费点磁盘空间
---

<script setup>
import { onMounted } from 'vue'
import { fetchReleaseTag } from '../.vitepress/utils/fetchReleaseTag.js'

onMounted(() => {
  fetchReleaseTag()
})
</script>
