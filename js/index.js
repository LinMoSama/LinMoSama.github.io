const geci = `作词 : Fanko
作曲 : Fanko
编曲 : 罗洋（卡其漠）
出品：网易飓风 x聚声匠音乐
从不主动示弱
我们的过去
分分合合太多
伤人的话难说
却觉得很洒脱
曾经的那些发生过的开心和难过
就像开败的花
浪也拍打着沙
我却对你情有独钟
我陪你留下
说最浪漫的话
即便是青春的懵懂
但是我们渐行渐远
逐渐带上现实的枷锁
信任在短短解释后崩塌
我不知为何
疯狂对你执着
我们之间的故事还不多
这回忆的漩涡
快要把我吞没
求你别离开我
因为
我欠你太多
手松开的沉默
连着我这颗心也死了
对于你是解脱
而我如此落魄
求你别离开我
开败的花
浪也拍打着沙
我却对你情有独钟
我陪你留下
说最浪漫的话
即便是青春的懵懂
但是我们渐行渐远
逐渐带上现实的枷锁
信任在短短解释后崩塌
我不知为何
疯狂对你执着
我们之间的故事还不多
这回忆的漩涡
快要把我吞没
求你别离开我
因为
我欠你太多
手松开的沉默
连着我这颗心也死了
对于你是解脱
而我如此落魄
求你别离开我
我拼了命的隐藏着痛
努力微笑想让你回头
被泪水打湿的是一场梦
我在掩饰我的执着
爱还会不会回来
这是我的独白
我不知为何
疯狂对你执着
我们之间的故事还不多
这回忆的漩涡
快要把我吞没
求你别离开我
因为
我欠你太多
手松开的沉默
连着我这颗心也死了
对于你是解脱
而我如此落魄
求你别离开我
制作人：马也_ Crabbit
配唱制作人： Cole先生@聚声匠
吉他：大牛
和音编写及演唱： Cole先生@聚声匠，小手鹅_，马也_ Crabbit
人声&音频剪辑： LBI利比
混音工程师： LBI利比
母带工程师：周天澈@Studio21A
监制：贾焱祺， Cole先生@聚声匠
封面设计：阳阳`
const geciArr = geci.split('\n')

const ul = document.querySelector('.geci')
geciArr.forEach((item) => {
    let li = document.createElement('li')
    li.innerText = item
    ul.insertAdjacentElement("beforeend", li)

})


const btn = document.querySelector('#btn');
const mask = document.querySelector('.mask');
btn.addEventListener('click', () => {
    mask.style.display = 'none';
    document.querySelector('#music').play();
})