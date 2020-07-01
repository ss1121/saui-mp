const tabsData = [
  {
    title: '广东省',
    id: 'g',
    list: [
      {title: '广州市', id: 'g1', parentId: 'g'},
      {title: '深圳市', id: 'g2', parentId: 'g'},
      {title: '汕尾市', id: 'g3' , parentId: 'g'},
      {title: '清远市', id: 'g4', parentId: 'g'}
    ]
  },
  {
    title: '广西省',
    id: 'gx',
    list: [
      {title: '南宁市', id: 'gx1', parentId: 'gx'},
      {title: '百色市', id: 'gx2', parentId: 'gx'},
      {title: '北海市', id: 'gx3', parentId: 'gx'},
      {title: '桂林市', id: 'gx4', parentId: 'gx'}
    ]
  },
]

const location= [
  {
    title: '距离',
    id: 'distance',
    list: [
      {title: '附近', id: 'fj', parentId: 'distance'},
      {title: '1km以内', id: 'd1', parentId: 'distance'},
      {title: '2km以内', id: 'd2', parentId: 'distance'},
    ]
  },
  {
    title: '热门',
    id: 'hot',
    list: [
      {title: '白云国际机场', id: 'nz', parentId: 'hot'},
      {title: '广州东站', id: 'dz', parentId: 'hot'},
      {title: '广州塔', id: 'gzt', parentId: 'hot'},
      {title: '广州塔', id: 'gzt', parentId: 'hot'},
      {title: '广州塔', id: 'gzt', parentId: 'hot'},
      {title: '广州塔', id: 'gzt', parentId: 'hot'},
      {title: '广州塔', id: 'gzt', parentId: 'hot'},
      {title: '广州塔', id: 'gzt', parentId: 'hot'},
      {title: '广州塔', id: 'gzt', parentId: 'hot'},
      {title: '番禺长隆/广州南站附近', id: 'nz', parentId: 'hot'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'hot'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'hot'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'hot'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'hot'},
      {title: '环市东路附近', id: 'gzt', parentId: 'hot'},
    ]
  },
  {
    title: '商业区',
    id: 'xyq',
    list: [
      {title: '番禺长隆/广州南站附近', id: 'nz', parentId: 'xyq'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'xyq'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'xyq'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'xyq'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'xyq'},
      {title: '环市东路附近', id: 'gzt', parentId: 'xyq'},
      {title: '广州塔', id: 'gzt', parentId: 'xyq'},
      {title: '广州塔', id: 'gzt', parentId: 'xyq'},
      {title: '广州塔', id: 'gzt', parentId: 'xyq'},
    ]
  },
  {
    title: '机场车站',
    id: 'jccz',
    list: [
      {title: '番禺长隆/广州南站附近', id: 'nz', parentId: 'jccz'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'jccz'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'jccz'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'jccz'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'jccz'},
      {title: '环市东路附近', id: 'gzt', parentId: 'jccz'},
      {title: '广州塔', id: 'gzt', parentId: 'jccz'},
      {title: '广州塔', id: 'gzt', parentId: 'jccz'},
      {title: '广州塔', id: 'gzt', parentId: 'jccz'},
    ]
  },
  {
    title: '行政区',
    id: 'xzq',
    list: [
      {title: '番禺长隆/广州南站附近', id: 'nz', parentId: 'xzq'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'xzq'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'xzq'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'xzq'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'xzq'},
      {title: '环市东路附近', id: 'gzt', parentId: 'xzq'},
      {title: '广州塔', id: 'gzt', parentId: 'xzq'},
      {title: '广州塔', id: 'gzt', parentId: 'xzq'},
      {title: '广州塔', id: 'gzt', parentId: 'xzq'},
    ]
  },
  {
    title: '地铁线',
    id: 'dtx',
    list: [
      {title: '番禺长隆/广州南站附近', id: 'nz', parentId: 'dtx'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'dtx'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'dtx'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'dtx'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'dtx'},
      {title: '环市东路附近', id: 'gzt', parentId: 'dtx'},
      {title: '广州塔', id: 'gzt', parentId: 'dtx'},
      {title: '广州塔', id: 'gzt', parentId: 'dtx'},
      {title: '广州塔', id: 'gzt', parentId: 'dtx'},
    ]
  },
  {
    title: '景点',
    id: 'jd',
    list: [
      {title: '番禺长隆/广州南站附近', id: 'nz', parentId: 'jd'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'jd'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'jd'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'jd'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'jd'},
      {title: '环市东路附近', id: 'gzt', parentId: 'jd'},
      {title: '广州塔', id: 'gzt', parentId: 'jd'},
      {title: '广州塔', id: 'gzt', parentId: 'jd'},
      {title: '广州塔', id: 'gzt', parentId: 'jd'},
    ]
  },
  {
    title: '医院',
    id: 'yy',
    list: [
      {title: '医院番禺长隆/广州南站附近', id: 'nz', parentId: 'yy'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'yy'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'yy'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'yy'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'yy'},
      {title: '环市东路附近', id: 'gzt', parentId: 'yy'},
      {title: '广州塔', id: 'gzt', parentId: 'yy'},
      {title: '广州塔', id: 'gzt', parentId: 'yy'},
      {title: '广州塔', id: 'gzt', parentId: 'yy'},
    ]
  },
]
const location2 = [
  {
    title: '距离',
    id: 'distance2',
    list: [
      {title: '附近', id: 'fj', parentId: 'distance2'},
      {title: '1km以内', id: 'd1', parentId: 'distance2'},
      {title: '2km以内', id: 'd2', parentId: 'distance2'},
    ]
  },
  {
    title: '热门',
    id: 'hot2',
    list: [
      {title: '白云国际机场', id: 'nz', parentId: 'hot2'},
      {title: '广州东站', id: 'dz', parentId: 'hot2'},
      {title: '广州塔', id: 'gzt', parentId: 'hot2'},
      {title: '广州塔', id: 'gzt', parentId: 'hot2'},
      {title: '广州塔', id: 'gzt', parentId: 'hot2'},
      {title: '广州塔', id: 'gzt', parentId: 'hot2'},
      {title: '广州塔', id: 'gzt', parentId: 'hot2'},
      {title: '广州塔', id: 'gzt', parentId: 'hot2'},
      {title: '广州塔', id: 'gzt', parentId: 'hot2'},
      {title: '番禺长隆/广州南站附近', id: 'nz', parentId: 'hot2'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'hot2'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'hot2'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'hot2'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'hot2'},
      {title: '环市东路附近', id: 'gzt', parentId: 'hot2'},
    ]
  },
  {
    title: '商业区',
    id: 'xyq2',
    list: [
      {title: '番禺长隆/广州南站附近', id: 'nz', parentId: 'xyq2'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'xyq2'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'xyq2'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'xyq2'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'xyq2'},
      {title: '环市东路附近', id: 'gzt', parentId: 'xyq2'},
      {title: '广州塔', id: 'gzt', parentId: 'xyq2'},
      {title: '广州塔', id: 'gzt', parentId: 'xyq2'},
      {title: '广州塔', id: 'gzt', parentId: 'xyq2'},
    ]
  },
  {
    title: '机场车站',
    id: 'jccz2',
    list: [
      {title: '番禺长隆/广州南站附近', id: 'nz', parentId: 'jccz2'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'jccz2'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'jccz2'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'jccz2'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'jccz2'},
      {title: '环市东路附近', id: 'gzt', parentId: 'jccz2'},
      {title: '广州塔', id: 'gzt', parentId: 'jccz2'},
      {title: '广州塔', id: 'gzt', parentId: 'jccz2'},
      {title: '广州塔', id: 'gzt', parentId: 'jccz2'},
    ]
  },
  {
    title: '行政区',
    id: 'xzq2',
    list: [
      {title: '番禺长隆/广州南站附近', id: 'nz', parentId: 'xzq2'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'xzq2'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'xzq2'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'xzq2'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'xzq2'},
      {title: '环市东路附近', id: 'gzt', parentId: 'xzq2'},
      {title: '广州塔', id: 'gzt', parentId: 'xzq2'},
      {title: '广州塔', id: 'gzt', parentId: 'xzq2'},
      {title: '广州塔', id: 'gzt', parentId: 'xzq2'},
    ]
  },
  {
    title: '地铁线',
    id: 'dtx2',
    list: [
      {title: '番禺长隆/广州南站附近', id: 'nz', parentId: 'dtx2'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'dtx2'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'dtx2'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'dtx2'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'dtx2'},
      {title: '环市东路附近', id: 'gzt', parentId: 'dtx2'},
      {title: '广州塔', id: 'gzt', parentId: 'dtx2'},
      {title: '广州塔', id: 'gzt', parentId: 'dtx2'},
      {title: '广州塔', id: 'gzt', parentId: 'dtx2'},
    ]
  },
  {
    title: '景点',
    id: 'jd2',
    list: [
      {title: '番禺长隆/广州南站附近', id: 'nz', parentId: 'jd2'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'jd2'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'jd2'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'jd2'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'jd2'},
      {title: '环市东路附近', id: 'gzt', parentId: 'jd2'},
      {title: '广州塔', id: 'gzt', parentId: 'jd2'},
      {title: '广州塔', id: 'gzt', parentId: 'jd2'},
      {title: '广州塔', id: 'gzt', parentId: 'jd2'},
    ]
  },
  {
    title: '医院',
    id: 'yy2',
    list: [
      {title: '医院番禺长隆/广州南站附近', id: 'nz', parentId: 'yy2'},
      {title: '新白云国际机场附近', id: 'dz', parentId: 'yy2'},
      {title: '珠江新城/五羊新城商圈', id: 'gzt', parentId: 'yy2'},
      {title: '火车东站/天河体育中心', id: 'gzt', parentId: 'yy2'},
      {title: '海珠广场/北京路步行街', id: 'gzt', parentId: 'yy2'},
      {title: '环市东路附近', id: 'gzt', parentId: 'yy2'},
      {title: '广州塔', id: 'gzt', parentId: 'yy2'},
      {title: '广州塔', id: 'gzt', parentId: 'yy2'},
      {title: '广州塔', id: 'gzt', parentId: 'yy2'},
    ]
  },
]

const listx = [
  { title: '欢迎度排序', id: '1', parentId: 'list'},
  { title: '好评优化', id: '2', parentId: 'list'},
  { title: '点评数 高->低', id: '3', parentId: 'list'},
  { title: '低价优先', id: '4', parentId: 'list'},
  { title: '高价优先', id: '5', parentId: 'list'},
  { title: '直线距离 近->远', id: '6', parentId: 'list'},
]
export default {
  tabsData,
  location,
  location2,
  listx
}